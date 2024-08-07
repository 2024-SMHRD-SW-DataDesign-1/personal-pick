import React, { useEffect, useState } from 'react';
import { dummyCategory, modalClose, sendPost, showSwal, URL } from '../../util/util';
import Up from '../../img/위쪽.png'
import Down from '../../img/아래쪽.png'
import Right from '../../img/오른쪽.png'
import './Category.scss'
const titleList = [
    "카테고리 전체", "스킨케어", "클랜징/필링", "마스크/팩", "선케어", 
    "바디", "헤어", "네일", "향수", "기타"
]

let categoryState = [false, false, false, false, false, false, false, false]

function getData(value){
    let result = null;
    switch(value)
    {
        case titleList[1]:
            result = dummyCategory.skinCare
            break;    
        case titleList[2]:
            result = dummyCategory.cleanSing
            break;
        case titleList[3]:
            result = dummyCategory.maskPack
            break;
        case titleList[4]:
            result = dummyCategory.sunCare
            break;
        case titleList[5]:
            result = dummyCategory.body
            break;
        case titleList[6]:
            result = dummyCategory.hair
            break;
        case titleList[7]:
            result = dummyCategory.nail
            break;
        case titleList[8]:
            result = dummyCategory.perfume
            break;
        case titleList[9]:
            result = dummyCategory.other
            break;
    }
    return result
}


const Category = ({categoryList,setCategoryList,categoryTitle,setCategoryTitle}) => {

    
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
        let titleTag = document.getElementsByClassName("subtitle");
        if(idx == 0)
        {
            setCategoryList([])
            setCategoryTitle(titleList[0])
            modalClose()
            return
        }
        // e.stopPropagation() 
        let result = getData(titleList[idx])
        let imgTag = document.getElementsByClassName("category_arrow");
    
        if(categoryState[idx])
        {
            titleTag[idx].innerHTML =titleList[idx] + `<img class="category_arrow" src="${idx == 0? Up : Right}" alt="팀로고" />`;
            categoryState[idx] = !categoryState[idx]
            return;
        }
        else
        {
            imgTag[idx].src = Down;
            categoryState[idx] = !categoryState[idx]
        }
    
        let tag ='<div class="flex_col flex_wrap">';
        result.map((item)=>{
            tag += `<div class="category_item">${item}</div>`;
        })
        tag += '</div>';
        
        titleTag[idx].innerHTML += tag;
    
    
        let itemTag = document.getElementsByClassName("category_item");
        for(let i=0; i< itemTag.length; i++)
        {
            itemTag[i].addEventListener("click", (e)=>{
                e.stopPropagation() // 부모요소의 이벤트 차단
                // 이벤트 요소의 부모태그의 스트링값을 찾아서 맞는 데이터 리턴
                let title = e.target.parentNode.parentNode.innerText.split("\n")[0];
                let list = getData(title);                
                setCategoryTitle(title);
                setCategoryList(list);
                modalClose()
            })
        }
    
    }

    useEffect(()=>{
        sendPost(URL+ "/SearchObject", null, ['r','a','s','c','v'])
    },[])
    return (
        <div>
            <button onClick={() =>showModal()}>
                {categoryTitle}
            </button>
            {
                categoryList.length > 0 && 
                categoryList.map((item, idx)=>{
                    return <button key={idx}>{item}</button>
                })
            }
        </div>
    );
};

export default Category;