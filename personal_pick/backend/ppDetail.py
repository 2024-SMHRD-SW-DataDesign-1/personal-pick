from flask_restx import Resource
from flask import jsonify,request
from db_utils import setQuery

class ppDetailPage(Resource):

    def get(self):
        # value = request.args.to_dict()
        # idx = int(value['idx'])

        # data = setQuery("""select * from cos_data where idx = %s""", idx)
        data = setQuery("""select * from cos_data""")
        return jsonify(data)