import React from 'react';
import './fish.css'
import TimeTab from './time/TimeTab';
import FishRiver from './fishriver/FishRiver';

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
            <div className='fish' style={{resize:'both'}}>
                <TimeTab />
                <FishRiver />
               
            </div>
    );
};

export default FishNeverEat;
