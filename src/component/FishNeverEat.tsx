import React from 'react';
import './fish.css'

const FishNeverEat = (prop: any | undefined)  => {
    const data  = {
        ...prop,
      };
      console.info(prop);
      let listItems ;
      if(Array.isArray(data.data)){
            console.info("is arrary")
            listItems = data.data?.map((item, index) => (
            <li key={index}>{item}</li>
        ));
      }else{
        console.info(`data is`)
        console.info(data)
      }
    

    return (
            <div className='fish'>
                <h1>列表页面</h1>
                <ul>{listItems}</ul>
            </div>
    );
};

export default FishNeverEat;
