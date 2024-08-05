import axios from 'axios'

export function sendGet(url, setData = null) {
    console.log("sendGet 호출 성공");
    axios
        .get(url,{setData : setData})
        .then(res => {
            console.log("sendGet 요청 성공");
            console.log("응답 데이터 : ", res.data);
            
            if (setData) {
                setData(res.data);
            }
        })
        .catch(error => {
            console.error("요청 실패 : ", error);
        });
}

export function sendPost(url, data, setData = null) {
    axios
        .post(url, data)
        .then(res => {
            if (setData) {
                setData(res.data);
            }
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
