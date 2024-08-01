from flask_restx import Resource
from flask import jsonify, request
from db_utils import testQu, setQuery
  
class test(Resource):

    def get(self):
        data = setQuery("SELECT * FROM RECIPE_REVIEW;")
        return jsonify(data)


    def post(self): 
        print(request.get_json())
        # print("getjson1 : ",request.get_json()['data']['name'])
        # print("getjson2 : ",request.get_json()['data']['id'])
        # print("getjson3 : ",request.get_json()['data']['pw'])
        # print("getjson4 : ",request.get_json()['data']['nm'])   
        sql = "INSERT INTO TEST(NAME, ID, PW, NM) VALUES(%s, %s, %s, %s)"
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



