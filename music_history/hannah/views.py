from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from hannah.models import Album, Artist, Song
from hannah.serializers import SongSerializer, AlbumSerializer, ArtistSerializer


class ArtistList(viewsets.ModelViewSet):
	queryset = Artist.objects.all()
	serializer_class = ArtistSerializer


class AlbumList(viewsets.ModelViewSet):
	queryset = Album.objects.all()
	serializer_class = AlbumSerializer


class SongList(viewsets.ModelViewSet):
	queryset = Song.objects.all()
	serializer_class = SongSerializer
