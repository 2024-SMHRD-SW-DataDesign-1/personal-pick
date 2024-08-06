import React, { useState } from 'react';
import { dummyCategory, showSwal } from '../../util/util';

const titleList = [
    "카테고리 전체", "스킨케어", "클랜징/필링", "마스크/팩", "선케어", 
    "바디", "헤어", "네일", "향수", "기타"
]

function showModal()
{
    let str = "";
    titleList.map((item, idx)=>{
        str += `<div className='subtitle'>${item}</div>`;
    })
    
    showSwal(str)
}

function underView(e, idx)
{
    let result = []
    console.log(e);
    if(e.target.innerHTML.length > titleList[idx].length)
    {
        e.target.innerHTML = titleList[idx];
        return
    }

    switch(idx)
    {
        case 1:
            result = dummyCategory.skinCare
            break;    
        case 2:
            result = dummyCategory.cleanSing
            break;
        case 3:
            result = dummyCategory.maskPack
            break;
        case 4:
            result = dummyCategory.sunCare
            break;
        case 5:
            result = dummyCategory.body
            break;
        case 6:
            result = dummyCategory.hair
            break;
        case 7:
            result = dummyCategory.nail
            break;
        case 8:
            result = dummyCategory.perfume
            break;
        case 9:
            result = dummyCategory.other
            break;
    }
    result.map((item)=>{
        e.target.innerHTML += `<div>${item}</div>`;
    })


    // return result.map((item)=>{
    //     return <div>{item}</div>
    // });
}

const Category = () => {



    return (
        <div>
            <button onClick={() =>showModal()}>
                카테고리 전체
            </button>
            {/* {
                isOpen && 
                <div >
                    {titleList.map((item, idx) => {
                        return <div onClick={(e) => underView(e, idx)}>{item}</div>
                    })}
                </div>
            } */}
        </div>
    );
};

export default Category;