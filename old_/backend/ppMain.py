from flask_restx import Resource
from flask import jsonify
from db_utils import setQuery

class ppMainPage(Resource):

    def get(self):
        data = setQuery("""select idx, brand_name, cos_name, cos_img_src, 
                            grade, grade_count, price, vol
                            from cos_data;""")
        # print(data)
        return jsonify(data)