import React, { useState } from 'react';
import axios from 'axios'
import { URL } from '../../util/util'
import { useNavigate } from 'react-router-dom';

import './Mypage.css'

const Join = () => {
    // // 페이지 이동 함수
    // const navigate = useNavigate();
    // const home = () => navigate('/');

    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    // const [id, setId] = useState('');
    // const [pw, setPw] = useState('');
    // const [message, setMessage] = useState('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post(URL + "/join", {
    //             name,
    //             nickname,
    //             id,
    //             pw
    //         });
    //         setMessage(response.data.message);

    //         if (response.status === 201) {
    //             // 회원가입 성공 시 홈 페이지로 이동
    //             alert('회원가입 성공');
    //             navigate('/');
    //         }

    //     } catch (error) {
    //     if (error.response) {
    //         // 서버가 응답했지만 오류 응답 코드가 반환된 경우
    //         setMessage('An error occurred: ' + error.response.data.error);
    //     } else if (error.request) {
    //         // 요청이 만들어졌지만 응답을 받지 못한 경우
    //         setMessage('No response received from the server.');
    //     } else {
    //         // 요청을 만들 때 오류가 발생한 경우
    //         setMessage('Error: ' + error.message);
    //     }
    // }
    // };

    return (
        // <div id='header'>


        // </div>

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
                        <h1>닉네임</h1>
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

    );
};

export default Join;