from django.core.management.base import BaseCommand
from apps.accounts.models import CustomUser, UserRole, UserProfile
from apps.categories.models import Category
from apps.products.models import Product, ProductType, MockExam, Question, QuestionOption, CourseModule, Lesson

class Command(BaseCommand):
    help = 'Seeds initial database data (Admin user, Categories, Products, and Mock Tests)'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Starting database seeding...'))

        # 1. Create Admin Superuser if not exists
        admin_email = 'admin@parobharo.com'
        if not CustomUser.objects.filter(email=admin_email).exists():
            admin_user = CustomUser.objects.create_superuser(
                username='admin',
                email=admin_email,
                password='adminpassword123',
                role=UserRole.ADMIN,
                is_verified=True
            )
            UserProfile.objects.create(
                user=admin_user,
                bio='System Administrator for ParoBharo Platform',
                target_exam='All Exams'
            )
            self.stdout.write(self.style.SUCCESS(f'Created Superuser: {admin_email} (Password: adminpassword123)'))

        # 2. Create Categories
        cat_fia, _ = Category.objects.get_or_create(
            name='FIA Mock Tests',
            defaults={'icon': 'bi-shield-check', 'description': 'Federal Investigation Agency Recruitment Tests', 'is_featured': True}
        )
        cat_bq, _ = Category.objects.get_or_create(
            name='Bano Qabil Exams',
            defaults={'icon': 'bi-award', 'description': 'Bano Qabil Aptitude & Scholarship Tests', 'is_featured': True}
        )
        cat_prog, _ = Category.objects.get_or_create(
            name='Programming & Development',
            defaults={'icon': 'bi-code-slash', 'description': 'Python, Django, Web Development Books & Courses', 'is_featured': True}
        )
        self.stdout.write(self.style.SUCCESS('Created initial Categories.'))

        # 3. Create Sample Products / Books
        product_django, _ = Product.objects.get_or_create(
            name='Mastering Django 4 Web Development',
            defaults={
                'product_type': ProductType.COURSE,
                'category': cat_prog,
                'price': 1500.00,
                'discount_price': 999.00,
                'rating': 4.9,
                'review_count': 128,
                'description': 'Comprehensive step-by-step course and ebook on Django framework.',
                'badge': 'BEST SELLER',
                'is_best_seller': True,
                'is_featured': True,
                'icon': 'bi-journal-code'
            }
        )

        # Create Modules & Lessons for Django Course
        mod1, _ = CourseModule.objects.get_or_create(product=product_django, title='Week 1: Foundations & Setup', order=1)
        Lesson.objects.get_or_create(
            module=mod1,
            title='Introduction to Django & MVT Architecture',
            defaults={'content': 'Welcome to Week 1 Lesson 1 of Django course.', 'order': 1, 'is_free_preview': True}
        )
        Lesson.objects.get_or_create(
            module=mod1,
            title='Setting Up Models & Databases',
            defaults={'content': 'Learn how to define Django Models and connect PostgreSQL.', 'order': 2}
        )

        # 4. Create Sample Mock Exams
        fia_exam, _ = MockExam.objects.get_or_create(
            title='FIA Sub-Inspector (SI) Live Mock Test',
            defaults={
                'category': cat_fia,
                'description': 'Full length mock examination for FIA Sub-Inspector candidate screening.',
                'duration_minutes': 60,
                'total_marks': 100,
                'passing_marks': 50,
                'is_live': True,
                'is_free': True
            }
        )

        # Create Questions for FIA Mock Test
        Question.objects.get_or_create(
            exam=fia_exam,
            question_text='When was the Federal Investigation Agency (FIA) established in Pakistan?',
            defaults={
                'option_a': '1947',
                'option_b': '1975',
                'option_c': '1988',
                'option_d': '1999',
                'correct_option': QuestionOption.OPTION_B,
                'explanation': 'FIA was established under the FIA Act 1974 (Act VIII of 1975) on January 13, 1975.',
                'marks': 1
            }
        )

        Question.objects.get_or_create(
            exam=fia_exam,
            question_text='What is the primary database recommendation for enterprise Django web applications?',
            defaults={
                'option_a': 'SQLite',
                'option_b': 'PostgreSQL',
                'option_c': 'Microsoft Access',
                'option_d': 'Flat File',
                'correct_option': QuestionOption.OPTION_B,
                'explanation': 'PostgreSQL is the industry standard open-source relational database for Django.',
                'marks': 1
            }
        )

        self.stdout.write(self.style.SUCCESS('Successfully seeded database with initial Admin, Categories, Products, and Mock Exams!'))
