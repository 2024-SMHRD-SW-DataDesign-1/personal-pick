from flask_restx import Resource
from flask import request, jsonify
from db_utils import PostQuery

class testJoin(Resource):
    def post(self):
        data = request.get_json()
        print(data)

        sql = "INSERT INTO users (user_id, user_pw, user_name, user_nm, user_email, user_age, user_sex) VALUES(%s, %s, %s, %s, %s, %s, %s)"
        value = data['user_id'], data['user_pw'], data['user_name'], data['user_nm'], data['user_email'], data['user_age'], data['user_sex']
        
        return PostQuery(sql, value)


# class testLogin(Resource):
#     def post(self):
#         data = request.get_json()
#         print(data)

#         sql = "SELECT * FROM test1 WHERE id = %s AND pw = %s"
#         value = data['id'], data['pw']

#         result = setQuery(sql, value)
#         return jsonify(result)