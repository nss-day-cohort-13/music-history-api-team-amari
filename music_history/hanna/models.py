from django.db import models

# Create your models here.

class Artist(model.Model):
	name = models.CharField(max_length=55)
	albums = models.ForeignKey(Album, many=True, related_name='artists')

    def __str__(self):
    return "{}: {}".format(self.id, self.name)


class Album(model.Model):
	name = models.CharField(max_length=55)

    def __str__(self):
    return "{}: {}".format(self.id, self.name)


class Song(model.Model):
	name = models.CharField(max_length=55)
	album = models.ForeignKey(Album, many=True, related_name='songs')



    def __str__(self):
    return "{}: {}".format(self.id, self.name)