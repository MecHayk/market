from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet

from goods.models import Products, Categories
from goods.serializers import ProductsSerializers, CategoriesSerializers


class CategoriesView(ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializers


class ProductsView(ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializers
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['categories']

