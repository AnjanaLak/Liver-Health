import re

import numpy
import tensorflow as tf
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from tensorflow.keras.models import load_model
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
import keras
app = Flask(__name__)
cors = CORS(app)


# defining database configs
app = Flask(__name__)  # is a special variable in python that is just the name of the module
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../database/liverApp.db'  # '///' =>relative path from current dir
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)


# importing models
from mainApp import models

db.create_all()

# importing routes
from mainApp import routes
from models import model

