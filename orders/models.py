from django.db import models
from datetime import datetime

# Create your models here.

class Category(models.Model):
    category_title = models.CharField(max_length=200)
    category_gif = models.CharField(max_length=200)
    category_description = models.TextField() #make this the wysiwyg text field

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"{self.category_title}"

class RegularPizza(models.Model):
    #example row :: 1 topping , 5.00 , 7.00
    pizza_choice = models.CharField(max_length=200)
    small_price = models.DecimalField(max_digits=6, decimal_places=2)
    large_price = models.DecimalField(max_digits=6, decimal_places=2)
    category_description = models.TextField() #make this the wysiwyg text field

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"Regular Pizza : {self.pizza_choice}"

class SicilianPizza(models.Model):
    #example row :: 1 topping , 5.00 , 7.00
    pizza_choice = models.CharField(max_length=200)
    small_price = models.DecimalField(max_digits=6, decimal_places=2)
    large_price = models.DecimalField(max_digits=6, decimal_places=2)
    category_description = models.TextField() #make this the wysiwyg text field

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"Sicilian Pizza : {self.pizza_choice}"

class Toppings(models.Model):
    #example row :: Pepperoni
    topping_name = models.CharField(max_length=200)

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"{self.topping_name}"


class Sub(models.Model):
    #example row :: meatball , 5.00 , 6.50
    sub_filling = models.CharField(max_length=200)
    small_price = models.DecimalField(max_digits=6, decimal_places=2)
    large_price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"Sub : {self.sub_filling}"

class Pasta(models.Model):
    dish_name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"{self.dish_name}"


class Salad(models.Model):
    dish_name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"Salad : {self.dish_name}"



class DinnerPlatters(models.Model):
    dish_name = models.CharField(max_length=200)
    small_price = models.DecimalField(max_digits=6, decimal_places=2)
    large_price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"Platter : {self.dish_name}"

class UserOrder(models.Model):
    username = models.CharField(max_length=200) #who placed the order
    order = models.TextField() #this will be a string representation of the cart from localStorage
    price = models.DecimalField(max_digits=6, decimal_places=2) #how much was the order
    time_of_order  = models.DateTimeField(default=datetime.now, blank=True)
    delivered = models.BooleanField()

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"Order placed by  : {self.username} on {self.time_of_order.date()} at {self.time_of_order.time().strftime('%H:%M:%S')}"

class SavedCarts(models.Model):
    username = models.CharField(max_length=200, primary_key=True)
    cart = models.TextField() #this will be a string representation of the cart from localStorage

    def __str__(self):
        #overriding the string method to get a good representation of it in string format
        return f"Saved cart for {self.username}"
