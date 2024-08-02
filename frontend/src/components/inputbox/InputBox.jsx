import React from 'react';

const InputBox = () => {
    return (
        <div className='flex_col' >
            <input className='search_box' type="text" />
            <button className="btntype"><span>검색하기</span></button>
        </div>
    );
};

export default InputBox;