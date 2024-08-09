from flask_restx import Resource
from flask import request, jsonify
from db_utils import PostQuery

class testJoin(Resource):
    def post(self):
        data = request.get_json()
        print(data)
        print('1',data['userID'], data['pw'], data['userName'], data['nickName'], data['email'], data['ageGroup'], data['skinType'])

        sql = "INSERT INTO Users (userID, pw, userName, nickName, email, ageGroup, skinType) VALUES(%s, %s, %s, %s, %s, %s, %s)"
        value = data['userID'], data['pw'], data['userName'], data['nickName'], data['email'], data['ageGroup'], data['skinType']
        
        return PostQuery(sql, value)


# class testLogin(Resource):
#     def post(self):
#         data = request.get_json()
#         print(data)

#         sql = "SELECT * FROM test1 WHERE id = %s AND pw = %s"
#         value = data['id'], data['pw']

#         result = setQuery(sql, value)
#         return jsonify(result)