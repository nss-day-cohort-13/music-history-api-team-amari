from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from hannah.models import Album, Artist, Song
from hannah.serializers import SongSerializer, AlbumSerializer, ArtistSerializer


# Create your views here.
@api_view(['GET'])
def api_root(request, format=None):
	return Response({
			"artists": reverse("artist-list", request, format=format),
			"albums": reverse("album-list", request, format=format),
			"songs": reverse("song-list", request, format=format)
		})

class ArtistList(viewsets.ModelViewSet):
	model = Artist
	queryset = Artist.objects.all()
	serializer_class = ArtistSerializer

class ArtistDetail(viewsets.ModelViewSet):
	model = Artist
	queryset = Artist.objects.all()
	serializer_class = ArtistSerializer
	lookup_field = 'name'

class AlbumList(viewsets.ModelViewSet):
	model = Album
	queryset = Album.objects.all()
	serializer_class = AlbumSerializer

class AlbumDetail(viewsets.ModelViewSet):
	model = Album
	queryset = Album.objects.all()
	serializer_class = AlbumSerializer
	lookup_field = 'title'

class SongList(viewsets.ModelViewSet):
	model = Song
	queryset = Song.objects.all()
	serializer_class = SongSerializer

class SongDetail(viewsets.ModelViewSet):
	model = Song
	queryset = Song.objects.all()
	serializer_class = SongSerializer
	lookup_field = 'title'