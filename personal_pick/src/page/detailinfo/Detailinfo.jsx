import React, { useEffect, useState } from 'react'
import {sendGet , URL } from '../../util/util'
import { useNavigate } from 'react-router-dom'
import './Detailinfo.scss'
import star from '../../img/별.png'

const Detailinfo = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

    const [data , setData] = useState([]);

    useEffect(()=>{
        sendGet(URL + "/DetailPage", setData);
    },[]);

  return (
        <div id="wrapper" className='container'>

            {/* Main */}
            {/* 데이터를 성공적으로 불러오면 실행 */}
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index}>

                        <div id = 'header'>
                        {/* 화장품 이름 */}
                        <div className='itemname'>
                            {item.cos_name}
                        </div>
                        </div>

                        <div id = 'main'>
                        {/* 화장품 사진 */}
                        <img src ={item.cos_img_src}/>

                        {/* 화장품 브랜드 이미지, 이름 */}

                        <div className='brand'>
                            <img src = {item.brand_img_src} className='brandimg'/><span id='brandname'>{item.brand_name}</span>
                        </div>

                        {/* 화장품 정보 */}
                        <div className ='iteminfo'>
                        <div className='nameinfo'>
                        {item.cos_name}
                        </div>

                        <div className='starinfo'>
                        <img src = {star} className='star'/>{item.grade}({item.grade_count})
                        </div>

                        <div className='priceinfo'>
                        <div className='price'>
                        정가 : 
                        </div>
                        {item.price}원 / {item.vol}ml
                        </div>

                        <div className='rankinginfo'>
                        <div className='ranking'>
                        랭킹 : 
                        </div>
                        {item.ranking}
                        </div>
                        </div>

                        </div>

                        {/* <h2>{item.brand_name}</h2>
                        <p>{item.cos_name}</p>
                        <p>{"정가 " + item.price + "원 / " + item.vol + "ml"}</p>
                        <div className='flex_col'>
                            <p>{"   " + item.grade + " (" + item.grade_count + ")"}</p>
                        </div> */}
                    </div>
                ))
            ) : (
            // 데이터를 불러오는데 실패하면 실행
                <p>데이터 연결 실패</p>
            )}
    </div>
   
  )
}

export default Detailinfo