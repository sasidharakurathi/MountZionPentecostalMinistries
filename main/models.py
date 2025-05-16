from django.db import models

# Create your models here.

class LatestSongs(models.Model):
    name = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    createdDate = models.DateTimeField(auto_now=True)


class LatestMessages(models.Model):
    name = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    createdDate = models.DateTimeField(auto_now=True)
