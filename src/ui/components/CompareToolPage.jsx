/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import CompareItemSlots from './CompareItemSlots';
import axios from 'axios';

const CompareToolPage = ({
  itemObjects,
  setItemObjects,
  slotTypes,
  setSlotTypes,
  slotItems,
  setSlotItems,
  handleSlotClick,
  saveLoadout,
  loadLoadout,
}) => {
  // State Logic
    const [selectedArmorType, setSelectedArmorType] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  // Use effect hook for making API call when slot is clicked

  useEffect(() => {
    if (selectedArmorType) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://fomft-apix-674490081833.us-central1.run.app/armor/${selectedArmorType}`);
          setItems(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message || 'Error Fetching Items');
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [selectedArmorType]);


return (
  <>
    <div className='compare-tool-container w-screen h-screen bg-[url(assets/background.png)] lg:bg-[url(assets/backgroundLG.png)] flex flex-row'>

      <div className='compare-tool-armorslots w-1/3 h-full'>

          <CompareItemSlots 
            itemObjects={itemObjects}
            setItemObjects={setItemObjects}
            slotTypes={slotTypes}
            setSlotTypes={setSlotTypes}
            slotItems={slotItems}
            setSlotItems={setSlotItems}
            handleSlotClick={handleSlotClick}
            saveLoadout={saveLoadout}
            loadLoadout={loadLoadout}

          />
        
      </div>

    </div>
  
  </>
)

}

export default CompareToolPage;