from django.shortcuts import get_object_or_404
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import ModelViewSet, ViewSet
from .models import Project, Todo
from .serializers import ProjectModelSerializer, TodoModelSerializer
from .filters import ProjectFilters, TodoFilters
from django_filters import rest_framework as filters
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer


class ProjectLimitViewSet(LimitOffsetPagination):
    default_limit = 10


class ProjectCustomDjangoFilterViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    #filter_backends = (filters.DjangoFilterBackend,)
    #filterset_class = ProjectFilters
    #pagination_class = ProjectLimitViewSet


class TodoLimitViewSet(LimitOffsetPagination):
    default_limit = 20


class TodoCustomDjangoFilterViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    #filter_backends = (filters.DjangoFilterBackend,)
    #filterset_class = TodoFilters
    #pagination_class = TodoLimitViewSet
