import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../util/util'
import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../redux/type/typefunc';
import personalReducer from '../../redux/reducer/reducer';
// import * as types from '../../redux/type/types'

const Login = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    // 에러 메세지 저장
    const [error, setError] = useState('');
    // const [userData, setUserData] = useState();

    // 상태 저장
    const state = useSelector(state => state);
    
    // 상태 변경
    const dispatch = useDispatch();
    
    // 첫 랜더링,state 값이 변경될 때만 실행
    // 로그인 상태 -> isUser
    // 로그인 유저 데이터 -> userData
    useEffect(() => {
        console.log('login : ',state.isUser);
        console.log('loginData : ',state.userData);
    }, [state]);
    

    // 로그인 함수
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // URL + /login 경로로 id, pw를 담아서 요청을 보냄
            const response = await axios.post(URL + '/LoginPage', {
                id,
                pw
            });
            const responseData = response.data[0]
            // 반환 데이터 확인
            console.log('responseData : ',responseData);

            // 반환 데이터가 있으면 -> 로그인 성공하면
            if (responseData) {

                // setUserData(responseData);
                // state 상태 업데이트
                dispatch(login(responseData))
                console.log('로그인 성공');
                setError('');
            } else {
                setError('ID, PW가 일치하지 않습니다');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred');
        }
    };


    return (
        state.isUser?
        (<div id='login'>
            <div id='wrapper'>
                <div id='main'>
                    <form className='table' onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <div>
                            <input
                                className='textbox'
                                placeholder='Id'
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
                                type="password"
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit">로그인</button>
                            <button onClick={home}>뒤로가기</button>
                        </div>
                            {/* 회원가입 실패 시 출력 */}
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            
                    </form>
                </div>
            </div>
        </div>):
        (<div id='login'>
            <div id='wrapper'>
                <div id='main'>
                    <form className='table' onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <div>
                            <input
                                className='textbox'
                                placeholder='Id'
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
                                type="password"
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit">로그인</button>
                            <button onClick={home}>뒤로가기</button>
                        </div>
                            {/* 회원가입 실패 시 출력 */}
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            
                    </form>
                </div>
            </div>
        </div>)

    );
};

export default Login;