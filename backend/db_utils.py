import pymysql

def setQuery(sql=None, data = None):
    # MySQL 데이터베이스 연결
    db = pymysql.connect(
        host='127.0.0.1',
        user='root',
        password='1234',
        db='recipe', 
        charset='utf8mb4'
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
    db = pymysql.connect(
        host='127.0.0.1',
        user='root',
        password='1234',
        db='recipe', 
        charset='utf8mb4'
    )
    
    # 데이터에 접근
    cursor = db.cursor()
    cursor.execute(sql,data)
    
    # DB 연결 종료
    db.commit()
    db.close()
    return data