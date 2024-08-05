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
                <span class="left">마이페이지</span>
                <span class="right">
                    <img src="https://cdn-icons-png.flaticon.com/512/4991/4991422.png" alt=""
                    title="공고 아이콘 제작자: JessHG - Flaticon"/> 

                    <img src="https://cdn-icons-png.flaticon.com/512/6861/6861505.png" alt=""
                    title="쇼핑백 아이콘 제작자: IYAHICON - Flaticon"/> 
                </span>
            </div>

            <div id='main'>
                <div className='fst'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6063/6063734.png" alt="" />
                    <span className='center'>
                        <h1>닉네임</h1>
                        <p>연령대 피부타입</p>
                    </span>

                </div>
                
            </div>
            <div id='foot'>
                3
            </div>
        </div>

    );
};

export default Join;