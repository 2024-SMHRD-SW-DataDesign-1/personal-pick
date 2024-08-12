import React, { useState } from 'react';
import './InputBox.scss'
import { useNavigate } from 'react-router-dom';
const InputBox = ({inputvalue, setvalue, func}) => {
    const [value, setValue] = useState("");
    const nav = useNavigate();

    
    

    return (
        <div className='width margin_a' onClick={() =>nav('/search/')}>
            <input className='search_box width' type="text" onChange={(e)=>setvalue(e.target.value) } value={inputvalue}/>
            <button className="btn-1" onClick={()=>{
                

                func(inputvalue)
                
                
                nav("/search/"+inputvalue);

            }}>
                <span>검색하기</span>
            </button>
        </div>
    );
};

export default InputBox;