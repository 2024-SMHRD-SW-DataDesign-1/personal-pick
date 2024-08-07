from flask_restx import Resource
from flask import jsonify,request
from db_utils import setQuery

class ppCategorySel(Resource):

    def get(self):
        data = request.args.to_dict()
        cateValue = data['category']
        print("cateValue : ",cateValue)
        data = setQuery(f'select * from cos_data where cos_name like "%{cateValue}%" limit 9')
        # data = setQuery("""select * from cos_data""")
        return jsonify(data)