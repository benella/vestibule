from .models import Feed
from django.views import generic


class FeedDetails(generic.DetailView):
    model = Feed
    template_name = "feed/feed_details.html"

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        feed = self.get_object()
        context_data["feed_data"] = feed.read_feed()
        return context_data


class FeedList(generic.ListView):
    model = Feed
    template_name = "feed/feed_list.html"
