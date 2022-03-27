import numpy
import pandas as pd
import tensorflow as tf
from keras.models import load_model
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from sklearn import metrics


def loadModel(model):
    model = tf.keras.models.Sequential()
    model.add(tf.keras.layers.Flatten())
    model.add(tf.keras.layers.Dense(25, activation=tf.nn.relu))
    model.add(tf.keras.layers.Dense(25, activation=tf.nn.relu))
    model.add(tf.keras.layers.Dense(10, activation=tf.nn.softmax))

    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])
    model = load_model('model.h5')
    return model


def trainModel(model, datasetFilePath):
    model = tf.keras.models.Sequential()
    model.add(tf.keras.layers.Flatten())
    model.add(tf.keras.layers.Dense(25, activation=tf.nn.relu))
    model.add(tf.keras.layers.Dense(25, activation=tf.nn.relu))
    model.add(tf.keras.layers.Dense(2, activation=tf.nn.softmax))

    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])
    model_df = pd.read_csv(datasetFilePath)
    print(model_df.shape)
    X = model_df.values[:, 1:16]
    y = model_df.values[:, 16]
    x_train, x_test, y_train, y_test = train_test_split(X, y, stratify=y, test_size=0.2)

    x_train = tf.keras.utils.normalize(x_train, axis=1)
    x_test = tf.keras.utils.normalize(x_test, axis=1)
    history = model.fit(x_train, y_train, epochs=15, validation_data=(x_test, y_test))
    print("History: ", history)

    val_loss, val_acc = model.evaluate(x_test, y_test)
    print(val_loss)
    print(val_acc)

    model.save('model.h5')

    print(history.history)
    # summarize history for accuracy
    plt.plot(history.history['accuracy'])
    plt.plot(history.history['val_accuracy'])
    plt.title('model accuracy')
    plt.ylabel('accuracy')
    plt.xlabel('epoch')
    plt.legend(['train', 'test'], loc='upper left')
    plt.show()
    # summarize history for loss
    plt.plot(history.history['loss'])
    plt.plot(history.history['val_loss'])
    plt.title('model loss')
    plt.ylabel('loss')
    plt.xlabel('epoch')
    plt.legend(['train', 'test'], loc='upper left')
    plt.show()

    y_pred = model.predict_classes(x_test)
    print(y_test)
    print(y_pred)
    cnf_matrix = metrics.confusion_matrix(y_test, y_pred)
    print("===================")
    print("Confusion matrix")
    print("===================")
    print(cnf_matrix)

    return model


def predict(model, data):
    return model.predict(numpy.array(data))


model = tf.keras.models.Sequential()
trainModel(model, "Dataset/data.csv")
