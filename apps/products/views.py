from django.views.generic import TemplateView
from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils import timezone
from django.contrib import messages
from apps.products.models import Product, MockExam, Question, ExamAttempt, UserAnswer

class ShopView(TemplateView):
    template_name = 'all-exam/exam.html'

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        ctx['products'] = Product.objects.all()
        ctx['mock_exams'] = MockExam.objects.filter(is_live=True)
        return ctx

class BaseMockTestView(LoginRequiredMixin, View):
    login_url = 'accounts:signin'
    template_name = ''
    exam_title = ''

    def get(self, request):
        exam = MockExam.objects.filter(title__icontains=self.exam_title).first()
        questions = Question.objects.filter(exam=exam) if exam else []
        return render(request, self.template_name, {'exam': exam, 'questions': questions})

    def post(self, request):
        exam = MockExam.objects.filter(title__icontains=self.exam_title).first()
        if not exam:
            # Fallback to create dummy test entry for demonstration
            exam = MockExam.objects.first()

        questions = Question.objects.filter(exam=exam)
        correct_count = 0
        wrong_count = 0
        total_questions = questions.count() or 1

        # Create Exam Attempt in database
        attempt = ExamAttempt.objects.create(
            user=request.user,
            exam=exam,
            total_questions=total_questions,
            status='IN_PROGRESS'
        )

        for q in questions:
            selected_option = request.POST.get(f'question_{q.id}')
            is_correct = (selected_option == q.correct_option)
            if is_correct:
                correct_count += 1
            elif selected_option:
                wrong_count += 1

            UserAnswer.objects.create(
                attempt=attempt,
                question=q,
                selected_option=selected_option,
                is_correct=is_correct
            )

        # Update attempt score & status
        score = (correct_count / total_questions) * exam.total_marks if exam else correct_count * 10
        is_passed = (score >= exam.passing_marks) if exam else (score >= 50)
        
        attempt.score = score
        attempt.correct_count = correct_count
        attempt.wrong_count = wrong_count
        attempt.status = 'COMPLETED'
        attempt.is_passed = is_passed
        attempt.completed_at = timezone.now()
        attempt.save()

        messages.success(request, f"Test submitted successfully! Your score: {score:.1f}/{exam.total_marks if exam else 100}")
        return redirect('dashboard:results')

class FiaSiMockTestView(BaseMockTestView):
    template_name = 'live-mock-test/FIA-SI.html'
    exam_title = 'FIA'

class FiaUdcMockTestView(BaseMockTestView):
    template_name = 'live-mock-test/FIA-UDC.html'
    exam_title = 'FIA'

class BanoQabilMockTestView(BaseMockTestView):
    template_name = 'live-mock-test/bano-qabil.html'
    exam_title = 'Bano Qabil'

class BooksView(TemplateView):
    template_name = 'Books/index.html'

class BitCoinBookView(TemplateView):
    template_name = 'Books/BitCoin/index.html'

class BitCoinLesson1View(TemplateView):
    template_name = 'Books/BitCoin/M1-T1.html'

# Django Course Views — Base mixin for sidebar context
class DjangoCourseContextMixin:
    active_lesson = ''
    active_week = ''
    notes_key = 'django_notes'

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        ctx['active_lesson'] = self.active_lesson
        ctx['active_week'] = self.active_week
        ctx['notes_key'] = self.notes_key
        return ctx

class DjangoBookView(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/index.html'
    active_lesson = 'overview'
    notes_key = 'django_overview_notes'

# Week 1
class DjangoWeek1Lesson1View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week1-L1.html'
    active_lesson = 'w1l1'
    active_week = 'w1'
    notes_key = 'django_w1l1_notes'

class DjangoWeek1Lesson2View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week1-L2.html'
    active_lesson = 'w1l2'
    active_week = 'w1'
    notes_key = 'django_w1l2_notes'

class DjangoWeek1Lesson3View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week1-L3.html'
    active_lesson = 'w1l3'
    active_week = 'w1'
    notes_key = 'django_w1l3_notes'

class DjangoWeek1Lesson4View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week1-L4.html'
    active_lesson = 'w1l4'
    active_week = 'w1'
    notes_key = 'django_w1l4_notes'

class DjangoWeek1Lesson5View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week1-L5.html'
    active_lesson = 'w1l5'
    active_week = 'w1'
    notes_key = 'django_w1l5_notes'

# Week 2
class DjangoWeek2Lesson1View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week2-L1.html'
    active_lesson = 'w2l1'
    active_week = 'w2'
    notes_key = 'django_w2l1_notes'

class DjangoWeek2Lesson2View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week2-L2.html'
    active_lesson = 'w2l2'
    active_week = 'w2'
    notes_key = 'django_w2l2_notes'

class DjangoWeek2Lesson3View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week2-L3.html'
    active_lesson = 'w2l3'
    active_week = 'w2'
    notes_key = 'django_w2l3_notes'

class DjangoWeek2Lesson4View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week2-L4.html'
    active_lesson = 'w2l4'
    active_week = 'w2'
    notes_key = 'django_w2l4_notes'

# Week 3
class DjangoWeek3Lesson1View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week3-L1.html'
    active_lesson = 'w3l1'
    active_week = 'w3'
    notes_key = 'django_w3l1_notes'

class DjangoWeek3Lesson2View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week3-L2.html'
    active_lesson = 'w3l2'
    active_week = 'w3'
    notes_key = 'django_w3l2_notes'

class DjangoWeek3Lesson3View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week3-L3.html'
    active_lesson = 'w3l3'
    active_week = 'w3'
    notes_key = 'django_w3l3_notes'

# Week 4
class DjangoWeek4Lesson1View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week4-L1.html'
    active_lesson = 'w4l1'
    active_week = 'w4'
    notes_key = 'django_w4l1_notes'

class DjangoWeek4Lesson2View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week4-L2.html'
    active_lesson = 'w4l2'
    active_week = 'w4'
    notes_key = 'django_w4l2_notes'

class DjangoWeek4Lesson3View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week4-L3.html'
    active_lesson = 'w4l3'
    active_week = 'w4'
    notes_key = 'django_w4l3_notes'

class DjangoWeek4Lesson4View(DjangoCourseContextMixin, TemplateView):
    template_name = 'Books/Djnago/django-read/week4-L4.html'
    active_lesson = 'w4l4'
    active_week = 'w4'
    notes_key = 'django_w4l4_notes'

class DjangoInterviewView(TemplateView):
    template_name = 'Books/Djnago/django-interview/index.html'
