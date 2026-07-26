from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.db.models import Sum, Count, Avg, Q
from apps.accounts.models import CustomUser, UserRole
from apps.categories.models import Category
from apps.products.models import Product, MockExam, ExamAttempt, Question
from apps.orders.models import Order
from apps.dashboard.models import Favorite, StudentNote

class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'stu-dashboard/dashboard.html'
    login_url = 'accounts:signin'

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        user = self.request.user
        
        # User Specific Database Stats
        user_attempts = ExamAttempt.objects.filter(user=user)
        completed_attempts = user_attempts.filter(status='COMPLETED')
        
        ctx['exams_completed_count'] = completed_attempts.count()
        ctx['favorites_count'] = Favorite.objects.filter(user=user).count()
        
        # Average score percentage
        avg_score = completed_attempts.aggregate(Avg('score'))['score__avg']
        ctx['avg_score_percentage'] = round(avg_score, 1) if avg_score is not None else 0.0

        # Recent attempts for logged-in student
        ctx['my_recent_attempts'] = user_attempts.select_related('exam').order_by('-started_at')[:5]
        
        # Available Mock Exams for Student
        ctx['available_mock_exams'] = MockExam.objects.filter(is_live=True).select_related('category')[:6]
        ctx['recommended_books'] = Product.objects.filter(is_featured=True).select_related('category')[:4]
        
        return ctx

class MyExamsView(LoginRequiredMixin, TemplateView):
    template_name = 'stu-dashboard/my-exams.html'
    login_url = 'accounts:signin'

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        user = self.request.user
        ctx['my_attempts'] = ExamAttempt.objects.filter(user=user).select_related('exam', 'exam__category').order_by('-started_at')
        ctx['available_exams'] = MockExam.objects.filter(is_live=True).select_related('category')
        return ctx

class MyFavoritesView(LoginRequiredMixin, TemplateView):
    template_name = 'stu-dashboard/my-favorites.html'
    login_url = 'accounts:signin'

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        user = self.request.user
        ctx['favorites_list'] = Favorite.objects.filter(user=user).select_related('product', 'exam', 'product__category', 'exam__category')
        return ctx

class ResultsView(LoginRequiredMixin, TemplateView):
    template_name = 'stu-dashboard/results.html'
    login_url = 'accounts:signin'

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        user = self.request.user
        ctx['exam_results'] = ExamAttempt.objects.filter(user=user, status='COMPLETED').select_related('exam', 'exam__category').order_by('-completed_at')
        return ctx

class AdminDashboardView(LoginRequiredMixin, UserPassesTestMixin, TemplateView):
    template_name = 'stu-dashboard/admin_dashboard.html'
    login_url = 'accounts:signin'

    def test_func(self):
        return self.request.user.is_staff or self.request.user.role == UserRole.ADMIN

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        
        # KPI Stats
        ctx['total_students'] = CustomUser.objects.filter(role=UserRole.STUDENT).count()
        ctx['total_instructors'] = CustomUser.objects.filter(role=UserRole.INSTRUCTOR).count()
        ctx['total_products'] = Product.objects.count()
        ctx['total_categories'] = Category.objects.count()
        ctx['total_mock_exams'] = MockExam.objects.count()
        ctx['live_mock_exams'] = MockExam.objects.filter(is_live=True).count()
        ctx['total_attempts'] = ExamAttempt.objects.count()
        
        # Exam Pass Rate
        passed_attempts = ExamAttempt.objects.filter(is_passed=True).count()
        ctx['passed_attempts'] = passed_attempts
        ctx['pass_rate'] = round((passed_attempts / ctx['total_attempts'] * 100), 1) if ctx['total_attempts'] > 0 else 0
        
        # Orders & Revenue
        ctx['total_orders'] = Order.objects.count()
        revenue = Order.objects.filter(status='PAID').aggregate(Sum('total_amount'))['total_amount__sum']
        ctx['total_revenue'] = revenue if revenue else 0.0

        # Recent Data Tables
        ctx['recent_students'] = CustomUser.objects.select_related('profile').order_by('-date_joined')[:6]
        ctx['recent_attempts'] = ExamAttempt.objects.select_related('user', 'exam').order_by('-started_at')[:6]
        ctx['recent_orders'] = Order.objects.select_related('user').order_by('-created_at')[:6]
        ctx['mock_exams_list'] = MockExam.objects.annotate(questions_count=Count('questions')).order_by('-created_at')[:6]

        return ctx
