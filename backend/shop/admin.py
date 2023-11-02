from django.contrib import admin
from .models import Category, User, Order, Product

# Register your models here.
admin.site.register(Category)
admin.site.register(User)
admin.site.register(Product)
admin.site.register(Order)