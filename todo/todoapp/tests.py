import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
# from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import ProjectCustomDjangoFilterViewSet, TodoCustomDjangoFilterViewSet
from .models import Project, Todo

