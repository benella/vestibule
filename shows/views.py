from django.http import JsonResponse
from .models import Show
from django.views import generic
from django.urls import reverse
from django.http import HttpResponseRedirect

from imdb import IMDb


def search_show(request, title):
    ia = IMDb()
    subscribed_shows_imdb_ids = [show.imdb_id for show in Show.objects.all()]
    results = ia.search_movie(title)
    filtered_results = list()

    for result in results:
        if result.get("kind") not in ["tv series", "tv miniseries"]:
            print("skipping {} (kind: {})".format(result.get("title"), result.get("kind")))
            continue

        filtered_results.append({
            "title": result.get("title"),
            "year": result.get("year"),
            "full-size cover url": result.get("full-size cover url"),
            "imdb_id": result.getID(),
            "subscribed": result.getID() in subscribed_shows_imdb_ids
        })

    return JsonResponse({"filtered": filtered_results})


def find_torrents(request, title):
    show = Show.objects.get(slug=title)
    show.find_show_torrents(request)
    return HttpResponseRedirect(reverse("shows:details", kwargs={'slug': show.slug}))


def update_show_info(request, title):
    show = Show.objects.get(slug=title)
    show.update_show_info(request)
    return HttpResponseRedirect(reverse("shows:details", kwargs={'slug': show.slug}))


class AddShowView(generic.CreateView):
    model = Show
    template_name = "show/add_show.html"
    fields = ["imdb_id"]


    def get_success_url(self):
        return reverse("home")


class ShowDetails(generic.DetailView):
    model = Show
    template_name = "show/show_details.html"

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data["shows"] = Show.objects.all()
        return context_data
