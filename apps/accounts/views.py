import uuid
from django.shortcuts import render, redirect
from django.views import View
from django.views.generic import TemplateView
from django.contrib.auth import login, logout
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

        if not email_or_username or not password:
            messages.error(request, "Please enter both username/email and password.")
            return render(request, self.template_name, {'email': email_or_username})

        # 1. Search for user by email or username
        user_obj = CustomUser.objects.filter(email__iexact=email_or_username).first()
        if not user_obj:
            user_obj = CustomUser.objects.filter(username__iexact=email_or_username).first()

        # 2. Verify password & active status
        if user_obj and user_obj.check_password(password) and user_obj.is_active:
            login(request, user_obj)
            messages.success(request, f"Welcome back, {user_obj.username}!")
            if next_url and next_url != 'None' and next_url.startswith('/'):
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

        if len(password) < 6:
            messages.error(request, "Password must be at least 6 characters long.")
            return render(request, self.template_name)

        if CustomUser.objects.filter(email__iexact=email).exists():
            messages.error(request, "An account with this email already exists. Please Sign In.")
            return render(request, self.template_name)

        try:
            # Generate valid clean username from email (removing invalid characters like spaces)
            base_user = email.split('@')[0]
            clean_username = "".join(c for c in base_user if c.isalnum() or c in "_-")
            if not clean_username:
                clean_username = "user_" + str(uuid.uuid4())[:8]

            username = clean_username
            counter = 1
            while CustomUser.objects.filter(username__iexact=username).exists():
                username = f"{clean_username}_{counter}"
                counter += 1

            # Create CustomUser in Database
            user = CustomUser.objects.create_user(
                username=username,
                email=email,
                password=password,
                role=UserRole.STUDENT,
                first_name=full_name
            )
            
            # Create UserProfile in Database
            UserProfile.objects.create(
                user=user,
                target_exam='General Preparation'
            )

            # Automatically log in the user
            login(request, user)
            messages.success(request, "Account created successfully! Welcome to ParoBharo.")
            return redirect('dashboard:index')

        except Exception as e:
            messages.error(request, f"Error creating account: {str(e)}")
            return render(request, self.template_name)

class SignOutView(View):
    def get(self, request):
        logout(request)
        messages.info(request, "You have been logged out.")
        return redirect('core:home')

class ForgetPasswordView(TemplateView):
    template_name = 'accounts/forget-password.html'
