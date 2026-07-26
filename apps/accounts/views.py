from django.views.generic import TemplateView

class SignInView(TemplateView):
    template_name = 'accounts/signin.html'

class SignUpView(TemplateView):
    template_name = 'accounts/signup.html'

class ForgetPasswordView(TemplateView):
    template_name = 'accounts/forget-password.html'
