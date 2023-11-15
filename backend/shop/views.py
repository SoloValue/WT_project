from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.request import Request
from .serializers import *
from .models import *

# Create your views here.
# ModelViewSet class provide the implementation for CRUD operations
class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def create(self, request):
        if type(request.data) == list:
            serializeObject = ProductSerializer(data = request.data, many=True)
        else:
            serializeObject = ProductSerializer(data = request.data)
        if serializeObject.is_valid():
            serializeObject.save()
            productObject = Product.objects.all()
            productSerializer = ProductSerializer(productObject, many=True)
            return Response(productSerializer.data, status = status.HTTP_201_CREATED)
        return Response(serializeObject.errors, status.HTTP_400_BAD_REQUEST)

    @action(methods=["DELETE"], detail=False)
    def delete_all(self, request:Request):
        delete_products = self.queryset.all()
        delete_products.delete()
        return Response(self.serializer_class(delete_products,many=True).data)

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def create(self, request):
        if type(request.data) == list:
            serializeObject = UserSerializer(data = request.data, many=True)
        else:
            serializeObject = UserSerializer(data = request.data, many=True)
        if serializeObject.is_valid():
            serializeObject.save()
            userObject = User.objects.all()
            userSerializer = UserSerializer(userObject, many=True)
            return Response(userSerializer.data, status = status.HTTP_201_CREATED)
        return Response(serializeObject.errors, status.HTTP_400_BAD_REQUEST)

    @action(methods=["DELETE"], detail=False)
    def delete_all(self, request:Request):
        delete_users = self.queryset.all()
        delete_users.delete()
        return Response(self.serializer_class(delete_users,many=True).data)
    
class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()