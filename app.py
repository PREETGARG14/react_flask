import re
from flask import Flask, app, request
from flask.templating import render_template
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, redirect, url_for

app=Flask(__name__)


#creating login page
@app.route('/login', methods=['GET','POST'])
def loginPage():
    return render_template('login.html')


# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     error = None
#     if request.method == 'POST':
#         if request.form['username'] != 'admin' or request.form['password'] != 'admin':
#             error = 'Invalid Credentials. Please try again.'
#         else:
#             return redirect(url_for('home'))
#     return render_template('login.html', error=error)





if __name__ == "__main__":
    app.run(debug=True)