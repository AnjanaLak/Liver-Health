from mainApp import db
from mainApp.models import User


# Service class of user login

def loginUser(username, password):
    # finding the user using the username
    user = User.query.filter_by(userName=username, userPassword=password).first()
    usr = {"username": user.userName, "password": user.userPassword, "email": user.userEmail}
    if user:
        return usr
    else:
        return 0


def registerUser():
    user = {}
    return user
