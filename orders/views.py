from django.http import HttpResponse
from django.shortcuts import render,redirect
from .models import Category, RegularPizza, SicilianPizza, Toppings, Sub, Pasta, Salad, DinnerPlatters
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import logout, authenticate, login

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        #we are passing in the data from the category model
        return render(request, "orders/home.html", {"categories":Category.objects.all})
    else:
        return redirect("orders:login")

def login_request(request):
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('/')

    form = AuthenticationForm()
    return render(request = request,
                    template_name = "orders/login.html",
                    context={"form":form})

def logout_request(request):
    logout(request)
    return redirect("orders:login")

def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            login(request, user)
            return redirect("orders:index")

        return render(request = request,
                          template_name = "orders/register.html",
                          context={"form":form})

    return render(request = request,
                  template_name = "orders/register.html",
                  context={"form":UserCreationForm})

def pizza(request):
    if request.user.is_authenticated:
        return render(request, "orders/pizza.html", context = {"regular_pizza":RegularPizza.objects.all, "sicillian_pizza":SicilianPizza.objects.all , "toppings":Toppings.objects.all})
    else:
        return redirect("orders:login")

def pasta(request):
    if request.user.is_authenticated:
        return render(request, "orders/pasta.html", context = {"dishes":Pasta.objects.all})
    else:
        return redirect("orders:login")


def salad(request):
    if request.user.is_authenticated:
        return render(request, "orders/salad.html", context = {"dishes":Salad.objects.all})
    else:
        return redirect("orders:login")


def subs(request):
    if request.user.is_authenticated:
        return render(request, "orders/sub.html", context = {"dishes":Sub.objects.all})
    else:
        return redirect("orders:login")


def dinner_platters(request):
    if request.user.is_authenticated:
        return render(request, "orders/dinner_platters.html", context = {"dishes":DinnerPlatters.objects.all})
    else:
        return redirect("orders:login")

def directions(request):
    if request.user.is_authenticated:
        return render(request, "orders/directions.html")
    else:
        return redirect("orders:login")

def hours(request):
    if request.user.is_authenticated:
        return render(request, "orders/hours.html")
    else:
        return redirect("orders:login")

def contact(request):
    if request.user.is_authenticated:
        return render(request, "orders/contact.html")
    else:
        return redirect("orders:login")

def cart(request):
    if request.user.is_authenticated:
        return render(request, "orders/cart.html")
    else:
        return redirect("orders:login")
