/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import CompareItemSlots from './CompareItemSlots';
import CompareStatsDisplay from './CompareStatsDisplay';

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
  handleCompareSlotClickTwo,
  selectedArmorTypeOne,
  setSelectedArmorTypeOne,
  selectedArmorTypeTwo,
  setSelectedArmorTypeTwo,
  selectedArmorType,
  setSelectedArmorType,
  handleArmorSlotClickOne,
  handleArmorSlotClickTwo
}) => {

  // State Logic to be passed down
    

  // Use effect hook for making API call when slot is clicked



return (
  <>
    <div className='compare-tool-container w-screen h-screen bg-[url(assets/background.png)] lg:bg-[url(assets/backgroundLG.png)] flex flex-row overflow-hidden'>


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
            selectedArmorTypeOne={selectedArmorTypeOne}
            setSelectedArmorTypeOne={setSelectedArmorTypeOne}
            selectedArmorTypeTwo={selectedArmorTypeTwo}
            setSelectedArmorTypeTwo={setSelectedArmorTypeTwo}
            selectedArmorType={selectedArmorType}
            setSelectedArmorType={setSelectedArmorType}
            handleArmorSlotClickOne={handleArmorSlotClickOne}
            handleArmorSlotClickTwo={handleArmorSlotClickTwo}
          />
        
      </div>
      
      <div className='compare-tool-statsDisplay w-2/3 h-full'>

        <CompareStatsDisplay 
          firstCompareItemsObjects={firstCompareItemsObjects}
          secondCompareItemsObjects={secondCompareItemsObjects}
        />

      </div>

    </div>
  
  </>
)

}

export default CompareToolPage;
