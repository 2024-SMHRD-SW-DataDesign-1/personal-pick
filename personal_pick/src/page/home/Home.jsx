import React, {useEffect, useState} from "react";

import CustomSwiper from '../../components/customswiper/CustomSwiper'
import { useNavigate } from "react-router-dom";
import InputBox from "../../components/inputbox/InputBox";
import { sendGet, URL } from "../../util/util";


// <div className='MainView inner'>    

// {/* Main */}
// <div className='viewWidth flex_col '>
//     <img src="" alt="팀로고" />
//     <InputBox func={show}/>
// </div>
// <CustomSwiper list={data}/>
// <p>
//     화해 고객들이 직접 선택한 랭킹🎁
// </p>

// </div>
function show(data)
{
    console.log(data)
}
const Home = () => {
    // 페이지 이동 함수
    const nav = useNavigate();


    const [data, setData] = useState([]);

    // [] -> 첫 렌더링에만 실행
    useEffect(()=>{        
        sendGet(URL+'/MainPage', setData);        
    },[])

    // data 값이 변경될 때마다 실행
    // 데이터 로드 확인

    return (
        <div className='MainView inner'>    

            {/* Main */}
            <div className='flex_col width inner'>
                <img src="" alt="팀로고" />
                <InputBox func={show}/>
            </div>
            <div>
                <CustomSwiper list={data}/>
            </div>
            <p>
                화해 고객들이 직접 선택한 랭킹🎁
            </p>

        </div>
        
    );
};

export default Home;