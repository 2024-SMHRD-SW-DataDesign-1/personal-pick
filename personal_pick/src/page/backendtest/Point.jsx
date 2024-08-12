import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../util/util'
import axios from 'axios';
import './Mypage.scss'
import { getLoginSession } from '../../util/session'


const Point = (e) => {
    const style_main = {
        backgroundColor: 'gray',
        // padding: '20px',
        // borderRadius: '4px',
    };

    // 페이지 이동 함수
    const navigate = useNavigate();
    // const home = () => navigate('/');
    // const join = () => navigate('/join');
    // const login = () => navigate('/login');
    const mypage = () => navigate('/mypage');
    
    // 로그인 유저 주문/배송 데이터 저장
    const [orderData, setOrderData] = useState([]);
    
    useEffect(() => {
        const LoadUsersData = async () => {
            // session에 로그인 정보가 있으면 해당 유저의 데이터를 가져옴
            if(getLoginSession().username){
                console.log('user_name : ',getLoginSession().username);

                // 1. 주문/배송 데이터
                const responseOrderData = await axios.get(URL + '/TestOrderData',{
                    params : {
                        user_name : getLoginSession().username
                    }
                });
                
                console.log('OrderData : ',responseOrderData.data);
                
                setOrderData(responseOrderData.data)
            }
        };

        // 화면이 첫 랜더링 될 때 함수 실행
        LoadUsersData();
    }, []);
    // console.log('orderData', orderData);
    

    return (
        <div id='order'>
            <div id='wrapper'>
                <div id='head'>
                    <span className="left">
                        <h2 onClick={mypage}>MyPage</h2>
                    </span>
                    <span className='middle'>
                        <p>포인트</p>
                    </span>
                    <span className="right">
                        {/* <img src="https://cdn-icons-png.flaticon.com/512/4991/4991422.png" alt=""
                        title="공고 아이콘 제작자: JessHG - Flaticon"/>  */}

                        {/* <img src="https://cdn-icons-png.flaticon.com/512/6861/6861505.png" alt=""
                        title="쇼핑백 아이콘 제작자: IYAHICON - Flaticon"/>  */}
                    </span>
                </div>

                <div id='main' style={style_main}>
                    <div className='fst'>
                        <img src="https://cdn-icons-png.flaticon.com/512/6063/6063734.png" alt="" />
                        <span className='right'></span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Point;