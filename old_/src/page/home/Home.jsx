import React, { useEffect, useState } from 'react';
import InputBox from '../../components/inputbox/InputBox';
import CustomSwiper from '../../components/customswiper/CustomSwiper';
import { sendGet, URL } from '../../util/util';


function show(data)
{
    console.log(data)
}
const Home = () => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        sendGet(URL+'/DetailPage', setData);
    },[])
    
    
    return (
        <div className='width'>
            <div className='viewWidth flex_col header1'>
                <img src="" alt="팀로고" />
                <InputBox func={show}/>
            </div>
            <CustomSwiper list={data}/>
        </div>
    );
};

export default Home;