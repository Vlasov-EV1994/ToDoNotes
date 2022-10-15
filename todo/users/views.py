from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer#, UserModelSerializerVersionTwo
from rest_framework import mixins, viewsets
from rest_framework import generics


class UserModelViewSet(ModelViewSet):#mixins.CreateModelMixin, mixins.ListModelMixin,
                       #mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    serializer_class = UserModelSerializer
    queryset = User.objects.all()
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

    #def get_serializer_class(self):
      #  if self.request.version == 'v2':
       #     return UserModelSerializerVersionTwo
     #   return UserModelSerializer
