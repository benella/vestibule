from django.views import generic
from shows.models import Show


class Home(generic.TemplateView):
    template_name = "main.html"

    def get_context_data(self, **kwargs):
        context = super(Home, self).get_context_data(**kwargs)
        context['shows'] = Show.objects.all()

        return context
