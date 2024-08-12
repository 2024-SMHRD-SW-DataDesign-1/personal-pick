from flask_restx import Resource
from flask import request, jsonify
from db_utils import PostQuery, setQuery

# 회원가입
class testJoin(Resource):
    def post(self):
        data = request.get_json()
        print(data)

        sql = "INSERT INTO users (user_id, user_pw, user_name, user_nm, user_email, user_age, user_sex) VALUES(%s, %s, %s, %s, %s, %s, %s)"
        value = data['user_id'], data['user_pw'], data['user_name'], data['user_nm'], data['user_email'], data['user_age'], data['user_sex']
        
        return PostQuery(sql, value)

# 로그인
class testLogin(Resource):
    def post(self):
        data = request.get_json()
        print(data)

        sql = "SELECT * FROM users WHERE user_id = %s AND user_pw = %s"
        value = data['user_id'], data['user_pw']

        result = setQuery(sql, value)
        return jsonify(result)

# 로그인 한 유저 데이터 select
class testUserData(Resource):
    def get(self):
        user_name = request.args.get('user_name')
        # # data = request.args.to_dict()
        # data = request.get_json()
        # print(data)

        # value = data['user_name']
        # print('value : ',value)

        # result = setQuery(f'SELECT * FROM users WHERE user_name Like "%{value}%"')
        # result = setQuery('SELECT * FROM users WHERE user_name LIKE %s', (f'%{user_name}%',))
        result = setQuery(f'SELECT * FROM users WHERE user_name LIKE "%{user_name}%"')
        return jsonify(result)

# class ppCategorySel(Resource):

#     def get(self):
#         data = request.args.to_dict()
#         cateValue = data['category']
#         print("cateValue : ",cateValue)
#         data = setQuery(f'select * from cos_data where cos_name like "%{cateValue}%" limit 9')
#         # data = setQuery("""select * from cos_data""")
#         return jsonify(data)


# class testLogin(Resource):
#     def post(self):
#         data = request.get_json()
#         print(data)

#         sql = "SELECT * FROM test1 WHERE id = %s AND pw = %s"
#         value = data['id'], data['pw']

#         result = setQuery(sql, value)
#         return jsonify(result)