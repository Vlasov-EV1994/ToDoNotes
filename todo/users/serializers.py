from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer
from .models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'#['username', ...


#class UserModelSerializerVersionTwo(ModelSerializer):
#    class Meta:
 #       model = User
 #       fields = ['username', 'first_name', 'last_name', 'email', 'is_staff']


