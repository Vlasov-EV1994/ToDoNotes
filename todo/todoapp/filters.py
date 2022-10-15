from django_filters import rest_framework as filters
from .models import Project, Todo


class ProjectFilters(filters.FilterSet):
    name = filters.CharFilter(field_name='project_name', lookup_expr='icontains')

    class Meta:
        model = Project
        fields = ['project_name']


class TodoFilters(filters.FilterSet):
    name = filters.CharFilter()
    sort = filters.OrderingFilter(fields=('todo_date_create',))

    class Meta:
        model = Todo
        fields = ['todo_project']
