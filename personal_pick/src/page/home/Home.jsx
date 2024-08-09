import React, {useEffect, useState} from "react";

import CustomSwiper from '../../components/customswiper/CustomSwiper'
import { useNavigate } from "react-router-dom";
import InputBox from "../../components/inputbox/InputBox";
import { getDay, sendGet, URL } from "../../util/util";
import Category from "../../components/category/Category";
import Itemview from "../../components/itemview/Itemview"
import './Home.scss'
import Right from '../../img/오른쪽.png'
import Logo from '../../img/로고.png'

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

// 데이터 6개만 받아올 예정!
let itemDic = [
    {
        idx: 1,
        brand_name: '브랜드이름1',
        cos_name: '코스네임일',
        // cos_name: '여기이름길면줄바꿈되게해야함',
        cos_img_src: 'https://img.hwahae.co.kr/products/2008579/2008579_20230522181131.jpg?format=webp&size=600x600',
        grade: 4.74,
        grade_count: 2456,
        price: 4000,
        vol: 40,
        ranking: '1'
    },
    {
        idx: 2,
        brand_name: '브랜드이름2',
        cos_name: '코스네임이',
        cos_img_src: 'https://img.hwahae.co.kr/products/1942105/1942105_20230216173808.jpg?format=webp&size=600x600',
        grade: 4.74,
        grade_count: 2456,
        price: 4000,
        vol: 40,
        ranking: '34'
    },
    {
        idx: 3,
        brand_name: '브랜드이름3',
        cos_name: '코스네임삼',
        cos_img_src: '	https://img.hwahae.co.kr/products/1914381/1914381_20230202180621.jpg?format=webp&size=600x600',
        grade: 4.74,
        grade_count: 2456,
        price: 4000,
        vol: 40,
        ranking: '34'
    },
    {
        idx: 4,
        brand_name: '브랜드이름4',
        cos_name: '코스네임사',
        cos_img_src: 'https://img.hwahae.co.kr/products/1872716/1872716_20240227094302.jpg?format=webp&size=600x600',
        grade: 4.74,
        grade_count: 2456,
        price: 4000,
        vol: 40,
        ranking: '34'
    },
    {
        idx: 5,
        brand_name: '브랜드이름5',
        cos_name: '코스네임오',
        cos_img_src: "https://img.hwahae.co.kr/products/1858863/1858863_20220801000000.jpg?format=webp&size=600x600",
        grade: 4.74,
        grade_count: 2456,
        price: 4000,
        vol: 40,
        ranking: '34'
    },
    {
        idx: 6,
        brand_name: '브랜드이름6',
        cos_name: '코스네임육',
        cos_img_src: 'https://img.hwahae.co.kr/products/1944992/1944992_20230602135720.jpg?format=webp&size=600x600',
        grade: 4.74,
        grade_count: 2456,
        price: 4000,
        vol: 40,
        ranking: '34'
    },
    {
        idx: 7,
        brand_name: '브랜드이름4',
        cos_name: '코스네임사',
        cos_img_src: 'https://img.hwahae.co.kr/products/1832892/1832892_20220801000000.jpg?format=webp&size=600x600',
        grade: 4.74,
        grade_count: 2456,
        price: 4000,
        vol: 40,
        ranking: '34'
    },
    {
        idx: 8,
        brand_name: '브랜드이름5',
        cos_name: '코스네임오',
        cos_img_src: "https://img.hwahae.co.kr/products/1897092/1897092_20220801000000.jpg?format=webp&size=600x600",
        grade: 4.74,
        grade_count: 2456,
        price: 4000,
        vol: 40,
        ranking: '34'
    },
    {
        idx: 9,
        brand_name: '브랜드이름6',
        cos_name: '코스네임육',
        cos_img_src: 'https://img.hwahae.co.kr/products/2058047/2058047_20230808102719.jpg?format=webp&size=600x600',
        grade: 4.74,
        grade_count: 2456,
        price: 4000,
        vol: 40,
        ranking: '34'
    }
]

function show(data)
{
    console.log(data)
}

const Home = () => {
    // 페이지 이동 함수
    const nav = useNavigate();

    const [categoryDic, setCategoryDic] = useState({
        list : [],
        maintitle : "카테고리 전체",
        subtitle : ""

    });
    const [data, setData] = useState([]);
    const [userChoiceRank, setUserChoiceRank] = useState([...itemDic])

    // [] -> 첫 렌더링에만 실행
    useEffect(()=>{        
        sendGet(URL+'/MainPage', setData);        
    },[])

    useEffect(()=>{        
        sendGet(URL + '/CategorySel?category='+categoryDic.subtitle, setUserChoiceRank)
    },[categoryDic])

    // data 값이 변경될 때마다 실행
    // 데이터 로드 확인

    // 오늘날짜
    let today = new Date()
    let testTag = document.getElementById('wrapper')
    console.log(testTag)
    return (
        <div id='wrapper' className="inner" >    
        {/* // <div id='wrapper' >     */}
        
            {/* Main */}
            <img src={Logo} className="logoimg" alt="팀로고" />
            <div className='flex_col width' >
                <InputBox func={show} />
            </div>

            <div className="basic-text">{today.getMonth()+"월 " + today.getDate() + "일 " + getDay(today.getDay())} <span> 조회수🎁 </span> 급상승<img className="category_arrow" src={Right} alt="" /> </div> 
            

            <div>
                <CustomSwiper list={data}/>
            </div>
            <div className="basic-text">화해 고객들이 직접 <span> 선택한 랭킹🎁 </span> <img className="category_arrow" src={Right} alt="" /> </div> 
            
            <Category dic ={categoryDic} setDic={setCategoryDic}/>
            <Itemview data={userChoiceRank}/>

            <div className="home_page_btn">
                카테고리 전체보기
                <img className="star" src={Right} alt="" />
            </div>
            
            {/* sendGet으로 필요한 데이터 세 가지 받아오고 그 데이터 이름을 data라는 키 값으로 보내주면 됨! */}


            <h2 className="basic-text">내 피부에 꼭 맞는 제품 랭킹</h2>
            <Itemview data={userChoiceRank}/>

            <div className="home_page_btn">
                10대 전체보기
                <img className="star" src={Right} alt="" />
            </div>
            <h2 className="basic-text">나이대별 추천</h2>
            <Itemview data={userChoiceRank}/>
            <div className="home_page_btn">
                브랜드 전체보기
                <img className="star" src={Right} alt="" />
            </div>
  
        </div>
        
    );
};

export default Home;