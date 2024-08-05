import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../../util/util'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // URL + /login 경로로 id, pw를 담아서 요청을 보냄
            const response = await axios.post(URL + '/login', {
                id,
                pw
            });

            // 요청 성공 시("success": True)
            if (response.data.success) {
                setIsLoggedIn(true);
                setError('');
            } else {
                setError('ID, PW가 일치하지 않습니다');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred');
        }
    };

    // 로그인 성공 시
    // 알림 뜨고 Home.jsx로 이동
    if (isLoggedIn) {
        alert('회원가입 성공');
        navigate('/');
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>ID : </label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>PW : </label>
                    <input
                        type="password"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">로그인</button>
                <button onClick={home}>뒤로가기</button>
                {/* 회원가입 실패 시 출력 */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;