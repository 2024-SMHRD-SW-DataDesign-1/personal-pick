import React, { useState } from 'react';
import './InputBox.scss'
import { useNavigate } from 'react-router-dom';
const InputBox = ({func}) => {
    const [value, setValue] = useState("");
    const nav = useNavigate();

    
    

    return (
        <div className='width margin_a' onClick={() =>nav('/search/')}>
            <input className='search_box width' type="text" onChange={(e)=>setValue(e.target.value)}/>
            <button className="btn-1" onClick={()=>{
                

                func(value)
                
                
                nav("/search/"+value);

            }}>
                <span>검색하기</span>
            </button>
        </div>
    );
};

export default InputBox;