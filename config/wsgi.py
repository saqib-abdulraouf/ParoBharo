import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.base")

application = get_wsgi_application()

# If running on Vercel, automatically run migrations and seed data
if os.getenv('VERCEL') or os.getenv('VERCEL_ENV'):
    try:
        from django.core.management import call_command
        call_command('migrate', interactive=False)
        call_command('seed_data')
    except Exception as e:
        print("Vercel auto-migration status:", e)

app = application
