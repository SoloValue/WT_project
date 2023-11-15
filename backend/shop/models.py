from django.db import models
import datetime

# Create your models here.
class Category(models.Model):
  name = models.CharField(max_length=120)

  class Meta:
    verbose_name_plural = 'categories'

  def __str__(self) -> str:
    return f'{self.id}-{self.name}'
  
class User(models.Model):
  email = models.CharField(max_length=50, primary_key=True, auto_created=False)
  username = models.CharField(max_length=50)
  password = models.CharField(max_length=50)

  def __str__(self) -> str:
    return f'{self.username} - {self.email}'
  
class Product(models.Model):
  name = models.CharField(max_length=120)
  description = models.TextField()
  price = models.DecimalField(default=0, decimal_places=2, max_digits=7)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  date_created = models.DateField(default=datetime.date.today)

  def __str__(self) -> str:
    return f'{self.name}: €{self.price}'

class Order(models.Model):
  product = models.ForeignKey(Product, on_delete=models.CASCADE)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  quantity = models.IntegerField(default=1)
  address = models.CharField(max_length=120, default='', blank=True)
  phone = models.CharField(max_length=17, default='', blank=True)
  date_created = models.DateField(default=datetime.date.today)

  def __str__(self) -> str:
    return f'{self.user.username} -> {self.quantity}x {self.product.name}'
  
