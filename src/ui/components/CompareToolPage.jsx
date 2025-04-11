/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import CompareItemSlots from './CompareItemSlots';

const CompareToolPage = () => {


return (
  <>
    <div className='compare-tool-container w-screen h-screen bg-[url(assets/background.png)] lg:bg-[url(assets/backgroundLG.png)] flex flex-row'>

      <div className='compare-tool-armorslots w-1/3 h-full'>

          <CompareItemSlots />
        
      </div>

    </div>
  
  </>
)

}

export default CompareToolPage;