from flask import jsonify
from backend.src import app


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
