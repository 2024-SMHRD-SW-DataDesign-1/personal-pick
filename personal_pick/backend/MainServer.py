from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
from SubServer import setQuery

app = Flask(__name__)
CORS(app)

# MySQL 데이터베이스 연결(정보) 설정
db = pymysql.connect(
    host='project-db-cgi.smhrd.com',
    port=3307,
    user='campus_24SW_DD_p2_1',
    password='smhrd1',
    db='campus_24SW_DD_p2_1', 
    charset='utf8mb4'
)

# - - - Get - - - #

@app.route('/ppMain', methods=['GET'])
def ppMain():
    print('1번')
    sql = "select idx, brand_name, cos_name, cos_img_src, grade, grade_count, price, vol from cos_data;"
    return jsonify(setQuery(sql))

# URL + DetailPage 경로로 요청하면 실행
@app.route('/detailPage', methods=['GET'])
def DetailPage():
    print('1번')
    sql = "SELECT * FROM cos_data"

    # setQuery 함수 -> SubServer.py에 있음
    return jsonify(setQuery(sql))
    # return jsonify(data)
    # return setQuery(sql)


# - - - Post - - - #

# URL + /join 경로로 데이터를 담아 Post 요청하면 실행
@app.route('/join', methods=['POST'])
def join():
    try:
        data = request.get_json()
        name = data['name']
        nickname = data['nickname']
        id = data['id']
        pw = data['pw']
        
        with db.cursor() as cursor:
            sql = "INSERT INTO test1 (name, nickname, id, pw) VALUES (%s, %s, %s, %s)"
            cursor.execute(sql, (name, nickname, id, pw))
            db.commit()
        
        return jsonify({"message": "회원가입 성공"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    # 닫으면 두번째 회원가입 안됌
    # 연결이 끊겨있어서
    # finally:
    #     db.close()

@app.route('/login', methods=['POST'])
def login():
    try:
        # 전달받은 JSON 형식의 데이터에서 id, pw를 가져옴
        data = request.get_json()
        id = data['id']
        pw = data['pw']

        # "SELECT * FROM test1 WHERE id = %s AND pw = %s"로
        # db에 저장된 유저 id, pw를 가져옴
        # 입력받은 id, pw와 일치하는 항목이 있으면 성공
        with db.cursor() as cursor:
            sql = "SELECT * FROM test1 WHERE id = %s AND pw = %s"
            cursor.execute(sql, (id, pw))
            user = cursor.fetchone()
            
            if user:
                return jsonify({"success": True, "message": "로그인 성공"}), 200
            else:
                return jsonify({"success": False, "message": "ID 또는 비밀번호가 잘못되었습니다."}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500




# MainServer.py가 직접 실행될 때 실행
if __name__ == '__main__':
    app.run('0.0.0.0', port=5001, debug=True)