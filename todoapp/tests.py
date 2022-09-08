import requests

response = requests.post('http://127.0.0.1:8000/api-token-auth/', data={'username':
'Biblbim', 'password': 'Q123$'})

print(response.status_code)
print(response.json()) #f803e302f19fba6da1b369d6c7203b7644f00bee