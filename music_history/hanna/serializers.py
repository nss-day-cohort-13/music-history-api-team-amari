from rest_framework import serializers
from hanna.models import Album, Artist, Song

# Using the HyperlinkedModelSerializer will examine the relationships
# between the models, and the data, and provide a hyperlink to the
# related resource instead of the primary key
# http://www.django-rest-framework.org/tutorial/5-relationships-and-hyperlinked-apis/#hyperlinking-our-api

class AlbumSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Album
        fields = ('id', 'url', 'first_name', 'last_name', 'habitat')


class ArtistSerializer(serializers.HyperlinkedModelSerializer):
# Uncomment out the following lines to see how the representation
# of the list of related information changes in the JSON. It will
# use the __str__ value of the object instance that you specify
# in models.py.
#
# animals = serializers.StringRelatedField(many=True)
# employees = serializers.StringRelatedField(many=True)

# Specifying the specific serializer for a nested relationship (i.e. a
# list of items in a one-to-many relationship) will put the full object
# representation in the list instead of just the URI. Comment out the
# following lines to see it in action.
#
# employees = EmployeeSerializer(many=True, read_only=True)
# animals = AnimalSerializer(many=True, read_only=True)


      class Meta:
              model = Artist
                  fields = ('id', 'url', 'first_name', 'last_name', 'habitat')


