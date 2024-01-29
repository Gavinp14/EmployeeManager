import requests

url = 'http://localhost:5000/api/employees'
data = {
    "id": 1,
    "badgeNumber": 12345,
    "firstName": "John",
    "lastName": "Doe",
    "department": "IT",
    "position": "Developer",
    "salary": 50000
}

response = requests.post(url, json=data)

print(response.status_code)
print(response.json())
