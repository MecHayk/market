from django.contrib import admin
from django.contrib.admin import ModelAdmin

from goods.models import Product, Category


@admin.register(Category)
class CategoriesAdmin(ModelAdmin):
    pass


@admin.register(Product)
class ProductsAdmin(ModelAdmin):
    pass