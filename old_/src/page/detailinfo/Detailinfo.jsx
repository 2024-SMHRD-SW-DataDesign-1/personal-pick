import React, { useEffect, useState } from 'react'
import {sendGet , URL } from '../../util/util'
import './Detailinfo.scss'

const Detailinfo = () => {

    const [list , setList] = useState([])

    const showConsole = (data) => {
        console.log(data);
        setList(data);
    }

    useEffect(()=>{
        sendGet(URL + "/ppDetail" , showConsole)
    },[])

  return (
        <div className='container'>

        {list.map((item) => (
            <div key = {item.idx}>

                <div className='itemname'>
                <p>{item.cos_name}</p>
                </div>


                <div className='img'>
                <img src ={item.cos_img_src}/>
                </div>


                <div className='brand'>
                <img src = {item.brand_img_src}/> <p>{item.brand_name}</p>
                </div>

                <p>{item.cos_name}</p>
                <p>{item.grade}</p><p>({item.grade_count})</p>
                <p>{item.price}원</p><p>{item.vol}ml</p>
                </div>


        ))}

    </div>
   
  )
}

export default Detailinfo