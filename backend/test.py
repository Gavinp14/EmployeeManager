import requests

url = 'http://localhost:5000/api/employees'
data = {
    "badgeNumber": 14141,
    "firstName": "Gavin",
    "lastName": "Porter",
    "department": "HR",
    "position": "Rep",
    "salary": 60000
}

response = requests.post(url, json=data)

print(response.status_code)
print(response.json())
