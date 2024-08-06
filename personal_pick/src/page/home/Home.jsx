import React, {useEffect, useState} from "react";

import CustomSwiper from '../../components/customswiper/CustomSwiper'
import { useNavigate } from "react-router-dom";
import InputBox from "../../components/inputbox/InputBox";
import { sendGet, URL } from "../../util/util";
import Category from "../../components/category/Category";
import Itemview from "../../components/itemview/Itemview"


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
        cos_img_src: 'https://img.hwahae.co.kr/products/2107141/2107141_20240715175717.jpg?format=webp&size=600x600',
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
        cos_img_src: 'https://img.hwahae.co.kr/products/1993475/1993475_20240312112855.jpg?format=webp&size=600x600',
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
        cos_img_src: 'https://img.hwahae.co.kr/products/1993475/1993475_20240312112855.jpg?format=webp&size=600x600',
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
        cos_img_src: 'https://img.hwahae.co.kr/products/1832892/1832892_20220801000000.jpg?format=webp&size=600x600',
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
        cos_img_src: "https://img.hwahae.co.kr/products/1897092/1897092_20220801000000.jpg?format=webp&size=600x600",
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


    const [data, setData] = useState([]);

    // [] -> 첫 렌더링에만 실행
    useEffect(()=>{        
        sendGet(URL+'/MainPage', setData);        
    },[])

    // data 값이 변경될 때마다 실행
    // 데이터 로드 확인

    return (
        <div id='wrapper' className='MainView inner'>    

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
            <Category/>
            <Itemview data={itemDic}/>
            {/* sendGet으로 필요한 데이터 세 가지 받아오고 그 데이터 이름을 data라는 키 값으로 보내주면 됨! */}

            <p>내 피부에 꼭 맞는 제품 랭킹</p>
            <Itemview data={itemDic}/>

            <p>나이대별 추천</p>
            <Itemview data={itemDic}/>

  
        </div>
        
    );
};

export default Home;