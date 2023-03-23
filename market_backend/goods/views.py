import django_filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet
from django_filters import rest_framework as filters

from goods.models import Product, Category
from goods.serializers import ProductSerializers, CategorySerializers


class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers


class ProductFilter(filters.FilterSet):
    category = django_filters.ModelChoiceFilter(field_name='category__name',
                                                to_field_name='name',
                                                queryset=Category.objects.all)

    class Meta:
        model = Product
        fields = ['category']


class ProductView(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
    filter_backends = [DjangoFilterBackend]
    filter_class = ProductFilter


