import React, {useEffect, useState} from "react";


import CustomSwiper from '../../components/customswiper/CustomSwiper'
import { useNavigate } from "react-router-dom";
import InputBox from "../../components/inputbox/InputBox";
import { sendGet, URL } from "../../util/util";
// import '../../public/index.css'
// import '../css/index.css'
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
        console.log(1111);
        
        sendGet(URL+'/detailPage', setData);
        console.log(5555);
        
    },[])

    // data 값이 변경될 때마다 실행
    // 데이터 로드 확인
    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div className='width'>    


            {/* Main */}
            <div id="main" className='viewWidth flex_col header1'>
                <img src="" alt="팀로고" />
                <InputBox func={show}/>
            </div>
            <CustomSwiper list={data}/>


        </div>
    );
};

export default Home;