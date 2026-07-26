from django.contrib import admin
from apps.products.models import (
    Product, CourseModule, Lesson, ProductReview,
    MockExam, Question, ExamAttempt, UserAnswer
)

class LessonInline(admin.TabularInline):
    model = Lesson
    extra = 1

class CourseModuleInline(admin.TabularInline):
    model = CourseModule
    extra = 1

class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1

class UserAnswerInline(admin.TabularInline):
    model = UserAnswer
    extra = 0
    readonly_fields = ('question', 'selected_option', 'is_correct')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'product_type', 'category', 'price', 'discount_price', 'rating', 'is_best_seller', 'is_featured', 'created_at')
    list_filter = ('product_type', 'category', 'is_best_seller', 'is_featured')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name', 'description')
    inlines = [CourseModuleInline]

@admin.register(CourseModule)
class CourseModuleAdmin(admin.ModelAdmin):
    list_display = ('title', 'product', 'order')
    list_filter = ('product',)
    inlines = [LessonInline]

@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ('title', 'module', 'order', 'is_free_preview')
    list_filter = ('is_free_preview', 'module__product')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(ProductReview)
class ProductReviewAdmin(admin.ModelAdmin):
    list_display = ('product', 'user', 'rating', 'created_at')
    list_filter = ('rating', 'product')
    readonly_fields = ('created_at',)

@admin.register(MockExam)
class MockExamAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'duration_minutes', 'total_marks', 'passing_marks', 'is_live', 'is_free')
    list_filter = ('is_live', 'is_free', 'category')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'description')
    inlines = [QuestionInline]

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('exam', 'question_text', 'correct_option', 'marks')
    list_filter = ('exam', 'correct_option')
    search_fields = ('question_text',)

@admin.register(ExamAttempt)
class ExamAttemptAdmin(admin.ModelAdmin):
    list_display = ('user', 'exam', 'score', 'correct_count', 'wrong_count', 'status', 'is_passed', 'started_at')
    list_filter = ('status', 'is_passed', 'exam')
    readonly_fields = ('started_at', 'completed_at')
    inlines = [UserAnswerInline]

@admin.register(UserAnswer)
class UserAnswerAdmin(admin.ModelAdmin):
    list_display = ('attempt', 'question', 'selected_option', 'is_correct')
    list_filter = ('is_correct',)
