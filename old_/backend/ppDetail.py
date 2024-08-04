from flask_restx import Resource
from flask import jsonify
from db_utils import setQuery

class ppDetailPage(Resource):

    def get(self):
        data = setQuery("SELECT * from cos_data;")
        # print(data)
        return jsonify(data)