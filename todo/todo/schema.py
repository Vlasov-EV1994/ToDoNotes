import graphene
from graphene_django import DjangoObjectType
from users.models import User
from todoapp.models import Project, Todo


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    all_project = graphene.List(ProjectType)
    all_todo = graphene.List(TodoType)
    todo_user_create = graphene.Field(TodoType, id=graphene.Int(required=True))

    def resolve_all_users(self, root):
        return User.objects.all()

    def resolve_all_project(self, root):
        return Project.objects.all()

    def resolve_all_todo(self, root):
        return Todo.objects.all()

    def resolve_todo_user_create(self, root, id):
        try:
            return Todo.objects.get(id=id)
        except Todo.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)
