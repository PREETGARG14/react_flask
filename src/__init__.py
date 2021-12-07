from flask import Flask
from backend.config import Config
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
# add extensions here


from backend.src import routes, models