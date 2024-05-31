from django.db import models

# Create your models here.
class Destination(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image_url = models.CharField(max_length=100)

    def __str__(self):
        return self.name