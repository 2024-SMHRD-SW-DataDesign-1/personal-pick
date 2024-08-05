import React, { useEffect, useState } from 'react'
import InputBox from '../../components/inputbox/InputBox'
import { sendGet, URL } from '../../util/util'
import './Search.scss'

const Search = () => {
    // 내가 찾고 싶은 제품을 검색 했을 때 나타나는 제품리스트
    const [list, setList] = useState([])
    
    const showConsole = (cosdata) => {
        console.log(cosdata);
        setList(cosdata);  // 실시간 적용되게(렌더링)
    }
    
    
    useEffect(() => {
        sendGet(URL + "/MainPage", showConsole)
        // sendGet(URL + "/ppMain", showConsole)

    }, [])
    
    
    // 내가 찾고 싶은 제품 단어를 검색했을 때 나타나는 최근 검색어
    const [search,setSearch] = useState([])

    useEffect(() => {
        // 월요일에 와서 할 것!
        // 최근 검색어 5가지만 유지하기 6번 째꺼 검색을 했을 때는 처음 검색한 단어 날리기
        // pop , append 써서 배열 5자리 유지하겠다
        // map함수로 배열 뿌려줄거다
        // 상현오빠가 단톡에 보내준 사진도 한 번 더 확인해보기
    })







    return (
        <div>
            <div className=''>
                <InputBox func={setSearch}></InputBox>
                <div style={{height:'80px'}}>
                    <h2>최근 검색어</h2>
                </div>
                {list.map((item) => (
                    <div key={item.idx}>
                        <img src={item.cos_img_src} style={{width:'80px'}}></img>
                        <p>브랜드명 : {item.brand_name} 상품이름 : {item.cos_name}</p>
                        <p>⭐평점 : {item.grade} (평점수 : {item.grade_count})</p>
                        <p>ml/g : {item.vol}ml / 가격 : {item.price}원</p>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search