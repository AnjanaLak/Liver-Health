import tensorflow as tf
import numpy
from tensorflow.keras.models import load_model

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

prediction = model.predict(numpy.array([[33,2,175,95,31.02,114,114,124,83,1,0,1,2,90,1]]))
print(prediction)
