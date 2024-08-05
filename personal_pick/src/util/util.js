import axios from 'axios'

export function sendGet(url, func=null ) {
    console.log("sendGet 호출 성공");
    axios
        .get(url)
        .then(res => {
            console.log("sendGet 요청 성공");
            console.log("응답 데이터 : ", res.data);
            
            if (func) {
                func(res.data);
            }
        })
        .catch(error => {
            console.error("요청 실패 : ", error);
        });
}

export function sendPost(url, func=null, data = null) {
    axios
        .post(url, {
            data : data
        })
        .then(res => {
            // func()
        })
        .catch(error => {
            console.error("요청 실패 : ", error);
        });
}


export function sendDel(url, func=null, data=null)
{
    axios
        .delete(url, {
            data : data
        })
        .then(res => {
            // func(res.data)
        })
}

export const URL = "http://192.168.219.111:5001";
// export const URL = "http://192.168.219.81:5001";

export const dummyCategory = {
    skinCare : [
        "전체", "스킨/토너", "로션/에멀젼", "에센스/앰플/세럼", 
        "페이스오일", "크림", "아이케어", "미스트",
        "젤", "스킨/토너 패드", "밤/멀티밤"
    ],
    cleanSing : [
        "전체", "클렌징 폼", "클렌징 워터", "클렌징 젤", "클렌징 오일",
        "클렌징 로션/ 크림", "클렌징 비누", "클렌징 티슈/패드", "립/아이 리무버",
        "스크럽/필링", "스크럽/필링 패드", "클렌징 파우더", "클렌징 밤"
    ],
    maskPack : [
        
    ]

}
