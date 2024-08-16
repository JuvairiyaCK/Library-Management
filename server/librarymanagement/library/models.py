from django.db import models

# Create your models here.

class Customer(models.Model):
    name=models.CharField(max_length=100)
    book_title=models.CharField(max_length=200)
    author=models.CharField(max_length=100)
    price=models.IntegerField()