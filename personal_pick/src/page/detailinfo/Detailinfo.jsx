import React, { useEffect, useState } from 'react'
import {sendGet , showSwal, URL } from '../../util/util'
import { useNavigate } from 'react-router-dom'
import './Detailinfo.scss'
import star1 from '../../img/별.png'
import { useParams } from 'react-router-dom'
import smile from '../../img/smile.png'
import notsmile from '../../img/무표정.png'
import account from '../../img/account.png'
import goback from '../../img/왼쪽.png'
import { FaAngleDown } from "react-icons/fa";
import detailright from '../../img/오른쪽.png'
import caution from '../../img/caution.png'
import allergy from '../../img/allergy.png'
import ScrollToTop from '../../components/scrolltotop/ScrollToTop'
import { setScore } from '../../util/util'
import StarRating from './StarRating'
import TempSkin from '../../components/tempskin/TempSkin'
import SkinType from '../../components/skintype/SkinType'


const Detailinfo = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

    
    const [data , setData] = useState([]);
    const [review , setReview] = useState([]);
    const [scoreavg , setScoreAvg] = useState([])
    const [scorecnt , setScoreCnt] = useState([])
    // const [starscore , setStarScore] = useState(0);
    


    const {idx} = useParams()

    useEffect(()=>{
         sendGet(URL + "/DetailPage?idx="+idx , setData);
         sendGet(URL + "/ReviewPage?idx="+idx , setReview);
         sendGet(URL + "/ScoreAvgPage?idx="+idx ,setScoreAvg);
         sendGet(URL + "/ScoreCntPage?idx="+idx ,setScoreCnt);
    },[]);
    

    useEffect(()=>{
       console.log(review)
   },[review]);
   
   useEffect(()=>{
    console.log(scoreavg)
   },[scoreavg]);

   useEffect(()=>{
    console.log(scorecnt)
   },[scorecnt]);


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
                    <div>

                    {/* 화장품 이름 */}
                    
                    <div className='itemname'key={index}>
                    <button className='goback' type="button" onClick={()=> navigate('/Search')}><span className= "gobackbtn"><img src={goback} width={20} height={20}></img></span></button>
                    <label>{item.cos_name}</label>
                    </div>

                        <div id = 'main1'>

                        {/* 화장품 사진 */}
                        <img className='w-full' src ={item.cos_img_src}/>


                        {/* 화장품 브랜드 이미지, 이름 */}
                        <div className='brandmain my-24'>
                        <div className='brand flex items-center px-20'>
                            <img src = {item.brand_img_src} className='brandimg'/><span id='brandname'>{item.brand_name}</span>
                        </div>

                        {/* 화장품 정보 */}
                        <div className ='iteminfo'>
                        <div className='nameinfo mt-8 px-20'>
                        {item.cos_name}
                        </div>

                        <div className='starinfo hds-flex hds-items-center hds-space-x-2 px-20 mt-16'>
                        <img src = {star1} className='star' width={18}/><span className='starinfotext'>{item.grade}({item.grade_count})</span>
                        </div>

                        <div className='priceinfo px-20 mt-24'>
                        <div className='price'>
                        정가 :<span className='pricetext'>{item.price}원 / {item.vol}ml</span>
                        </div>
                        </div>

                        <div className='rankinginfo' onClick={(e)=>showmodal1(e)}>
                        <div className='ranking px-20 mt-24'>
                        랭킹 :<span className='rankingtext'>{item.ranking}</span>
                        </div>
                        <img src = {detailright} width={23} height={23}/>
                        </div>
                        </div>
                        </div>

                        <hr className='bar'/>

                        {/*ai 리뷰 */}
                        <span className='aireview mt-8 px-20'><span className='ai'>AI가 분석한 리뷰</span></span>

                        <div className='flex justify-between px-20 my-24 reviewinfo'>
                        <div className='likereview grow mr-24 w-1/2'>
                        <img src ={smile}  width={26} height={26} className='smileimg'/>
                            <span className='like'>좋아요</span>
                            <span className='margintop1'>진정되는<span className='reviewdata hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop1'>쿨링되는<span className='reviewdata hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop1'>수분있는<span className='reviewdata hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop1'>모공관리되는<span className='reviewdata1 hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop1'>자극없는<span className='reviewdata hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop1'>향에 만족한<span className='reviewdata2 hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop1'>보습되는<span className='reviewdata hds-text-body-medium text-gray-tertiary'>0</span></span>
                        </div>
                        <div className='w-[1px] bg-gray-300 aireviewbar'/>

                        <div className='dislike grow mr-24 w-1/2'>
                        <img src ={notsmile}  width={23} height={23} className='notsmileimg'/>
                            <span className='dontlike'>아쉬워요</span>
                            <span className='margintop2'>가루날림이 있는<span className='reviewdata3 hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop2'>마르는<span className='reviewdata4 hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop2'>흘러내리는<span className='reviewdata5 hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop2'>잔여물이 남는<span className='reviewdata6 hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop2'>노폐물 제거 안되는<span className='reviewdata7 hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop2'>가려운<span className='reviewdata8 hds-text-body-medium text-gray-tertiary'>0</span></span>
                            <span className='margintop2'>내장 도구가 안좋은<span className='reviewdata7 hds-text-body-medium text-gray-tertiary'>0</span></span>
                        </div>
                        </div>

                        <hr className='bar2'/> 


                        <div className='detailreview mt-8 px-20'>
                            리뷰
                        <div className='reviewcount'>
                            1432
                            </div>
                            </div>

                        {/*평점 전체 div  */}
                        <div className='reviewall flex justify-between px-20 my-24'>
                        {/*평점 구간 */}
                        <div className='reviewratemain'>
                            <span className='reviewtext'>평점</span>
                            <StarRating />
                            </div>
                            
                        <div className='w-[1px] bg-gray-300'/>


                        <div className="flex gap-x-8 h-[95px]">
                        {/* 5점 */}
                        <div className='flex flex-col items-center justify-end w-[20px]'>
                        <span className='hds-inline-block hds-rounded-4 hds-h-16 hds-px-4 hds-text-smalltext-medium hds-leading-[16px] hds-bg-yellow-600 hds-text-white'>
                            들어올 값
                        </span>
                        <div className='flex items-end w-4 h-[50px] mt-4 rounded-full background-gray-secondary-hovered'>
                        <div class="w-4 rounded-full bg-yellow-600" height= {67}></div>
                        </div>

                        <span className='hds-text-caption-large mt-8 text-yellow-600'>
                            5점
                        </span>
                        </div>

                        {/* 4점 */}
                        <div className='flex flex-col items-center justify-end w-[20px]'>
                        <div className='flex items-end w-4 h-[50px] mt-4 rounded-full background-gray-secondary-hovered'>
                        <div class="w-4 rounded-full bg-yellow-600" height= {67}></div>
                        </div>

                        <span className='hds-text-smalltext-large mt-8 text-gray-tertiary'>
                            4점
                        </span>
                        </div>

                        {/* 3점 */}
                        <div className='flex flex-col items-center justify-end w-[20px]'>
                        <div className='flex items-end w-4 h-[50px] mt-4 rounded-full background-gray-secondary-hovered'>
                        <div class="w-4 rounded-full bg-yellow-600" height= {67}></div>
                        </div>

                        <span className='hds-text-smalltext-large mt-8 text-gray-tertiary'>
                            3점
                        </span>
                        </div>

                        {/* 2점 */}
                        <div className='flex flex-col items-center justify-end w-[20px]'>
                        <div className='flex items-end w-4 h-[50px] mt-4 rounded-full background-gray-secondary-hovered'>
                        <div class="w-4 rounded-full bg-yellow-600" height= {67}></div>
                        </div>

                        <span className='hds-text-smalltext-large mt-8 text-gray-tertiary'>
                            2점
                        </span>
                        </div>

                        {/* 1점 */}
                        <div className='flex flex-col items-center justify-end w-[20px]'>
                        <div className='flex items-end w-4 h-[50px] mt-4 rounded-full background-gray-secondary-hovered'>
                        <div class="w-4 rounded-full bg-yellow-600" height= {67}></div>
                        </div>

                        <span className='hds-text-smalltext-large mt-8 text-gray-tertiary'>
                            1점
                        </span>
                        </div>

                        </div>
                        </div>

                         {/* 계정 정보 및 사용자 리뷰 */}
                         <div className='accountmain'>
                        <div className='accountinfo flex items-center'>
                        <img src = {account} width={50} className='w-40 h-40 rounded-full object-cover object-center'/>
                        <div className='textonly'>
                        <span className='nickname hds-text-subtitle-medium text-gray-primary'>닉네임</span>
                        <span className='skintype hds-text-smalltext-large ml-2 text-gray-secondary'>20대/건성/아토피/여드름</span><br/>
                        </div>
                        <div className='accountstar'>
                        {setScore(4)}
                            </div>
                            <span className='hds-text-smalltext-large ml-8 text-gray-quaternary accountdate'>날짜</span>
                            </div>
                        
                        <div className='goodcommentmain flex items-start gap-x-8 mt-24'>
                            <img src = {smile} width={32} height={31}></img>
                            <span className='goodcomment'>좋은말</span>
                            </div>

                        <div className='sosocommentmain flex items-start gap-x-8 mt-24'>
                            <img src = {notsmile} width={28} height={25}></img>
                            <span className='sosocomment'>{item.bad_review}</span>
                            </div>
                            </div>


                        <hr className='bar3'/>



                            {/* 리뷰 전체보기 버튼 */}
                            <div class="allreviewbtncontainer">
                            <a class="allreviewbtn btn-5" href='https://play.google.com/store/search?q=%EC%83%98%ED%94%8C%EB%A1%9C%EB%93%9C&c=apps&hl=ko'>리뷰 전체보기</a>
                            </div>

                        {/* 성분 */}

                        <div className='ingredientmain mt-8 px-20'>
                            <span>성분</span>
                            </div>

                        <hr className='ingredientbar'/>

                        <div className='ingredientdropbox' onClick={(e)=>showmodal(e)}> 
                        <input id="dropdown" type="checkbox"/>
                        <label className="dropdownLabel" for="dropdown">
                        <div>화장품 성분보기</div>
                        <FaAngleDown className="caretIcon" />
                        </label>
                        </div>

                        {/* 성분 구성 */}
                        <div className='ingredientcomposition mt-8 px-20'>
                            <span className='compositiontext'>성분 구성</span>
                            </div>



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

                        <hr className='allingredientbar'/>


                        {/* 전체 성분 */}
                        <div className='allingredient mt-8 px-20'>
                            <span>전체 성분 (들어올값)개</span>
                        </div>

                        <div className= 'caution mt-8 px-20'>
                            <div className='flex gap-x-8'>
                            <img src={caution} alt="caution"/>
                            <span className = 'cautiontext hds-text-body-medium text-gray-secondary'>
                                20가지 주의성분
                                </span>
                                <div className='ingredientbetween'>
                                    <span className='ingredientnumber text-gray-primary'>0</span>
                                    <span className='hds-text-body-medium text-gray-secondary'>개</span>
                                </div>
                            </div>
                        </div>

                        <div className= 'allergy mt-8 px-20'>
                            <div className='flex gap-x-8'>
                            <img src={allergy} alt="allergy"></img>
                            <span className = 'allergytext hds-text-body-medium text-gray-secondary'>
                                알레르기 주의성분
                                </span>
                                <div className='ingredientbetween1'>
                                    <span className='ingredientnumber text-gray-primary'>0</span>
                                    <span className='hds-text-body-medium text-gray-secondary'>개</span>
                                </div>
                            </div>
                        </div>
                        </div>

                        {/* 하단 고정 버튼 쪽*/}

                        {/* 댓글쓰기 쓸때 쓸 별점 */}
                        {/* {setStarMenu(setStarScore) */}

                        <br /><br /><br /><br /><br />
                        <TempSkin/>

                        {/* 회색 텍스트 박스 */}
                        <br /><br /><br /><br /><br />
                        <SkinType/>
                        <br /><br /><br /><br /><br />



                        {/* 페이지업 버튼 */}

                        <ScrollToTop/>


                        <div className='fixed bottom-[0] left-[0] w-full z-10 pointer-events-none z-10'>
                            <div className='max-w-[600px] mx-auto bg-white'>
                            <div className="allreviewbtncontainer1">
    <a className="allreviewbtn1 btn-6" href='https://play.google.com/store/search?q=%EC%83%98%ED%94%8C%EB%A1%9C%EB%93%9C&c=apps&hl=ko'>앱으로 보기</a>
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