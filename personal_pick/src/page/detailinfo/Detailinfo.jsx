import React, { useEffect, useState } from 'react'
import {sendGet , showSwal, URL } from '../../util/util'
import { useNavigate } from 'react-router-dom'
import './Detailinfo.scss'
import star1 from '../../img/별.png'
import { useParams } from 'react-router-dom'
import smile from '../../img/smile.png'
import notsmile from '../../img/무표정.png'
import StarRating from './StarRating'
import account from '../../img/account.png'
import goback from '../../img/왼쪽.png'
import { FaAngleDown } from "react-icons/fa";
import detailright from '../../img/오른쪽.png'

const Detailinfo = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

    const [data , setData] = useState([]);

    const {idx} = useParams()

    useEffect(()=>{
         sendGet(URL + "/DetailPage?idx="+idx , setData);
    },[]);


    const showmodal = (e) => {
        let str = ``
        str += `<div class = "subtitle">화장품 1</div>`
        str += `<div class = "subtitle">화장품 2</div>`
        showSwal(str,test)

        
    }

    const showmodal1 = (e) => {

        let str = ``
        str += `<div class = "subtitle">랭킹/수상 정보</div>`
        showSwal(str,test1)
    }


    const test = (e) => {
        console.log(12)
    }

    const test1 = (e) => {
        console.log(e.target.innerText)
    }

    
  return (
        <div id = "wrapper">
            {/* Main */}
            {/* 데이터를 성공적으로 불러오면 실행 */}
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index}>

                    <div id = 'head'>
                    {/* 화장품 이름 */}
                    
                    <div className='itemname'>
                    <button className='goback' type="button" onClick={()=> navigate('/Search')}><span><img src={goback} width={33} height={30}></img></span></button>
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
                        <img src = {star1} className='star' width={18}/><span className='starinfotext'>{item.grade}({item.grade_count})</span>
                        </div>

                        <div className='priceinfo'>
                        <div className='price'>
                        정가 :<span className='pricetext'>{item.price}원 / {item.vol}ml</span>
                        </div>
                        </div>

                        <div className='rankinginfo' onClick={(e)=>showmodal1(e)}>
                        <div className='ranking'>
                        랭킹 :<span className='rankingtext'>{item.ranking}</span>
                        </div>
                        <img src = {detailright} width={25} height={25}/>
                        </div>
                        </div>

                        <hr className='bar'/>

                        {/*ai 리뷰 */}
                        <span className='aireview'><span className='ai'>AI</span>가 분석한 리뷰</span>

                        <div className='flex justify-between px-20 my-24 reviewinfo'>
                        <div className='likereview grow mr-24 w-1/2'>
                        <img src ={smile} className='smile' width={26} height={26}/>
                        <span className='like'>좋아요</span>
                            <span className='margintop1'>진정되는</span>
                            <span className='margintop1'>쿨링되는</span>
                            <span className='margintop1'>수분있는</span>
                            <span className='margintop1'>모공관리되는</span>
                            <span className='margintop1'>자극없는</span>
                            <span className='margintop1'>향에 만족한</span>
                            <span className='margintop1'>보습되는</span>
                        </div>

                        <div className='dislike grow mr-24 w-1/2'>
                        <img src ={notsmile} className='smile' width={23} height={23}/>
                        <span className='dontlike'>아쉬워요</span>
                            <span className='margintop2'>가루날림이 있는</span>
                            <span className='margintop2'>마르는</span>
                            <span className='margintop2'>흘러내리는</span>
                            <span className='margintop2'>잔여물이 남는</span>
                            <span className='margintop2'>노폐물 제거 안되는</span>
                            <span className='margintop2'>가려운</span>
                            <span className='margintop2'>내장 도구가 안좋은</span>
                        </div>
                        </div>

                        {/* <hr className='bar2'/> */}


                        <div className='detailreview'>
                            리뷰
                        <div className='reviewcount'>
                            1432
                            </div>
                            </div>

                        {/*평점 전체 div  */}
                        <div className='reviewall'>
                        {/*평점 구간 */}
                        <div className='reviewratemain'>
                            <span className='reviewtext'>평점</span>
                            <StarRating />
                            </div>
                            

                        {/* 평점 그래프 */}
                        <div className='graphbarmain'>
                        <div className='graphbar'/>
                        <span className='graphbartext'>5점</span>
                        <div className='graphbar'/>
                        <span className='graphbartext'>4점</span>
                        <div className='graphbar'/>
                        <span className='graphbartext'>3점</span>
                        <div className='graphbar'/>
                        <span className='graphbartext'>2점</span>
                        <div className='graphbar'/>
                        <span className='graphbartext'>1점</span>
                        </div>
                        </div>

                         {/* 계정 정보 및 사용자 리뷰 */}
                         <div className='accountmain'>
                        <div className='accountinfo'>
                        <img src = {account} width={50}/>
                        <span className='nickname'>닉네임</span>
                        <span className='skintype'>20대/건성/아토피/여드름</span>
                        <div className='accountstar'>
                            <StarRating/><span>날짜</span>
                            </div>
                            </div>
                        
                        <div className='goodcommentmain'>
                            <img src = {smile} width={30} height={30}></img>
                            <span className='goodcomment'>좋은말</span>
                            </div>

                        <div className='sosocommentmain'>
                            <img src = {notsmile} width={26} height={26}></img>
                            <span className='sosocomment'>아쉬운말</span>
                            </div>
                            </div>
                        <hr className='bar3'/>

                        
                        


                        <div className='ingredientmain'>
                            <span>성분</span>
                            </div>

                        <div className='ingredientdropbox' onClick={(e)=>showmodal(e)}> 
                        <input id="dropdown" type="checkbox"/>
                        <label className="dropdownLabel" for="dropdown">
                        <div>화장품 성분보기</div>
                        <FaAngleDown className="caretIcon" />
                        </label>
                        </div>

                        <div className='ingredientcomposition'>
                            <span className='compositiontext'>성분 구성</span>
                            </div>


                        {/* <div class = "up-btn">
                            <ScrollToTopButton/>
                        </div> */}

                        {/* 성분 구성 위험 단계 */}

                        <div class="flex justify-between mt-16">
                        <div className="flex items-center gap-x-4">
                        <div className="w-[10px] h-[10px] rounded-full bg-mint-600"></div>
                        <span className="hds-text-smalltext-large text-mint-600">1-2</span>
                        <span className="hds-text-smalltext-large text-gray-tertiary">낮은 위험</span>
                        </div>

                        <div className="flex items-center gap-x-4">
                        <div className="w-[10px] h-[10px] rounded-full bg-yellow-600"></div>
                        <span className="hds-text-smalltext-large text-yellow-600">3-6</span>
                        <span className="hds-text-smalltext-large text-gray-tertiary">중간 위험</span>
                        </div>

                        <div className="flex items-center gap-x-4">
                        <div className="w-[10px] h-[10px] rounded-full bg-red-600"></div>
                        <span className="hds-text-smalltext-large text-red-600">7-10</span>
                        <span className="hds-text-smalltext-large text-gray-tertiary">높은 위험</span>
                        </div>

                        <div className="flex items-center gap-x-4">
                        <div className="w-[10px] h-[10px] rounded-full bg-gray-600"></div>
                        <span className="hds-text-smalltext-large text-gray-tertiary">등급 미정</span>
                        </div>
                        </div>

                        {/* 성분 구성 막대 */}
                        <div className="flex flex-row-reverse mt-16 h-12 rounded-4 bg-gray-600">
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