from flask import jsonify
from backend.src import app

from datetime import datetime, timedelta
import hashlib, jwt, werkzeug
from flask.json import jsonify
from flask import app, request, make_response,Response
from flask.templating import render_template
from models import *



@app.route('/')
def index():  # put application's code here
    return jsonify({"message": "welcome"})


@app.route('/register', methods=['GET', 'POST'])
def register():
    return jsonify({"message": "welcome"})


@app.route('/login', methods=['GET', 'POST'])
def login():
    return jsonify({"message": "welcome"})


@app.route('/admin', methods=['GET', 'POST'])
def admin():
    return jsonify({"message": "welcome"})


@app.route('/add_course', methods=['GET', 'POST'])
def add_course():
    return jsonify({"message": "welcome"})


@app.route('/registersuccess', methods=["POST"])
def registerSuccess():

    if request.method == "POST":
        name = request.form.get('name')
        password = request.form.get('password')
        username = request.form.get('username')
        email = request.form.get('email')

        hashedPassword = hashlib.md5(bytes(str(password),encoding='utf-8'))
        hashedPassword = hashedPassword.hexdigest()

        result = db.session.query(User).filter(User.email==email)
        if len(result) == 0:
            entry = User(name=name,email=email,password=hashedPassword, username = username)
            db.session.add(entry)
            db.session.commit()
            print(jsonify({'success' : True, 'message':'Registration Successful'}))
            return jsonify({'success' : True, 'message':'Registration Successful'})
        else:
            print(jsonify({'success' : False, 'message':'User already regsitered'}))
            return jsonify({'success' : False, 'message':'User already regsitered'})
    return jsonify({'success' : False, 'message':'Registraion Failed', 'error_code': 404})


@app.route('/loginsuccess', methods=['POST'])
def loginSucess():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        hashedPassword = hashlib.md5(bytes(str(password),encoding='utf-8'))
        hashedPassword = hashedPassword.hexdigest()
        result = db.session.query(User).filter(User.email==email, User.password==hashedPassword)
        for row in result:
            if (len(row.email)!=0):
                print(row.email)
                token = jwt.encode({'user':row.email, 'exp': datetime.utcnow()+timedelta(minutes=15)}, app.config['SECRET_KEY'])
                print("Token ",token)
                print(jsonify({'success' : True, 'message':'Login successful', 'jwt_token': token}))
                return jsonify({'success' : True, 'message':'Login successful', 'jwt_token': token})

    print(jsonify({'success' : False, 'message':'Login failed'}))
    return jsonify({'success' : False, 'message':'Login failed', 'error_code':404})
