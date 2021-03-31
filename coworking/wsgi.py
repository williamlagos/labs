"""
WSGI config for hub project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
"""

from django.core.wsgi import get_wsgi_application
# from dj_static import Cling
import os

os.environ['DJANGO_SETTINGS_MODULE'] = 'lab.settings'
# application = Cling(get_wsgi_application())
application = get_wsgi_application()
