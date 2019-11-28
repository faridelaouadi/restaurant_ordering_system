from django.http import HttpResponse
from django.shortcuts import render
from .models import Category

# Create your views here.
def index(request):
    #we are passing in the data from the category model
    return render(request, "orders/home.html", {"categories":Category.objects.all})
