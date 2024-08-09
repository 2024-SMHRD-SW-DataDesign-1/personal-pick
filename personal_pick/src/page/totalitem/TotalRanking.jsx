import React, { useEffect, useState } from "react";
import ItemAll from "../../components/itemall/ItemAll"
import { sendGet, URL } from "../../util/util";
import './TotalRanking.scss'
import left_img from '../../img/왼쪽.png'
import { useParams } from "react-router-dom";
import Category from "../../components/category/Category";
import { choicRankingCategory } from "../../util/utilStr";


const TotalItem = () => {

    const [AllItem, setAllItem] = useState([]);

    const { category } = useParams();
    useEffect(() => {
        sendGet(URL + '/MainPage', setAllItem);

        
    }, [])
    const [cateIdx, setCateIdx] = useState(category)

    function showView(idx){
        
        switch(parseInt(idx)){
            case 1:
                return <p>1</p>
            case 2:
                return (
                    <>
                        <Category dic={AllItem} setDic={setCateIdx} categoryData={choicRankingCategory} />
                        <div className="itemlist">
                            <ItemAll data={AllItem}></ItemAll>
                        </div>
                    </>
                )
            case 3:
                return <p>3</p>               
            case 4:
                return <p>4</p>
        }
    }
    

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
                


                


                {showView(cateIdx)}
                

            </div>
        </div>
    );
};

export default TotalItem;