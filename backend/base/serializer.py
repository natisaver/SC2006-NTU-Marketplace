# import the model and serializer
from rest_framework import serializers
from .models import Product
# the User model is a built-in model provided by Django that represents a user of the system. 
from django.contrib.auth.models import User
# import the RefreshToken class from rest_framework_simplejwt
from rest_framework_simplejwt.tokens import RefreshToken

# Create your serializers here. (converts models into JSON format)
# User Serializer
class UserSerializer(serializers.ModelSerializer):
    # add this line for the getName() method
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = '__all__'  
        # fields = ['_id', 'id', 'username', 'email', 'name', 'isAdmin']

    # this class method returns the first name if present, else returns email
    # self => serializer itself
    # obj => the user object
    def get_name(self, obj):
        name = obj.first_name
        if name == "":
            return obj.email
        else:
            return name
        
    def get__id(self, obj):
        return obj.id
    
    def get_isAdmin(self, obj):
        return obj.is_staff

# Refresh Token Serializer
class UserSerializerWithToken(UserSerializer):
    # add this line for the getName() method
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = '__all__'
        # fields = ['_id', 'id', 'username', 'email', 'name', 'isAdmin', 'token']

    # adding an additional refresh token
    # this will be used for registration
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

# Product Serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'  # '__all__' means all fields

