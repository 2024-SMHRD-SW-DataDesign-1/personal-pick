from flask_restx import Resource
from flask import request, jsonify
from db_utils import setQuery

class ppSearch(Resource):
    def post(self):
        data = request.get_json()
        print(data)

        sql = "SELECT * FROM cos_data WHERE cos_name LIKE %s"
        # value = ("%"+data['text']+"%")
        value = f"%{data}%"

        print(value)

        result = setQuery(sql, value)
        return result
    