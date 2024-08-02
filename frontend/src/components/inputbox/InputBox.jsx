import React, { useState } from 'react';

const InputBox = ({func}) => {
    const [value, setValue] = useState("");
    return (
        <div className='flex_col ' >
            <input className='search_box' type="text" onChange={(e)=>setValue(e.target.value)}/>
            <button className="btntype" onClick={()=>func(value)}>
                <span>검색하기</span>
            </button>
        </div>
    );
};

export default InputBox;