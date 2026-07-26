from django.urls import path
from apps.products.views import (
    ShopView, FiaSiMockTestView, FiaUdcMockTestView, BanoQabilMockTestView, 
    BooksView, BitCoinBookView, BitCoinLesson1View,
    DjangoBookView, DjangoInterviewView,
    DjangoWeek1Lesson1View, DjangoWeek1Lesson2View, DjangoWeek1Lesson3View, DjangoWeek1Lesson4View, DjangoWeek1Lesson5View,
    DjangoWeek2Lesson1View, DjangoWeek2Lesson2View, DjangoWeek2Lesson3View, DjangoWeek2Lesson4View,
    DjangoWeek3Lesson1View, DjangoWeek3Lesson2View, DjangoWeek3Lesson3View,
    DjangoWeek4Lesson1View, DjangoWeek4Lesson2View, DjangoWeek4Lesson3View, DjangoWeek4Lesson4View
)

app_name = 'products'

urlpatterns = [
    path('', ShopView.as_view(), name='shop'),
    path('books/', BooksView.as_view(), name='books'),
    path('books/bitcoin/', BitCoinBookView.as_view(), name='bitcoin-book'),
    path('books/bitcoin/lesson-1/', BitCoinLesson1View.as_view(), name='bitcoin-lesson-1'),
    
    # Django Course Routes
    path('books/django/', DjangoBookView.as_view(), name='django-book'),
    
    # Week 1
    path('books/django/week1/l1/', DjangoWeek1Lesson1View.as_view(), name='django-week1-l1'),
    path('books/django/week1/l2/', DjangoWeek1Lesson2View.as_view(), name='django-week1-l2'),
    path('books/django/week1/l3/', DjangoWeek1Lesson3View.as_view(), name='django-week1-l3'),
    path('books/django/week1/l4/', DjangoWeek1Lesson4View.as_view(), name='django-week1-l4'),
    path('books/django/week1/l5/', DjangoWeek1Lesson5View.as_view(), name='django-week1-l5'),
    
    # Week 2
    path('books/django/week2/l1/', DjangoWeek2Lesson1View.as_view(), name='django-week2-l1'),
    path('books/django/week2/l2/', DjangoWeek2Lesson2View.as_view(), name='django-week2-l2'),
    path('books/django/week2/l3/', DjangoWeek2Lesson3View.as_view(), name='django-week2-l3'),
    path('books/django/week2/l4/', DjangoWeek2Lesson4View.as_view(), name='django-week2-l4'),
    
    # Week 3
    path('books/django/week3/l1/', DjangoWeek3Lesson1View.as_view(), name='django-week3-l1'),
    path('books/django/week3/l2/', DjangoWeek3Lesson2View.as_view(), name='django-week3-l2'),
    path('books/django/week3/l3/', DjangoWeek3Lesson3View.as_view(), name='django-week3-l3'),
    
    # Week 4
    path('books/django/week4/l1/', DjangoWeek4Lesson1View.as_view(), name='django-week4-l1'),
    path('books/django/week4/l2/', DjangoWeek4Lesson2View.as_view(), name='django-week4-l2'),
    path('books/django/week4/l3/', DjangoWeek4Lesson3View.as_view(), name='django-week4-l3'),
    path('books/django/week4/l4/', DjangoWeek4Lesson4View.as_view(), name='django-week4-l4'),
    
    # Django Interview Preparation
    path('books/django/interview/', DjangoInterviewView.as_view(), name='django-interview'),
    
    path('fia-si/', FiaSiMockTestView.as_view(), name='fia-si'),
    path('fia-udc/', FiaUdcMockTestView.as_view(), name='fia-udc'),
    path('bano-qabil/', BanoQabilMockTestView.as_view(), name='bano-qabil'),
]


