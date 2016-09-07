from django.db import models

# Create your models here.

class Artist(models.Model):
    name = models.CharField(max_length=55)

    def __str__(self):
        return "{}: {}".format(self.id, self.title)


class Song(models.Model):
    title = models.CharField(max_length=55)

    def __str__(self):
        return "{}: {}".format(self.id, self.title)


class Album(models.Model):
    title = models.CharField(max_length=55)
    songs = models.ManyToManyField(Song)
    artists = models.ManyToManyField(Artist)

    def __str__(self):
        return "{}: {}".format(self.id, self.title)
