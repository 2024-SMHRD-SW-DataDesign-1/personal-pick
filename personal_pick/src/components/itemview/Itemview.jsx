import React from 'react'
import './Itemview.scss'
import Star from '../../img/별.png'

const Itemveiw = () => {

        let itemDic = [
                {
                        idx: 1,
                        brand_name: '브랜드이름1',
                        cos_name: '코스네임일',
                        cos_img_src: 'https://img.hwahae.co.kr/products/2107141/2107141_20240715175717.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '1'
                },
                {
                        idx: 2,
                        brand_name: '브랜드이름2',
                        cos_name: '코스네임이',
                        cos_img_src: 'https://img.hwahae.co.kr/products/1993475/1993475_20240312112855.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                },
                {
                        idx: 3,
                        brand_name: '브랜드이름3',
                        cos_name: '코스네임삼',
                        cos_img_src: 'https://img.hwahae.co.kr/products/1993475/1993475_20240312112855.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                },
                {
                        idx: 4,
                        brand_name: '브랜드이름4',
                        cos_name: '코스네임사',
                        cos_img_src: 'https://img.hwahae.co.kr/products/1832892/1832892_20220801000000.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                },
                {
                        idx: 5,
                        brand_name: '브랜드이름5',
                        cos_name: '코스네임오',
                        cos_img_src: "https://img.hwahae.co.kr/products/1897092/1897092_20220801000000.jpg?format=webp&size=600x600",
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                },
                {
                        idx: 6,
                        brand_name: '브랜드이름6',
                        cos_name: '코스네임육',
                        cos_img_src: 'https://img.hwahae.co.kr/products/2058047/2058047_20230808102719.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                }
        ]


        // 데이터 6개만 받아올 예정!


        return (
                <div className='flex_row alldiv'>
                        {itemDic.map((item) => (
                                <div className='itemBox flex_col' key={item.idx}>
                                        <img src={item.cos_img_src} alt="" style={{ width: 80, height: 80 }} className='rank_img' />
                                        <br />
                                        <div>
                                                <div className='rank_brand_name'>
                                                        {item.brand_name}
                                                </div>
                                                <div className='rank_cos_name'><span>&nbsp;{item.cos_name}</span></div>


                                                <div className='rank_grade'>
                                                        <img className='star' src={Star} alt="" />
                                                        <span className='rank_cos_grade'>&nbsp;{item.grade}</span>
                                                        <span className='rank_cos_grade_cnt'>   {"(" + item.grade_count + ")"}</span></div>

                                                <div className='rank_price' >
                                                        <span className='rank_text'>정가&nbsp;</span>
                                                        <span className='rank_cos_price'>{item.price + "원"}</span> 
                                                        <span className='rank_vol'>{"/" + item.vol + "ml"}</span>
                                                        </div>
                                                < br />
                                        </div>

                                </div>

                        ))}
                </div>
        )
}

export default Itemveiw