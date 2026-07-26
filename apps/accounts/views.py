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
            return redirect('dashboard:index')
        return render(request, self.template_name)

    def post(self, request):
        email = request.POST.get('email', '').strip()
        password = request.POST.get('password', '')

        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, f"Welcome back, {user.username}!")
            return redirect('dashboard:index')
        else:
            messages.error(request, "Invalid email or password.")
            return render(request, self.template_name, {'email': email})

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
