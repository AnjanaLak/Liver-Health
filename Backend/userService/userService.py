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


def registerUser(username, password, email):
    # check whether a user exists
    user = User.query.filter_by(userName=username, userEmail=email).first()
    # saving the user to the db and returns user
    if user:
        return 1
    else:
        newUser = User(username, password, email)
        db.session.add(newUser)  # adding the new user
        try:
            db.session.commit()
            print("New user added")
        except Exception as e:
            print(e)
        user = User.query.filter_by(userName=username, userEmail=email).first()
        usr = {"username": user.userName, "password": user.userPassword, "email": user.userEmail}
        return usr
