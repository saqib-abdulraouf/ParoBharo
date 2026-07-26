from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from apps.accounts.models import CustomUser, UserProfile

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'username', 'role', 'is_verified', 'is_staff', 'is_active', 'date_joined')
    list_filter = ('role', 'is_verified', 'is_staff', 'is_active')
    fieldsets = UserAdmin.fieldsets + (
        ('Custom Profile Info', {'fields': ('role', 'phone_number', 'is_verified')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Custom Profile Info', {'fields': ('email', 'role', 'phone_number', 'is_verified')}),
    )
    search_fields = ('email', 'username', 'phone_number')
    ordering = ('-date_joined',)

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'target_exam', 'institution', 'created_at')
    search_fields = ('user__email', 'user__username', 'target_exam', 'institution')

admin.site.register(CustomUser, CustomUserAdmin)
