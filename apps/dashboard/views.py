from django.views.generic import TemplateView

class DashboardView(TemplateView):
    template_name = 'stu-dashboard/dashboard.html'

class MyExamsView(TemplateView):
    template_name = 'stu-dashboard/my-exams.html'

class MyFavoritesView(TemplateView):
    template_name = 'stu-dashboard/my-favorites.html'

class ResultsView(TemplateView):
    template_name = 'stu-dashboard/results.html'

