from django.contrib import admin
from django.urls import path


from rest_framework.routers import DefaultRouter
from .views import DestinationViewSet

router = DefaultRouter()
router.register(r"destinations", DestinationViewSet)

urlpatterns = router.urls
# urlpatterns = [

#     path('admin/', admin.site.urls),
# ]
