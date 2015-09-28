from django.views.generic.base import TemplateView

class HomePageView(TemplateView):
    template_name = "index.html"

class AboutPageView(TemplateView):
    template_name = "about.html"

class CalendarPageView(TemplateView):
    template_name = "calendar.html"

class OpenSourcePageView(TemplateView):
    template_name = "opensource.html"

class ContactPageView(TemplateView):
    template_name = "contact.html"
