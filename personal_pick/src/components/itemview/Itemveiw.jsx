import React from 'react'

const Itemveiw = () => {

    let itemDic = [
        {idx:1,
            brand_name:'일번',
            cos_name:'코스네임일',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'1' }, 
                    {idx:2,
            brand_name:'이번',
            cos_name:'코스네임이',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' },
                    {idx:3,
            brand_name:'삼번',
            cos_name:'코스네임삼',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' },
                    {idx:4,
            brand_name:'사번',
            cos_name:'코스네임사',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' }, 
                    {idx:5,
            brand_name:'오번',
            cos_name:'코스네임오',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' },
                    {idx:6,
            brand_name:'육번',
            cos_name:'코스네임육',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' },
                    {idx:7,
            brand_name:'칠번',
            cos_name:'코스네임칠',
            cos_img_src:'ㅇ',
            grade:4.74,
            grade_count: 2456,
            price: 4000,
            vol: 40,
            ranking:'34' },
            
    ]




  return (
    <div>
        {itemDic.map((item) => (
            <div key={item.idx}>
                <p> {item.brand_name} {item.cos_name}</p>
                <p>{item.grade} ({item.grade_count})</p>
                <p>정가 {item.price}원 / {item.vol}ml</p>
                
            </div>

        ))}
    </div>
  )
}

export default Itemveiw