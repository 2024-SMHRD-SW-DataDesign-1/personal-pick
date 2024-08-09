import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { URL } from '../../util/util'
import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { useSelector, useDispatch } from 'react-redux'

const Join = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

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
    
    // 회원가입에 필요한 변수들
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [nm, setNm] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');

    const [skinType, setSkinType] = useState('');
    // 회원가입 실패 시 출력할 메세지 저장 변수
    const [message, setMessage] = useState('');

    const handleSTChange = (event) => {
        // 아래 체크박스에서 선택한 피부 타입으로 ageGroup을 변경하는 함수
        const { id } = event.target;
        const temp = id === 'box1' ? 'dry' :
                     id === 'box2' ? 'oil' :
                     id === 'box3' ? 'comb' : '';
        setSkinType(temp);
    };
    useEffect(() => {
        // 변경된 피부 타입 출력(첫 랜더링, skinType이 변경될 때)
        console.log('skinType : ',skinType);
    }, [skinType]);

    const handleSex = (event) => {
        // 아래 체크박스에서 선택한 연령대로 ageGroup을 변경하는 함수
        const { id } = event.target;
        const temp = id === 'box1' ? '남' :
                     id === 'box2' ? '여' : '';
        setSex(temp);
    };
    useEffect(() => {
        // 변경된 연령대 출력(첫 랜더링, ageGroup이 변경될 때)
        console.log('성별 : ',sex);
    }, [sex]);




    // 회원가입 버튼 클릭 시 실행
    const handleSubmit = async (event) => {
        // console창에 보낼 데이터 출력
        console.log('data : ',{
            user_id: id,
            user_pw: pw,
            user_name: name,
            user_nm: nm,
            user_email : email,
            user_age : age,
            user_sex : sex
        });
        
        event.preventDefault();
        try {
            // 데이터 전송
            // get : select
            // post : insert, update, delete
            const response = await axios.post(URL + "/TestJoin", {
                user_id: id,
                user_pw: pw,
                user_name: name,
                user_nm: nm,
                user_email : email,
                user_age : age,
                user_sex : sex
            });
            // 응답받은 데이터 출력 : 201(성공) or 500(실패)
            console.log('response.data : ',response.data);
            if (response.data === 201) {
                // 회원가입 성공 시 메시지 출력 및 홈 페이지로 이동
                alert('회원가입 성공');
                // navigate('/');
            }else{
                setMessage("회원가입 실패");
            }
        } catch (error) {
        if (error.response) {
            // 서버가 응답했지만 오류 응답 코드가 반환된 경우
            setMessage('An error occurred: ' + error.response.data.error);
        } else if (error.request) {
            // 요청이 만들어졌지만 응답을 받지 못한 경우
            setMessage('No response received from the server.');
        } else {
            // 요청을 만들 때 오류가 발생한 경우
            setMessage('Error: ' + error.message);
        }
    }
    };

    return (
        <div id='join'>
            <div id='wrapper'>
                <div id='head'>
                    <h1>Personal Pick</h1>
                </div>
                <div id='main'>
                    <form className='join_form' onSubmit={handleSubmit}>
                        
            
                        <div>
                            <input
                                className='textbox'
                                placeholder='ID'
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <input
                                className='textbox'
                                placeholder='Password'
                                type="text"
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <input
                                className='textbox'
                                placeholder='이름'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <input
                                className='textbox'
                                placeholder='닉네임'
                                type="text"
                                value={nm}
                                onChange={(e) => setNm(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <input
                                className='textbox'
                                placeholder='이메일'
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <input
                                className='textbox'
                                placeholder='나이'
                                type="text"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>

                        <div className="checkbox">
                        <div className='left'>
                            <p>성별</p>
                            <input
                                type="checkbox"
                                id="box1"
                                checked={sex === '남'}
                                onChange={handleSex}
                            />
                            <label htmlFor="box1">남</label><br />

                            <input
                                type="checkbox"
                                id="box2"
                                checked={sex === '여'}
                                onChange={handleSex}
                            />
                            <label htmlFor="box2">여</label><br />
                            </div>
                            
                            <div className='right'>
                            <p>피부 타입</p>
                            <input
                                type="checkbox"
                                id="box1"
                                checked={skinType === 'dry'}
                                onChange={handleSTChange}
                            />
                            <label htmlFor="checkbox1">건성</label><br />

                            <input
                                type="checkbox"
                                id="box2"
                                checked={skinType === 'oil'}
                                onChange={handleSTChange}
                            />
                            <label htmlFor="box2">지성</label><br />

                            <input
                                type="checkbox"
                                id="box3"
                                checked={skinType === 'comb'}
                                onChange={handleSTChange}
                            />
                            <label htmlFor="box3">복합성</label><br />
                            </div>
                        </div>


                        <button type="submit">회원가입</button>
                        <button onClick={home}>뒤로가기</button>
                            {/* 회원가입 실패 시 message 출력 */}
                        <p style={{ color: 'red' }}>{message}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;