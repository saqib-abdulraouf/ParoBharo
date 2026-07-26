from django.shortcuts import render, redirect
from django.views import View
from django.views.generic import TemplateView
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from apps.accounts.models import CustomUser, UserProfile, UserRole

class SignInView(View):
    template_name = 'accounts/signin.html'

    def get(self, request):
        if request.user.is_authenticated:
            next_url = request.GET.get('next')
            return redirect(next_url) if next_url else redirect('dashboard:index')
        return render(request, self.template_name)

    def post(self, request):
        email_or_username = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')
        next_url = request.GET.get('next') or request.POST.get('next')

        user = None
        # 1. Try authenticating as email
        if '@' in email_or_username:
            user = authenticate(request, email=email_or_username, password=password)
        
        # 2. If email authentication failed or user entered username instead of email
        if user is None:
            try:
                user_obj = CustomUser.objects.filter(username__iexact=email_or_username).first()
                if not user_obj:
                    user_obj = CustomUser.objects.filter(email__iexact=email_or_username).first()
                if user_obj:
                    user = authenticate(request, email=user_obj.email, password=password)
            except Exception:
                user = None

        if user is not None:
            login(request, user)
            messages.success(request, f"Welcome back, {user.username}!")
            if next_url and next_url != 'None':
                return redirect(next_url)
            return redirect('dashboard:index')
        else:
            messages.error(request, "Invalid username/email or password. Please try again.")
            return render(request, self.template_name, {'email': email_or_username})

class SignUpView(View):
    template_name = 'accounts/signup.html'

    def get(self, request):
        if request.user.is_authenticated:
            return redirect('dashboard:index')
        return render(request, self.template_name)

    def post(self, request):
        full_name = request.POST.get('fullName', '').strip()
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')
        confirm_password = request.POST.get('confirmPassword', '')

        if not email or not password or not full_name:
            messages.error(request, "All fields are required.")
            return render(request, self.template_name)

        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
            return render(request, self.template_name)

        if CustomUser.objects.filter(email=email).exists():
            messages.error(request, "An account with this email already exists.")
            return render(request, self.template_name)

        # Create new CustomUser in Database
        user = CustomUser.objects.create_user(
            username=full_name,
            email=email,
            password=password,
            role=UserRole.STUDENT
        )
        
        # Create UserProfile in Database
        UserProfile.objects.create(
            user=user,
            target_exam='General Preparation'
        )

        # Log in the new user automatically
        login(request, user)
        messages.success(request, "Account created successfully! Welcome to ParoBharo.")
        return redirect('dashboard:index')

class SignOutView(View):
    def get(self, request):
        logout(request)
        messages.info(request, "You have been logged out.")
        return redirect('core:home')

class ForgetPasswordView(TemplateView):
    template_name = 'accounts/forget-password.html'
