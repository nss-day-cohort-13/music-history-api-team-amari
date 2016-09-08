from rest_framework import serializers
from hannah.models import Album, Artist, Song


class ArtistSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ('id', 'url', 'name')


class AlbumSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Album
        fields = ('id', 'url', 'title', 'artists')

class SongSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = Song
        fields = ('id', 'url', 'title', 'albums')



