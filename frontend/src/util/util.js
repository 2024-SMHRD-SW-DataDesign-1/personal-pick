import axios from 'axios'

export function sendGet(url, func = null, data=null){
    
    axios
        .get(url, {
            data : data,
        })
        .then(res => {
            
            if(func != null)
            {
                func(res.data)
            }
        })
}

export function sendPost(url, func=null, data=null)
{
    axios
        .post(url, {
            data : data
        })
        .then(res => {
            // func(res.data)
        })
        
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

export const URL = "http://192.168.219.111:5000";


