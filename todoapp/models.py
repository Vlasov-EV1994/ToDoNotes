from django.db import models
from users.models import User


class Project(models.Model):
    project_name = models.CharField(max_length=64)
    project_addres = models.URLField(max_length=128)
    project_users = models.OneToOneField(User, on_delete=models.CASCADE)


class Todo(models.Model):
    todo_project = models.ForeignKey(Project, on_delete=models.CASCADE)
    todo_txt = models.TextField(blank=True)
    todo_date_create = models.DateTimeField(auto_now_add=True)
    todo_create_user = models.OneToOneField(User, on_delete=models.CASCADE)
    todo_is_active = models.BooleanField(default=True)