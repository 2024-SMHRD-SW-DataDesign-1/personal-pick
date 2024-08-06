import React, { useState } from 'react';
import './InputBox.scss'
import { useNavigate } from 'react-router-dom';
const InputBox = ({func =null}) => {
    const [value, setValue] = useState("");
    const nav = useNavigate();
    
    

    return (
        <div className='flex_col ' >
            <input className='search_box' type="text" onChange={(e)=>setValue(e.target.value)}/>
            <button className="btntype" onClick={()=>{
                
                if (func=null)
                {
                    func(value)
                }
                
                nav("/search/"+value);

            }}>
                <span>검색하기</span>
            </button>
        </div>
    );
};

export default InputBox;