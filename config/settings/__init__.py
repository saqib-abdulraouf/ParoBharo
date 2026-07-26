"""Default to local development settings."""

try:
    from .local import *
except ImportError:
    from .base import *
