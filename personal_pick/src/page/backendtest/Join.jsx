import React, { useState } from 'react';
import axios from 'axios'
import { URL } from '../../util/util'
import { useNavigate } from 'react-router-dom';
import './Login.scss'

const Join = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        console.log({
            name: name,
            nickname: nickname,
            id: id,
            pw: pw
        });
        
        event.preventDefault();
        try {
            const response = await axios.post(URL + "/JoinPage", {
                name: name,
                nickname: nickname,
                id: id,
                pw: pw
            });

            if (response.data === 201) {
                // 회원가입 성공 시 홈 페이지로 이동
                alert('회원가입 성공');
                navigate('/');
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
                <div id='main'>
                    <form className='table' onSubmit={handleSubmit}>
                        <h1>회원가입</h1>
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
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                required
                            />
                        </div>
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