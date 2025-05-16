from django.shortcuts import render
from .models import LatestMessages , LatestSongs  # Adjust import to your model

# Create your views here.


from .models import LatestMessages

def index(request):
    N = 5
    messages = LatestMessages.objects.order_by('-createdDate')[:N]
    messages = list(messages[::-1])  # Reverse the queryset result
    
    songs = LatestSongs.objects.order_by('-createdDate')[:N]
    songs = list(songs[::-1])  # Reverse the queryset result
    
    return render(request, 'index.html', {'messages': messages , 'songs':songs})
