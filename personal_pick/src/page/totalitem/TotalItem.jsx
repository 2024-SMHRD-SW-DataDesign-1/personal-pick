import React, { useEffect, useState } from "react";
import ItemAll from "../../components/itemall/ItemAll"
import { sendGet, URL } from "../../util/util";

const TotalItem = () => {

    const [AllItem, setAllItem] = useState([]);

    // useEffect(()=>{
    //     console.log(AllItem)
    // },[AllItem])


    useEffect(() => {
        // console.log(1);
        
        sendGet(URL + '/MainPage', setAllItem);
        console.log(AllItem);
    }, [])


    return (
        <div id='wrapper'>
            <div className="cos_rank_text">화해 랭킹</div>





            <ItemAll data={AllItem}></ItemAll>
        </div>
    );
};

export default TotalItem;