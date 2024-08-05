import React, { useEffect, useState } from 'react';
import InputBox from '../../components/inputbox/InputBox';
import { sendGet, URL } from '../../util/util';
import './Search.scss';

const Search = () => {
    // 내가 찾고 싶은 제품을 검색했을 때 나타나는 제품리스트
    const [list, setList] = useState([]);

    const showConsole = (cosdata) => {
        console.log(cosdata);
        setList(cosdata);  // 실시간 적용되게(렌더링)
    };

    // 컴포넌트가 처음 렌더링될 때 데이터 가져오기
    useEffect(() => {
        sendGet(URL + "/MainPage", showConsole); // 데이터(url) 가져와서 showConsole 함수 호출
    }, []); // 빈 배열을 두 번째 인자로 전달하여 마운트 시 한 번만 실행


    // 내가 찾고 싶은 제품 단어를 검색했을 때 나타나는 최근 검색어
    // searchHistory : 최근 검색어를 저장할 상태 변수(최근 검색어를 저장하는 배열)
    const [searchHistory, setSearchHistory] = useState([]);

    // 검색어를 추가하는 함수
    const searchAdd = (searchTerm) => {  // 새로운 검색어, 사용자가 검색을 수행할 때 handleSearch 함수로 전달
        setSearchHistory((prevHistory) => { // 기존(이전)에 검색했던 데이터 리스트(배열)
            // 이전 검색어 리스트에 새로운 검색어를 배열 끝에 추가
            // 스프레드 문법(...) : 내가 보관하고 있던 이전까지의 데이터 유지시킨 후 그 뒤에 데이터 연결
            const newHistory = [...prevHistory, searchTerm];
            // 검색어 리스트가 5개를 초과하면 가장 오래된 검색어 제거
            if (newHistory.length > 5) {
                newHistory.shift();  // 가장 오래된 검색어 제거 함수
            }
            // 최신 검색어 리스트를 반환하여 상태 업데이트
            return newHistory;
        });
 };


 // 검색어를 삭제하는 함수
 const searchDelete = (indexToDelete) => {
    // filter 메서드는 주어진 함수를 실행하여 조건을 만족하는 요소를 모아 새로운 배열로 반환
    // 여기서 (_(=item), index) => index !== indexToDelete 함수는 
    // 각 요소의 인덱스(index)가 indexToDelete와 같지 않은 요소만 새로운 배열에 포함시킴
    // item을 사용하지 않기에 _ 로 표기 => 해당 인자를 사용하지 않겠다는 의미
    setSearchHistory((prevHistory) => 
        prevHistory.filter((_, index) => index !== indexToDelete)
    );
};

    return (
        <div>
            <div className=''>
                {/* InputBox 컴포넌트에 searchAdd 함수를 전달하여 검색어 입력 시 호출되게 함 */}
                <InputBox func={searchAdd}></InputBox>
                <div style={{ height: '120px' }}>
                    <h2>최근 검색어</h2>
                    <ul>
                        {/* 검색 기록을 화면에 표시 */}
                        {searchHistory.map((item, index) => (
                            // 각 검색어를 리스트 아이템으로 표시
                            <li key={index}>{item}<button onClick={() => searchDelete(index)}> X</button></li>
                            // <li key="0">검색어1</li>
                            // <li key="1">검색어2</li>
                            // <li key="2">검색어3</li>
                        ))}
                    </ul>
                </div>
                {/* 서버에서 가져온 제품 리스트를 화면에 표시 */}
                {list.map((item) => (
                    <div key={item.idx}>
                        <img src={item.cos_img_src} style={{ width: '80px' }} alt={item.cos_name}></img>
                        <p>브랜드명: {item.brand_name} 상품이름: {item.cos_name}</p>
                        <p>⭐평점: {item.grade} (평점수: {item.grade_count})</p>
                        <p>ml/g: {item.vol}ml / 가격: {item.price}원</p>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;