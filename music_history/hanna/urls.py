from rest_framework import routers
from django.conf.urls import url, include
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'albums', views.AlbumList)
router.register(r'artists', views.ArtistList)
router.register(r'songs', views.SongList)

urlpatterns = [
	url(r'^', include(router.urls)),
]