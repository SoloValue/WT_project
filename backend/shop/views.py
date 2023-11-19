from rest_framework import viewsets, status, views, permissions
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.authtoken.models import Token
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

from django.contrib.auth.models import User

from .serializers import *
from .models import *

# Create your views here.
# ModelViewSet class provide the implementation for CRUD operations
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

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    @action(methods=["DELETE"], detail=False)
    def delete_all(self, request:Request):
        delete_products = self.queryset.all()
        delete_products.delete()
        return Response(self.serializer_class(delete_products,many=True).data)

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer    

class SignupView(views.APIView):
    permission_classes = [permissions.AllowAny,]

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return Response({'token': token.key, 'user': serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(views.APIView):

    def post(self, request, format=None):
        user = get_object_or_404(User, username=request.data['username'])
        if not user.check_password(request.data['password']):
            return Response({'detail': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)
        token = Token.objects.get(user=user)
        serializer = UserSerializer(instance=user)
        return Response({'token':token.key, 'user':serializer.data})
    
class AuthTokenView(views.APIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        
        return Response({f'passed for {request.user.email}'})