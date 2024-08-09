import React from 'react';

const ItemAll = ({ data }) => {

  console.log(data);



  return (
    <>

      {data.length > 0 && data.map((item) => (
        <div>
          <div>
            <span>{item.brand_name}</span>


          </div>



        </div>



      ))}
    </>
  )
}

export default ItemAll