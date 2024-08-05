from flask_restx import Resource
from flask import request
from db_utils import PostQuery

class ppJoin(Resource):
    def post(self):
 
        print(request.get_json())    
        sql = "INSERT INTO TEST1(name, nickname, id, pw) VALUES(%s, %s, %s, %s)"
        value = request.get_json()['name'], request.get_json()['nickname'], request.get_json()['id'], request.get_json()['pw']
        

        PostQuery(sql, value)
        return "ok"

