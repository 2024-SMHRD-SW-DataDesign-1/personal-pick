import React, { useEffect, useState } from 'react'
import {sendGet , URL } from '../../util/util'
import { useNavigate } from 'react-router-dom'
import './Detailinfo.scss'

const Detailinfo = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

    const [data , setData] = useState([]);

    useEffect(()=>{
        sendGet(URL + "/detailPage", setData);
    },[]);

  return (
        <div id="wrapper" className='container'>
            {/* Header */}
            <header id="header">

                <a onClick={home} className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>

            {/* Menu */}
            <nav id="menu">
                    <ul className="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="landing.html">Landing</a></li>
                        <li><a href="generic.html">Generic</a></li>
                        <li><a href="elements.html">Elements</a></li>
                    </ul>
                    <ul className="actions stacked">
                        <li><a href="#" className="button primary fit">Get Started</a></li>
                        <li><a href="#" className="button fit">Log In</a></li>
                    </ul>
                </nav>

            {/* Main */}
            {/* 데이터를 성공적으로 불러오면 실행 */}
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index}>
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