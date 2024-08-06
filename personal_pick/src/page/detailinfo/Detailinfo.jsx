import React, { useEffect, useState } from 'react'
import {sendGet , URL } from '../../util/util'
import { useNavigate } from 'react-router-dom'
import './Detailinfo.scss'
import star from '../../img/별.png'
import { useParams } from 'react-router-dom'
import smile from '../../img/smile.png'
import notsmile from '../../img/notSmile.png'
import { FaStar } from 'react-icons/fa';


const Detailinfo = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

    const [data , setData] = useState([]);

    const {idx} = useParams()

    useEffect(()=>{
         sendGet(URL + "/DetailPage?idx="+idx , setData);
    },[]);

    const ARRAY = [0, 1, 2, 3, 4];

    const [score, setScore] = useState([false, false, false, false, false]);
    
    const starScore = index => {
        let star = [...score];
        for (let i = 0; i < 5; i++) {
          star[i] = i <= index ? true : false;
        }
        setScore(star);
      };

    
  return (
        <div id="wrapper" className='container'>

            {/* Main */}
            {/* 데이터를 성공적으로 불러오면 실행 */}
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index}>

                    <div id = 'head'>
                    {/* 화장품 이름 */}
                    
                    <div className='itemname'>
                    <label>{item.cos_name}</label>
                    </div>
                    </div>

                        <div id = 'main1'>
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
                        <img src = {star} className='star' width={18}/>{item.grade}({item.grade_count})
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

                        <hr className='bar'/>

                        <div className='reviewinfo'>
                        <span className='aireview'>AI 가 분석한 리뷰</span><br/>
                        <img src ={smile} className='smile' width={40}/>
                        <span className='like'>좋아요</span>
                        <div className='likereview'>
                            <span className='margintop1'>진정되는</span>
                            <br/>
                            <span className='margintop1'>쿨링되는</span>
                            <br/>
                            <span className='margintop1'>수분있는</span>
                            <br/>
                            <span className='margintop1'>모공관리되는</span>
                            <br/>
                            <span className='margintop1'>자극없는</span>
                            <br/>
                            <span className='margintop1'>향에 만족한</span>
                            <br/>
                            <span className='margintop1'>보습되는</span>
                        </div>

                        <div className='dislike'>
                        <img src ={notsmile} className='smile' width={40}/>
                        <span className='like'>아쉬워요</span>
                            <span className='margintop2'>가루날림이 있는</span>
                            <br/>
                            <span className='margintop2'>마르는</span>
                            <br/>
                            <span className='margintop2'>흘러내리는</span>
                            <br/>
                            <span className='margintop2'>잔여물이 남는</span>
                            <br/>
                            <span className='margintop2'>노폐물 제거 안되는</span>
                            <br/>
                            <span className='margintop2'>가려운</span>
                            <br/>
                            <span className='margintop2'>내장 도구가 안좋은</span>
                        </div>

                        <hr className='bar2'/>

                        <div className='review'>
                            리뷰
                        <div className='reviewcount'>
                            1432
                            </div>
                            </div>

                        <div className='reviewrate'>
                            평점
                            </div>
                        <div className='reviewratestar'>
                        {ARRAY.map((el, index) => (
                                <FaStar
                                    key={index}
                                    size="14"
                                ></FaStar>
                                ))}
                        </div>


                        </div>
                        </div>
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