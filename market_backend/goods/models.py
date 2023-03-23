from django_cleanup import cleanup
from django.db import models


class Categories(models.Model):
    name = models.CharField(max_length=50, verbose_name="Категории")

    def __str__(self):
        return self.name



@cleanup.select
class Products(models.Model):
    categories = models.ForeignKey(Categories, on_delete=models.CASCADE)
    name = models.CharField(max_length=250, verbose_name="Продукт")
    img = models.ImageField(verbose_name="Изображение", upload_to="products")
    rating = models.DecimalField(max_digits=2, decimal_places=1, verbose_name="Рейтинг")
    comments_count = models.FloatField(verbose_name="Количество комментариев")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")

    def __str__(self):
        return self.name
