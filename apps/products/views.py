from django.views.generic import TemplateView

class ShopView(TemplateView):
    template_name = 'all-exam/exam.html'

class FiaSiMockTestView(TemplateView):
    template_name = 'live-mock-test/FIA-SI.html'

class FiaUdcMockTestView(TemplateView):
    template_name = 'live-mock-test/FIA-UDC.html'

class BanoQabilMockTestView(TemplateView):
    template_name = 'live-mock-test/bano-qabil.html'

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

