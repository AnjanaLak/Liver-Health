from flask import jsonify
from flask import Flask, request
from flask_cors import cross_origin, CORS
from mainApp import app, db
from models import model
import json

cors = CORS(app)


def getModels(age, gender, bmi, hypertension, cholesterol, smoking, insulResistance):
    #################### Females ###################################################

    ## With  age >= 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking"

    if (
            age >= 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "No"):
        return 1

    ## With  age >= 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and  insulResistance == "Yes"

    if (
            age >= 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Left Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Never Smoked" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "No" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 1 and bmi >= 25 and hypertension == "No" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    ## With  age >= 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and  insulResistance == "Yes"

    if (
            age >= 50 and gender == 1 and bmi < 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 1 and bmi < 25 and hypertension == "No" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 1 and bmi < 25 and hypertension == "Yes" and cholesterol == "No" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age < 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age < 50 and gender == 1 and bmi >= 25 and hypertension == "Yes" and cholesterol == "No" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age < 50 and gender == 1 and bmi >= 25 and hypertension == "No" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    #################### Males ###################################################

    if (
            age >= 50 and gender == 2 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 2 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "No"):
        return 1

    if (
            age >= 50 and gender == 2 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Left Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 2 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Never Smoked" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 2 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 2 and bmi >= 25 and hypertension == "Yes" and cholesterol == "No" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 2 and bmi >= 25 and hypertension == "No" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 2 and bmi < 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 2 and bmi < 25 and hypertension == "No" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age >= 50 and gender == 2 and bmi < 25 and hypertension == "Yes" and cholesterol == "No" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age < 50 and gender == 2 and bmi >= 25 and hypertension == "Yes" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age < 50 and gender == 2 and bmi >= 25 and hypertension == "Yes" and cholesterol == "No" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    if (
            age < 50 and gender == 2 and bmi >= 25 and hypertension == "No" and cholesterol == "Yes" and smoking == "Smoking" and
            insulResistance == "Yes"):
        return 1

    else:
        return 0


@app.route("/predictFattyLever", methods=['POST'])
@cross_origin()
def predictWithData():
    age = request.json['age']
    gender = request.json['gender']
    height = request.json['height']
    weight = request.json['weight']
    bmi = request.json['bmi']
    waist = request.json['waist']
    hip = request.json['hip']
    sbp = request.json['sbp']
    dbp = request.json['dbp']
    dm = request.json['dm']
    hypertension = request.json['hypertension']
    cholesterol = request.json['cholesterol']
    smoking = request.json['smoking']
    glucose = request.json['glucose']
    insulResistance = request.json['insulResistance']

    print(type(age))
    print(type(smoking))
    print(type(bmi))
    print(bmi)

    age = int(json.dumps(age))
    gender = int(json.dumps(gender))
    bmi = int(bmi)

    print(type(age))
    print(type(gender))
    print(type(bmi))
    print(bmi)

    x = getModels(age, gender, bmi, hypertension, cholesterol, smoking, insulResistance)
    if x == 1:
        return jsonify({"Status": 1})
    else:
        return jsonify({"Status": 0})
