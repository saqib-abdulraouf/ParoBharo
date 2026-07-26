from django.contrib import admin
from apps.categories.models import Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'parent', 'is_featured', 'created_at')
    list_filter = ('is_featured', 'parent')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name', 'description')
