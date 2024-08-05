import React from 'react'
import './Itemview.scss'

const Itemveiw = () => {

    let itemDic = [
        {idx:1,
            brand_name:'브랜드이름1',
            cos_name:'코스네임일',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'1' }, 
                    {idx:2,
            brand_name:'브랜드이름2',
            cos_name:'코스네임이',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' },
                    {idx:3,
            brand_name:'브랜드이름3',
            cos_name:'코스네임삼',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' },
                    {idx:4,
            brand_name:'브랜드이름4',
            cos_name:'코스네임사',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' }, 
                    {idx:5,
            brand_name:'브랜드이름5',
            cos_name:'코스네임오',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' },
                    {idx:6,
            brand_name:'브랜드이름6',
            cos_name:'코스네임육',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' }
    ]


    // 데이터 6개만 받아올 예정!


  return (
    <div className='flex_row alldiv'>
        {itemDic.map((item) => (
            <div className='itemBox' key={item.idx}>
                <br/>
                <p> {item.brand_name} {item.cos_name}</p>
                <p>{item.grade} ({item.grade_count})</p>
                <p>정가 {item.price}원 / {item.vol}ml</p>
            </div>

        ))}
    </div>
  )
}

export default Itemveiw