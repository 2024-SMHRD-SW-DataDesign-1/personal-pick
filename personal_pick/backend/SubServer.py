import pymysql

db = pymysql.connect(
    host='project-db-cgi.smhrd.com',
    port=3307,
    user='campus_24SW_DD_p2_1',
    password='smhrd1',
    db='campus_24SW_DD_p2_1', 
    charset='utf8mb4'
)

def setQuery(sql=None, data = None):
    # 데이터에 접근
    cursor = db.cursor()

    cursor.execute(sql,data)
    
    # 컬럼 이름 받아오기
    columns = [col[0] for col in cursor.description]
    print('123')

    # 결과를 딕셔너리로 변환
    data = [dict(zip(columns, row)) for row in cursor.fetchall()]
    
    # # DB 연결 종료
    # -> 새로고침하거나 페이지 이동할 때 데이터 안불러와짐
    # MainServer.py에서 다음 요청을 처리할 때 이미 db연결이 닫혀버림
    # 마찬가지로 MainServer.py에서 설정해둔 get_db 함수 이용
    # db.commit()
    # db.close()
    return data