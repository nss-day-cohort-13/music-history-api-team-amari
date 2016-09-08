from rest_framework import serializers
from hannah.models import Album, Artist, Song

# Using the HyperlinkedModelSerializer will examine the relationships
# between the models, and the data, and provide a hyperlink to the
# related resource instead of the primary key
# http://www.django-rest-framework.org/tutorial/5-relationships-and-hyperlinked-apis/#hyperlinking-our-api

class ArtistSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Artist
        fields = ('id', 'url', 'name')


class AlbumSerializer(serializers.HyperlinkedModelSerializer):

    artists = ArtistSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = ('id', 'url', 'title', 'artists')

class SongSerializer(serializers.HyperlinkedModelSerializer):
    
    albums = AlbumSerializer(many=True, read_only=True)

    class Meta:
        model = Song
        fields = ('id', 'url', 'title', 'albums')



