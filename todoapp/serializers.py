from abc import ABC

from rest_framework import serializers
from .models import Project, Todo


class ProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
