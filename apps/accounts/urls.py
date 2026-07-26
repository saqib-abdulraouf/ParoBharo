from django.urls import path
from apps.accounts.views import SignInView, SignUpView, ForgetPasswordView

app_name = 'accounts'

urlpatterns = [
    path('signin/', SignInView.as_view(), name='signin'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('forget-password/', ForgetPasswordView.as_view(), name='forget_password'),
]
