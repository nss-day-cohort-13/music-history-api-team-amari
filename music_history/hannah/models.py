from django.db import models
from django.db import models

# Create your models here.

class Artist(models.Model):
    name = models.CharField(max_length=55)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)
    def __unicode__(self):
        return "{}: {}".format(self.id, self.name)

class Album(models.Model):
    title = models.CharField(max_length=55)
    artists = models.ManyToManyField(Artist)
    # artists = models.ForeignKey(Artist, related_name='albums', null=True)

    def __str__(self):
        return "{}: {}".format(self.id, self.title)
    def __unicode__(self):
        return "{}: {}".format(self.id, self.title)

class Song(models.Model):
    title = models.CharField(max_length=55)
    albums = models.ManyToManyField(Album)
    # albums = models.ForeignKey(Album, related_name='songs', null=True)

    def __str__(self):
        return "{}: {}".format(self.id, self.title)
    def __unicode__(self):
        return "{}: {}".format(self.id, self.title)
