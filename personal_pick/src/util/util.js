import axios from 'axios'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import 'animate.css';
import { IP } from './setIp';

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

export const URL = IP;


export function showSwal(strTag, func){
    withReactContent(Swal).fire({
        // title: "Custom animation with Animate.css",
        html : strTag,
        showConfirmButton : false, // ok 버튼 숨기기
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
        },
        didOpen : () => {               
            let list = document.getElementsByClassName("subtitle");
            for(let i = 0; i < list.length; i++)
            {
                
                list[i].addEventListener("click",function(e){
                    func(e, i)
                })
            }
        },
    })
}

export function modalClose(){
    withReactContent(Swal).close();
}

