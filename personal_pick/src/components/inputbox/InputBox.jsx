import React, { useState } from 'react';
import './InputBox.scss'
import { useNavigate } from 'react-router-dom';
import InputBoxSearch from '../../img/돋보기.png';

const InputBox = ({inputvalue, setvalue, func}) => {
    const [value, setValue] = useState("");
    const nav = useNavigate();

    
    

    return (
        <div className='width margin_a' onClick={() =>nav('/search/')}>
            <input className='search_box width' type="text" onChange={(e)=>setvalue(e.target.value) } value={inputvalue} placeholder="검색어를 입력해 주세요"/>
            <button className="btn-1" onClick={()=>{
                

                func(inputvalue)
                
                
                nav("/search/"+inputvalue);

            }}>
                <span><img className='inputboxSearch' src={InputBoxSearch}></img></span>
            </button>
        </div>
    );
};

export default InputBox;