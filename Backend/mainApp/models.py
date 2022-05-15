from datetime import datetime
from mainApp import db
from mainApp import ma


## User

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    userName = db.Column(db.String(20))
    userEmail = db.Column(db.String(50))
    userPassword = db.Column(db.String(50))

    def __init__(self, username, password, email):
        self.userName = username
        self.userPassword = password
        self.userEmail = email


class User_Schema(ma.Schema):
    class Meta:
        fields = ('username', 'password', 'email')


user_Schema = User_Schema()
# candidates_Schema = Candidate_Schema(many=True)

## User Data
