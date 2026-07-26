from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.db.models import Sum, Count, Q
from apps.accounts.models import CustomUser, UserRole
from apps.categories.models import Category
from apps.products.models import Product, MockExam, ExamAttempt, Question
from apps.orders.models import Order

class DashboardView(TemplateView):
    template_name = 'stu-dashboard/dashboard.html'

class MyExamsView(TemplateView):
    template_name = 'stu-dashboard/my-exams.html'

class MyFavoritesView(TemplateView):
    template_name = 'stu-dashboard/my-favorites.html'

class ResultsView(TemplateView):
    template_name = 'stu-dashboard/results.html'

class AdminDashboardView(LoginRequiredMixin, UserPassesTestMixin, TemplateView):
    template_name = 'stu-dashboard/admin_dashboard.html'

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
