from django.contrib import admin
from apps.dashboard.models import Favorite, StudentNote

@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'exam', 'created_at')
    list_filter = ('user',)
    search_fields = ('user__email', 'product__name', 'exam__title')

@admin.register(StudentNote)
class StudentNoteAdmin(admin.ModelAdmin):
    list_display = ('user', 'note_key', 'lesson', 'updated_at')
    list_filter = ('note_key',)
    search_fields = ('user__email', 'note_key', 'content')
