from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)
app.debug = True

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

#Models
class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    badgeNumber = db.Column(db.Integer(), nullable=False)
    firstName = db.Column(db.String(200), unique=False, nullable=False)
    lastName = db.Column(db.String(200), unique=False, nullable=False)
    department = db.Column(db.String(200), nullable=False)
    position = db.Column(db.String(200), nullable=False)
    salary = db.Column(db.Integer(), nullable=False)

migrate = Migrate(app, db)

@app.route('/')
def home():
    return 'Hello'

#get request to fetch employee data
@app.route('/api/employees', methods=['GET'])
def get_data():
    employees = Employee.query.all()

    employee_list = []
    for employee in employees:
        employee_data = {
            'id': employee.id,
            'badgeNumber': employee.badgeNumber,
            'firstName': employee.firstName,
            'lastName': employee.lastName,
            'department': employee.department,
            'position': employee.position,
            'salary': employee.salary
        }
        employee_list.append(employee_data)

    return jsonify({'employees': employee_list})


#post request to add employee data
@app.route('/api/employees', methods=['POST'])
def add_employee():

    data = request.json
    badgeNumber = data['badgeNumber']
    firstName = data['firstName']
    lastName = data['lastName']
    department = data['department']
    position = data['position']
    salary = data['salary']

    new_employee = Employee(
        badgeNumber=badgeNumber,
        firstName=firstName,
        lastName=lastName,
        department=department,
        position=position,
        salary=salary
    )

    db.session.add(new_employee)
    db.session.commit()
    

if __name__ == '__main__':
    app.run()
