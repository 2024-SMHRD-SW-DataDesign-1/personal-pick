import React, { useEffect, useState } from 'react'
import {sendGet , URL } from '../../util/util'
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

const Detailinfo = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

    const [data , setData] = useState([]);

    const {idx} = useParams()

    useEffect(()=>{
         sendGet(URL + "/DetailPage?idx="+idx , setData);
    },[]);

    
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
                    <button className='goback' type="button" onClick={()=> navigate('/')}><span><img src={goback} width={33} height={30}></img></span></button>
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
                        <img src = {star1} className='star' width={18}/>{item.grade}({item.grade_count})
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

                        {/*ai 리뷰 */}
                        <span className='aireview'><span className='ai'>AI</span>가 분석한 리뷰</span>
                        <div className='reviewinfo'>
                        <div className='likereview'>
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

                        <div className='dislike'>
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
                        <div className='accountimg'>
                            <img src = {account} width={50}/>
                            </div>
                        <div className='accountinfo'>
                            <span className='nickname'>닉네임</span>
                            <span className='skintype'>20대/건성/아토피/여드름</span>
                            </div>
                        <div className='accountstar'>
                            <StarRating/>
                            </div>
                        <div className='accountdate'>
                            <span>날짜</span>
                            </div>
                        
                        <div className='goodcommentmain'>
                            <img src = {smile} width={30} height={30}></img>
                            <span className='goodcomment'>좋은말</span>
                            </div>

                        <div className='sosocommentmain'>
                            <img src = {notsmile} width={25} height={25}></img>
                            <span className='sosocomment'>아쉬운말</span>
                            </div>

                        <hr className='bar3'/>

                        <div className='accountimg1'>
                            <img src = {account} width={50}/>
                            </div>
                        <div className='accountinfo1'>
                            <span className='nickname1'>닉네임</span>
                            <span className='skintype1'>20대/건성/아토피/여드름</span>
                            </div>
                        <div className='accountstar1'>
                            <StarRating/>
                            </div>
                        <div className='accountdate1'>
                            <span>날짜</span>
                            </div>
                        
                        <div className='goodcommentmain1'>
                            <img src = {smile} width={30} height={30}></img>
                            <span className='goodcomment1'>좋은말</span>
                            </div>

                        <div className='sosocommentmain1'>
                            <img src = {notsmile} width={25} height={25}></img>
                            <span className='sosocomment1'>아쉬운말</span>
                            </div>
                        </div>


                        <div className='ingredientmain'>
                            <span>성분</span>
                            </div>

                        <div className='ingredientdropbox'>
                        <input id="dropdown" type="checkbox" />
                        <label className="dropdownLabel" for="dropdown">
                        <div>화장품 성분보기</div>
                        <FaAngleDown className="caretIcon" />
                        </label>
                        <div className="contentcategory">
                            <ul>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                                <li>Option 4</li>
                            </ul>
                        </div>
                        </div>


                        {/* <div class = "up-btn">
                            <ScrollToTopButton/>
                        </div> */}





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