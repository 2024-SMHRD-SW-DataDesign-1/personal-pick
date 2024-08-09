import React, { useEffect, useState } from "react";
import ItemAll from "../../components/itemall/ItemAll"
import { sendGet, URL } from "../../util/util";
import './TotalItem.scss'
import left_img from '../../img/왼쪽.png'


const TotalItem = () => {

    const [AllItem, setAllItem] = useState([]);

    // useEffect(()=>{
    //     console.log(AllItem)
    // },[AllItem])


    useEffect(() => {
        // console.log(1);
        
        sendGet(URL + '/MainPage', setAllItem);
        console.log(AllItem);

        let idx = 0; //idx 는 홈에서 받아온 카테고리 번호
        setCateIdx(idx);
    }, [])


    function showView(idx){
        switch(idx){
            case 1:
                // return <ItemAll data={AllItem}></ItemAll>
                return <p>1</p>
            case 2:
                return <ItemAll data={AllItem}></ItemAll>
            case 3:
                // return <ItemAll data={AllItem}></ItemAll>
                // return <ItemAll data={AllItem}></ItemAll>
                return <p>3</p>               
            case 4:
                // return <ItemAll data={AllItem}></ItemAll>
                // return <ItemAll data={AllItem}></ItemAll>
                return <p>4</p>
        }
    }

    const [cateIdx, setCateIdx] = useState(0)
    return (
        <div id='wrapper'>
            <div className="all_itemBox ">
                <img className="leftimg float_l" src={left_img} alt="" />
                <div className="cos_rank_text">화해 랭킹</div>
                <div>
                    <button className="rank_btn" onClick={()=>setCateIdx(1)}>조회수 급상승</button>
                    <button className="rank_btn" onClick={()=>setCateIdx(2)} >카테고리별</button>
                    <button className="rank_btn" onClick={()=>setCateIdx(3)} >피부별</button>
                    <button className="rank_btn" onClick={()=>setCateIdx(4)}>연령대별</button>
                </div>
                




                <div className="itemlist">
                    {showView(cateIdx)}
                </div>
                

            </div>
        </div>
    );
};

export default TotalItem;