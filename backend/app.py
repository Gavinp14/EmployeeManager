from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, migrate
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

@app.route('/api/employees')
def get_data():
    pass

if __name__ == '__main__':
    app.run()
