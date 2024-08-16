from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Customer
from .serializer import CustomerSerializer

# Create your views here.


class CustomerView(ModelViewSet):
    serializer_class=CustomerSerializer
    queryset=Customer.objects.all()