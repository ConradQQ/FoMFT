/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import CompareItemSlots from './CompareItemSlots';

const CompareToolPage = ({
  firstCompareItemsObjects,
  setFirstCompareItemObjects,
  secondCompareItemsObjects,
  setSecondCompareItemObjects,
  compareSlotTypesOne,
  setCompareSlotTypesOne,
  compareSlotTypesTwo,
  setCompareSlotTypesTwo,
  currentCompareItemObject,
  setCurrentCompareItemObject,
  handleCompareSlotClickOne,
  handleCompareSlotClickTwo
}) => {

  // State Logic to be passed down
    

  // Use effect hook for making API call when slot is clicked



return (
  <>
    <div className='compare-tool-container w-screen h-screen bg-[url(assets/background.png)] lg:bg-[url(assets/backgroundLG.png)] flex flex-row'>

      <div className='compare-tool-armorslots w-1/3 h-full'>

          <CompareItemSlots 
            firstCompareItemsObjects={firstCompareItemsObjects}
            setFirstCompareItemObjects={setFirstCompareItemObjects}
            secondCompareItemsObjects={secondCompareItemsObjects}
            setSecondCompareItemObjects={setSecondCompareItemObjects}
            compareSlotTypesOne={compareSlotTypesOne}
            setCompareSlotTypesOne={setCompareSlotTypesOne}
            compareSlotTypesTwo={compareSlotTypesTwo}
            setCompareSlotTypesTwo={setCompareSlotTypesTwo}
            currentCompareItemObject={currentCompareItemObject}
            setCurrentCompareItemObject={setCurrentCompareItemObject}
            handleCompareSlotClickOne={handleCompareSlotClickOne}
            handleCompareSlotClickTwo={handleCompareSlotClickTwo}
          />
        
      </div>

    </div>
  
  </>
)

}

export default CompareToolPage;