import React, {useEffect, useState} from "react";
import InputBox from '../components/inputbox/InputBox'
import CustomSwiper from '../components/customswiper/CustomSwiper'
import { sendGet, URL } from '../util/axios'
import { useNavigate } from "react-router-dom";
// import '../../public/index.css'
// import '../css/index.css'
function show(data)
{
    console.log(data)
}
const Home = () => {
    // 페이지 이동 함수
    const navigate = useNavigate();
    const home = () => navigate('/');
    const join = () => navigate('/join');
    const login = () => navigate('/login');
    const search = () => navigate('/search');
    const detailinfo = () => navigate('/detailinfo');

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
        <div id="wrapper" className='width'>    
            {/* Header */}
            <header id="header">

                <a onClick={home} className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>

            {/* Menu */}
            <nav id="menu">
                    <ul className="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="landing.html">Landing</a></li>
                        <li><a href="generic.html">Generic</a></li>
                        <li><a href="elements.html">Elements</a></li>
                    </ul>
                    <ul className="actions stacked">
                        <li><a href="#" className="button primary fit">Get Started</a></li>
                        <li><a href="#" className="button fit">Log In</a></li>
                    </ul>
                </nav>

            {/* Main */}
            <div id="main" className='viewWidth flex_col header1'>
                <img src="" alt="팀로고" />
                <InputBox func={show}/>
            </div>
            <CustomSwiper list={data}/>

            <button onClick={join}>Join</button>
            <button onClick={login}>Login</button>
            <button onClick={search}>Search</button>
            <button onClick={detailinfo}>Detailinfo</button>

        </div>
    );
};

export default Home;