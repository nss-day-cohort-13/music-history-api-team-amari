from django.db import models

# Create your models here.

class Artist(model.Model):
	name = models.CharField(max_length=55)
	albums = models.ManyToManyField(Album)

    def __str__(self):
    	return "{}: {}".format(self.id, self.title)


class Album(model.Model):
	title = models.CharField(max_length=55)
	songs = models.ManyToManyField(Song)

    def __str__(self):
    	return "{}: {}".format(self.id, self.title)


class Song(model.Model):
	title = models.CharField(max_length=55)
	artists = models.ManyToManyField(Artist)

    def __str__(self):
    	return "{}: {}".format(self.id, self.title)