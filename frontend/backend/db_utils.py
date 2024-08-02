import pymysql

def setQuery(sql=None, data = None):
    # # MySQL 데이터베이스 연결
    # db = pymysql.connect(
    #     host='127.0.0.1',
    #     user='root',
    #     password='1234',
    #     db='recipe', 
    #     charset='utf8mb4'
    # )
    
    db = pymysql.connect(
    host='project-db-cgi.smhrd.com',    # 데이터베이스 호스트 주소
    port=3307,                          # 데이터베이스 포트 번호
    user='campus_24SW_DD_p2_1',         # 사용자 이름
    password='smhrd1',                  # 비밀번호
    db='Project_1',                     # 데이터베이스 이름
    charset='utf8mb4'                   # 문자 인코딩
    )

    # 데이터에 접근
    cursor = db.cursor()

    cursor.execute(sql,data)
    
    # 컬럼 이름 받아오기
    columns = [col[0] for col in cursor.description]
    
    # 결과를 딕셔너리로 변환
    data = [dict(zip(columns, row)) for row in cursor.fetchall()]
    
    # DB 연결 종료
    db.commit()
    db.close()
    return data




def testQu(sql = None, data = None):
    # MySQL 데이터베이스 연결
    # db = pymysql.connect(
    #     host='127.0.0.1',
    #     user='root',
    #     password='1234',
    #     db='recipe', 
    #     charset='utf8mb4'
    # )
    
    db = pymysql.connect(
    host='project-db-cgi.smhrd.com',    # 데이터베이스 호스트 주소
    port=3307,                          # 데이터베이스 포트 번호
    user='campus_24SW_DD_p2_1',         # 사용자 이름
    password='smhrd1',                  # 비밀번호
    db='Project_1',                     # 데이터베이스 이름
    charset='utf8mb4'                   # 문자 인코딩
    )

    # 데이터에 접근
    cursor = db.cursor()

    cursor.execute(sql,data)
    
    
    db.commit()
    db.close()
    return data