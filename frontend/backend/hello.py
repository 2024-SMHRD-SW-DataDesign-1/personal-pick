from flask_restx import Resource
from flask import jsonify, request
from db_utils import testQu, setQuery
import pymysql

class test(Resource):

    def get(self):
        testDic = {"jiwon":{"name":"jiwon", "ID":"akdlwb", "pw":"1234", "nickname":"gummy"}, 
                   "test":{"name":"test", "ID":"test11", "pw":"1111", "nickname":"imtest"}}
        
        # 여러 객체 안에서 키 값으로 객체 가져오기
        jwDic = testDic["jiwon"]
        ttDic = testDic["test"]
        print(jwDic)
        print(ttDic)

        NickName = jwDic["nickname"]

        # 완전 기본 구조. 프론트에서 test 클래스 중 get 방식으로 요청하면 
        # 보내는 값을 request.args.to_dict() 딕셔너리 형태로 받기
        # 해당 객체의 키 값으로 value 담고 보낼 쿼리문에 녹여내기!
        # 그 후 리턴!!

        # 포트 번호 일단 5001로 설정해놨고 backend 경로로 들어와서
        # python MainServer.py 실행해 http://127.0.0.1:5001 들어와서 get 방식 확인하기
        return(NickName)
    
        # data = setQuery("SELECT * FROM RECIPE_REVIEW;")
        # return jsonify(data)


    def post(self): 
        print('pymysql Version :', pymysql.__version__)

        print(request.get_json())
        print("getjson1 : ",request.get_json()['data']['name'])
        print("getjson2 : ",request.get_json()['data']['id'])
        print("getjson3 : ",request.get_json()['data']['pw'])
        print("getjson4 : ",request.get_json()['data']['nm'])   
        sql = "INSERT INTO test(name, id, pw, nm) VALUES(%s, %s, %s, %s)"
        value = request.get_json()['data']['name'], request.get_json()['data']['id'], request.get_json()['data']['pw'], request.get_json()['data']['nm']

        testQu(sql, value)
        return "ok"
    

    def delete(self):  
        print(request.get_json())
        print("deljson1 : ",request.get_json()['name'])

        sql = "delete from test where name = (%s)"
        value = request.get_json()['name']
        testQu(sql, value)

        return "ok"

# test

