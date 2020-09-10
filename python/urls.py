"""hub URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django_distill import distill_url
from django.conf import settings
from django.conf.urls.static import static
from .views import *

def getNone(): return None

urlpatterns = [
    # url(r'^admin/', include(admin.site.urls)),
    distill_url(r'^$', HomePageView.as_view(), name='home', distill_func=getNone),
    distill_url(r'^sobre/', AboutPageView.as_view(), name='about', distill_func=getNone),
    distill_url(r'^agenda/', CalendarPageView.as_view(), name='agenda', distill_func=getNone),
    distill_url(r'^opensource/', OpenSourcePageView.as_view(), name='opensource', distill_func=getNone),
    distill_url(r'^contato/', ContactPageView.as_view(), name='contact', distill_func=getNone),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
