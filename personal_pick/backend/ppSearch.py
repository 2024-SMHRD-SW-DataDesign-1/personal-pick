from flask_restx import Resource
from flask import request, jsonify
from db_utils import setQuery

class ppSearch(Resource):
    def get(self):
        value = request.args.to_dict()
        data = str(value['value'])

        sql = "SELECT * FROM cos_data WHERE cos_name LIKE %s"
        text = f"%{data}%"
        
        result = setQuery(sql, text)
        print(value)

        return jsonify(result)