import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { URL } from '../../util/util'
import { useNavigate } from 'react-router-dom';

import './Mypage.scss'
import { useDispatch, useSelector } from 'react-redux';

const Join = () => {

    // redux
    // 상태 저장
    const state = useSelector(state => state);
    // 상태 변경
    const dispatch = useDispatch();
    // 상태 출력
    useEffect(() => {
        console.log('login : ',state.isUser);
        console.log('userData : ',state.userData);
    }, [state]);

    return (
        
        <div id='mypage'>
        <div id="Mypage">
        <div id='wrapper'>
            <div id='head'>
                <span className="left">마이페이지</span>
                <span className="right">
                    <img src="https://cdn-icons-png.flaticon.com/512/4991/4991422.png" alt=""
                    title="공고 아이콘 제작자: JessHG - Flaticon"/> 

                    <img src="https://cdn-icons-png.flaticon.com/512/6861/6861505.png" alt=""
                    title="쇼핑백 아이콘 제작자: IYAHICON - Flaticon"/> 
                </span>
            </div>

            <div id='main'>
                <div className='fst'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6063/6063734.png" alt="" />
                    <span className='middle'>
                        <h1>{state.userData.nickname}</h1>
                        <p>연령대 피부타입</p>
                    </span>
                    <span className='right'>
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54366.png" alt="" />
                    </span>
                </div>

                <div className='scd'>
                    <span className='left'>
                        <h1>주문/배송</h1>
                        <p>0</p>
                    </span>
                    <span className='middle'>
                        <h1>포인트</h1>
                        <p>0 P</p>
                    </span>
                    <span className='right'>
                        <h1>쿠폰</h1>
                        <p>0</p>
                    </span>
                </div>

                <div className='text'>
                    <h1>리뷰</h1>
                    <p>사용한 제품 리뷰 쓰기</p>
                    <p>화해 구매 제품 리뷰 쓰기</p>
                    <p>내가 쓴 리뷰</p>
                </div>

                <div className='ad'>
                    <h1>AD</h1>
                </div>

                <div className='text'>
                    <h1>나의 관심</h1>
                    <p>최근 본 제품</p>
                    <img src="https://img.hwahae.co.kr/products/2021890/2021890_20230127164932.jpg?format=webp&size=600x600" alt="" />
                    <br />
                    <p>찜한 상품</p>
                    <p>즐겨찾는 제품</p>
                    <p>즐겨찾는 브랜드</p>
                    <p>즐겨찾는 성분</p>

                </div>

                <div className='text'>
                    <h1>소식/스크랩</h1>
                    <p>소식받는 사용자</p>
                    <p>소식받는 에디터</p>
                    <p>스크랩한 뷰티ON/리뷰</p>
                </div>

                <div className='text'>
                    <h1>이벤트</h1>
                    <p>이벤트 신청/당첨 내역</p>
                    <p>찜한 이벤트</p>
                    <p>이벤트 배송지 수정</p>
                </div>

                <div className='ad2'>
                    <p>출석체크, 친구초대 등 다양한 이벤트는</p>
                    <p>혜택 앱을 통해 참여할 수 있어요</p>
                </div>

                <div className='last'>
                    <h1>고객센터</h1>
                    <p>제품 등록 요청</p>
                    <p>등록 요청 제품</p>
                    <p>FAQ</p>
                    <p>1:1 문의</p>
                    <p>설정</p>
                </div>

            </div>
            <div id='foot'>
                <span className='icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/8304/8304806.png" alt="" />
                    <h1>home</h1>
                </span>
                <span className='icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/636/636600.png" alt="" />
                </span>
                <span className='icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/5058/5058903.png" alt="" />
                </span>
                <span className='icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/5264/5264565.png" alt="" />
                </span>
                <span className='icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/2824/2824318.png" alt="" />
                </span>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Join;