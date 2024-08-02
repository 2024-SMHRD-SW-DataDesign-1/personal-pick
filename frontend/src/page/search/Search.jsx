import React, { useEffect, useState } from 'react'
import InputBox from '../../components/inputbox/InputBox'
import { sendGet, URL } from '../../util/util'

const Search = () => {
    // 내가 찾고 싶은 제품을 검색 했을 때 나타나는 제품리스트
    const [list, setList] = useState([])
    // 내가 찾고 싶은 제품 단어를 검색했을 때 나타나는 최근 검색어
    const [search,setSearch] = useState([])

    const showConsole = (cosdata) => {
        console.log(cosdata);
        setList(cosdata);  // 실시간 적용되게(렌더링)
    }


    useEffect(() => {
        sendGet(URL + "/ppMain", showConsole)
    }, [])











    return (
        <div>
            <div className=''>
                <InputBox></InputBox>
                <h2>최근 검색어</h2>
                {list.map((item) => (
                    <div key={item.idx}>
                        <img src={item.cos_img_src} style={{width:'80px'}}></img>
                        <p>브랜드명 : {item.brand_name} 상품이름 : {item.cos_name}</p>
                        <p>평점 : {item.grade} (평점수 : {item.grade_count})</p>
                        <p>ml/g : {item.vol}ml / 가격 : {item.price}원</p>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search