/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import CompareItemSlots from './CompareItemSlots';
import axios from 'axios';

const CompareToolPage = () => {

  // State Logic to be passed down
    const [selectedCompareArmorType, setSelectedCompareArmorType] = useState(null);
    const [compareItems, setCompareItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [firstCompareItemsObjects, setFirstCompareItemObjects] = useState([]);
    const [secondCompareItemsObjects, setSecondCompareItemObjects] = useState([]);

  // Use effect hook for making API call when slot is clicked



return (
  <>
    <div className='compare-tool-container w-screen h-screen bg-[url(assets/background.png)] lg:bg-[url(assets/backgroundLG.png)] flex flex-row'>

      <div className='compare-tool-armorslots w-1/3 h-full'>

          <CompareItemSlots 
            selectedCompareArmorType={selectedCompareArmorType}
            setSelectedCompareArmorType={setSelectedCompareArmorType}
            firstCompareItemsObjects={firstCompareItemsObjects}
            setFirstItemObjects={setFirstCompareItemObjects}
            secondCompareItemsObjects={secondCompareItemsObjects}
            setSecondCompareItemObjects={setSecondCompareItemObjects}
            compareItems={compareItems}
            setCompareItems={setCompareItems}
            loading={loading}
            setLoading={setLoading}
            error={error}
          />
        
      </div>

    </div>
  
  </>
)

}

export default CompareToolPage;