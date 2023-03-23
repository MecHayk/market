from rest_framework.serializers import ModelSerializer
from goods.models import Categories, Products


class CategoriesSerializers(ModelSerializer):
    class Meta:
        model = Categories
        fields = (
            'name',
        )


class ProductsSerializers(ModelSerializer):
    class Meta:
        model = Products
        fields = (
            'categories',
            'name',
            'img',
            'rating',
            'comments_count',
            'price',
        )