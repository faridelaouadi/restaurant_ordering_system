from django import template

register = template.Library()

@register.filter(name="format_cart")
def format_cart(value):
    return value[1:-1].split(",")
