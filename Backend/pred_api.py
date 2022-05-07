# import re
#
# import numpy
# import tensorflow as tf
# from flask import Flask
# from flask import request
# from flask_cors import CORS, cross_origin
# from tensorflow.keras.models import load_model
# import keras
# # from fuzzywuzzy import fuzz
# # from fuzzywuzzy import process
#
# app = Flask(__name__)
# cors = CORS(app)
#
#
# @app.route("/predict", methods=['POST'])
# @cross_origin()
# def predict():
#     model = tf.keras.models.Sequential()
#     model = tf.keras.models.Sequential()
#     model.add(tf.keras.layers.Flatten())
#     model.add(tf.keras.layers.Dense(25, activation=tf.nn.relu))
#     model.add(tf.keras.layers.Dense(25, activation=tf.nn.relu))
#     model.add(tf.keras.layers.Dense(4, activation=tf.nn.softmax))
#
#     model.compile(optimizer='adam',
#                   loss='sparse_categorical_crossentropy',
#                   metrics=['accuracy'])
#     model = load_model('model.h5')
#     data = numpy.array(request.get_json())
#     print(data)
#     prediction = model.predict(data)
#     return {"pred": str(numpy.argmax(prediction))}
#
#
# if __name__ == '__main__':
#     app.run(debug=True, port=5003)
