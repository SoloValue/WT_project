from django.db import models
import datetime

# Create your models here.
class Product(models.Model):
  name = models.CharField(max_length=120)
  description = models.TextField()
  price = models.DecimalField(default=0, decimal_places=2, max_digits=7)
  owner = models.ForeignKey('auth.User', on_delete=models.CASCADE)
  state = models.CharField(max_length=10, blank=False, default='AVAILABLE')
  date_created = models.DateField(default=datetime.date.today)

  def __str__(self) -> str:
    return f'{self.id}-{self.name}: €{self.price}'