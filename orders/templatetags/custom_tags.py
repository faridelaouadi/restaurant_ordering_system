from django import template
import re #regular expression

register = template.Library()

@register.filter(name="format_cart")
def format_cart(value):
    return value[1:-1].split(",")

@register.filter(name="format_cart_item")
def format_cart_item(value):
    return value.replace("'","")
