from config.settings.base import *

DEBUG = True

ALLOWED_HOSTS = ['*']

# Print emails to the console for testing during local setup
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
