import React, { useEffect, useState } from 'react';
import { dummyCategory, showSwal } from '../../util/util';
import Up from '../../img/위쪽.png'
import Down from '../../img/아래쪽.png'
import Right from '../../img/오른쪽.png'
import './Category.scss'
const titleList = [
    "카테고리 전체", "스킨케어", "클랜징/필링", "마스크/팩", "선케어", 
    "바디", "헤어", "네일", "향수", "기타"
]

let categoryState = [false, false, false, false, false, false, false, false]

function showModal()
{
    let str = "";
    titleList.map((item, idx)=>{
        str += `<div class='subtitle cursor'>${item} <img class="category_arrow" src="${idx == 0? Up : Right}" alt="팀로고" /></div>`;
    })
    
    showSwal(str, underView)
}

function underView(e, idx)
{
    if(idx == 0)
    {
        return
    }
    // e.stopPropagation() 
    let result = []
    let imgTag = document.getElementsByClassName("category_arrow");

    if(categoryState[idx])
    {
        console.log(e.target)
        console.log(e.target.innerText);
        //e.target.innerText = titleList[idx];
        if(e.target.innerText == "")
        {
        }
        e.target.innerHTML = titleList[idx]
        imgTag[idx].src = Right;
        // e.target.innerHTML = `<img class="category_arrow" src="${idx == 0? Up : Right}" alt="팀로고" />`;
        categoryState[idx] = !categoryState[idx]
        return;
    }
    else
    {
        console.log(2)
        imgTag[idx].src = Down;
        categoryState[idx] = !categoryState[idx]
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
    let tag ='<div class="flex_col flex_wrap">';
    
    result.map((item)=>{
        tag += `<div class="category_item">${item}</div>`;
    })

    tag += '</div>';
    
    e.target.innerHTML += tag;


    let itemTag = document.getElementsByClassName("category_item");
    for(let i=0; i< itemTag.length; i++)
    {
        itemTag[i].addEventListener("click", (e)=>{
            e.stopPropagation() // 부모요소의 이벤트 차단
            console.log(1);
        })
    }

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