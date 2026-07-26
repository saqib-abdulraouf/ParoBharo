from django.urls import path
from apps.dashboard.views import DashboardView, MyExamsView, MyFavoritesView, ResultsView

app_name = 'dashboard'

urlpatterns = [
    path('', DashboardView.as_view(), name='index'),
    path('my-exams/', MyExamsView.as_view(), name='my_exams'),
    path('my-favorites/', MyFavoritesView.as_view(), name='my_favorites'),
    path('results/', ResultsView.as_view(), name='results'),
]
