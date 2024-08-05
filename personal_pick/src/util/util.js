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
<<<<<<< HEAD
// export const URL = "http://192.168.219.81:5001";
=======
>>>>>>> 864d38c621427ef89e485e5025daa9fde8ee6690
