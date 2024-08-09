import React, { useState } from 'react';
import './InputBox.scss'
import { useNavigate } from 'react-router-dom';
const InputBox = ({func}) => {
    const [value, setValue] = useState("");
    const nav = useNavigate();

    
    

    return (
        <div className='width' onClick={() =>nav('/search/')}>
            <input className='float_l search_box width' type="text" onChange={(e)=>setValue(e.target.value)}/>
            <button className="btntype " onClick={()=>{
                

                func(value)
                
                
                nav("/search/"+value);

            }}>
                <span>검색하기</span>
            </button>
        </div>
    );
};

export default InputBox;