from flask import Flask
from flask_restx import Api
from flask_cors import CORS
from hello import test

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app) 
app.config['JSON_AS_ASCII'] = False
api = Api(app)

api.add_resource(test, '/HelloTest')

if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)
