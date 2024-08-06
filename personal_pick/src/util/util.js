import axios from 'axios'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import 'animate.css';

export function sendGet(url, func=null ) {
    axios
        .get(url)
        .then(res => {
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

// export const URL = "http://192.168.219.111:5001";
// export const URL = "http://192.168.219.81:5001";
export const URL = "http://192.168.219.124:5001";

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
        "전체", "시트마스크", "부분마스크/팩", "워시오프 팩",
        "필오프 팩", "슬리핑팩", "코팩", "부분마스크 패드"
    ],
    sunCare : [
        "전체", "선크림/로션", "선스프레이", "선케어 기타",
        "선스틱", "선쿠션/팩트"
    ],
    body : [
        "전체", "바디워시", "바디로션", "바디크림/젤",
        "바디오일/에센스", "바디스크럽", "바디미스트/샤워코롱",
        "핸드크림/밤", "풋케어", "입욕제", "여성청결제",
        "데오드란트", "바디기타", "바디케어 패드",
        "핸드워시", "핸드케어 기타",
    ],
    hair : [
        "전체", "샴푸", "린스/컨디셔너", "헤어에센스/오일", "헤어미스트",
        "스타일링", "헤어컬러링", "트리트먼트/팩", "두피 스케일러",
    ],
    nail : [
        "전체", "네일컬러", "네일케어", "네일리무버 ",
    ],
    perfume : [
        "전체", "여성향수", "남성향수", "리빙퍼퓸"
    ],
    other : [
        "전체", "물티슈", "기타"
    ]

}

export function showSwal(strTag){
    withReactContent(Swal).fire({
        title: "Custom animation with Animate.css",
        html : strTag,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
    })
}
