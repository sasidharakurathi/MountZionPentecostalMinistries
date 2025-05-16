from django.contrib import admin
from .models import LatestMessages , LatestSongs


# Register your models here.
admin.site.register(LatestMessages)
admin.site.register(LatestSongs)