from rest_framework import serializers
from apps.homeapp.models import Destination


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = ["id", "name", "description", "image_url"]
