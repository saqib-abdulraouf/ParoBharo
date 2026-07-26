import uuid
from django.db import models
from django.conf import settings
from apps.products.models import Product, MockExam, Lesson

class Favorite(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='favorites')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    exam = models.ForeignKey(MockExam, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'product', 'exam')

    def __str__(self):
        item = self.product or self.exam
        return f"{self.user} - Favorite: {item}"

class StudentNote(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='notes')
    note_key = models.CharField(max_length=100, help_text="e.g. django_w1l1_notes")
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, null=True, blank=True)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Note by {self.user} ({self.note_key})"
