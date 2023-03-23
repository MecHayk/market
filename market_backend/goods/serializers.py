from rest_framework.serializers import ModelSerializer
from goods.models import Category, Product


class CategorySerializers(ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'name',
        )


class ProductSerializers(ModelSerializer):
    category = CategorySerializers(many=False, read_only=True)

    class Meta:
        model = Product
        fields = (
            'category',
            'name',
            'img',
            'rating',
            'comments_count',
            'price',
        )