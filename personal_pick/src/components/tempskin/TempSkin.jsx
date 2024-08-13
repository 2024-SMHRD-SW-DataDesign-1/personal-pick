import React from 'react'
import './TempSkin.scss'


const TempSkin = ( {dic} ) => {
    return (
        <div className='flex_row tempSkin_Container'>
            <div>{dic.count + "개"}</div>
            <div className='skinChart_back'>
                <div className='skinChart' style={{height : dic.count*20+"%", backgroundColor:"rgb(145 209 204)"}}>

                </div>
            </div>
            <div>{dic.value}</div>
        </div>
    )
}

export default TempSkin