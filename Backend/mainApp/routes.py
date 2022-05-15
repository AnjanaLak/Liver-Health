from flask import jsonify
from flask import Flask, request
from mainApp import app, db
from models import model
from userService import userService
import numpy
import tensorflow as tf
from flask_cors import CORS, cross_origin
from tensorflow.keras.models import load_model
import keras


@app.route("/predictFattyLiver", methods=['POST'])
@cross_origin()
def predict():
    model = tf.keras.models.Sequential()
    model = tf.keras.models.Sequential()
    model.add(tf.keras.layers.Flatten())
    model.add(tf.keras.layers.Dense(25, activation=tf.nn.relu))
    model.add(tf.keras.layers.Dense(25, activation=tf.nn.relu))
    model.add(tf.keras.layers.Dense(4, activation=tf.nn.softmax))

    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])
    model = load_model('model.h5')
    data = numpy.array(request.get_json())
    print(data)
    prediction = model.predict(data)
    return {"pred": str(numpy.argmax(prediction))}


@app.route("/login", methods=['POST'])
@cross_origin()
def login():
    username = request.json['username']
    password = request.json['password']

    print(type(username))
    print(type(password))
    print(username)

    user = userService.loginUser(username, password)
    print(user)
    if user:
        return jsonify(user)
    else:
        return jsonify({"Status": 0})

@app.route("/register", methods=['POST'])
@cross_origin()
def register():
    username = request.json['username']
    password = request.json['password']
    email = request.json['email']

    print(type(username))
    print(type(password))
    print(username)

    user = userService.registerUser(username, password, email)
    print(user)
    if user:
        return jsonify(user)
    if user == 1:
        return jsonify({"Status": 1})
    else:
        return jsonify({"Status": 0})
