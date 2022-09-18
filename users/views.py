from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer, UserModelSerializerVersionTwo
from rest_framework import mixins, viewsets


class UserModelViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                       mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

    def get_serializer_class(self):
        if self.request.version == 'v2':
            return UserModelSerializerVersionTwo

        return UserModelSerializer
