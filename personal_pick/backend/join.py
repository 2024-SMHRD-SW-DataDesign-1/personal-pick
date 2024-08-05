from flask_restx import Resource
from flask import request, jsonify
from db_utils import PostQuery
import pymysql

db = pymysql.connect(
    host='project-db-cgi.smhrd.com',
    port=3307,
    user='campus_24SW_DD_p2_1',
    password='smhrd1',
    db='campus_24SW_DD_p2_1', 
    charset='utf8mb4'
)

class ppJoin(Resource):
    def post(self):
    #     try:
    #         data = request.get_json()
    #         name = data['name']
    #         nickname = data['nickname']
    #         id = data['id']
    #         pw = data['pw']
        
    #         with db.cursor() as cursor:
    #             sql = "INSERT INTO test1 (name, nickname, id, pw) VALUES (%s, %s, %s, %s)"
    #             cursor.execute(sql, (name, nickname, id, pw))
    #             db.commit()
        
    #         return jsonify({"message": "회원가입 성공"}), 201
    #     except Exception as e:
    #         return jsonify({"error": str(e)}), 500
    # # 닫으면 두번째 회원가입 안됌
    # # 연결이 끊겨있어서
    # # finally:
    # #     db.close()
        






        print(request.get_json())    
        sql = "INSERT INTO TEST1(name, nickname, id, pw) VALUES(%s, %s, %s, %s)"
        value = request.get_json()['name'], request.get_json()['nickname'], request.get_json()['id'], request.get_json()['pw']
        

        PostQuery(sql, value)
        return "ok"

