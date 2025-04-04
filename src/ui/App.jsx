import './input.css';
import ItemMenu from './components/ItemMenu';
import StatsDisplay from './components/StatsDisplay';
import SlotsMenu from './components/SlotsMenu';
import { useState, useEffect } from 'react';

function App() {
  const [itemObjects, setItemObjects] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [key, setKey] = useState(0); 
  const [slotTypes, setSlotTypes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [slotItems, setSlotItems] = useState({});

  // Function to remove item of a slot from SlotTypes and ItemObjects on item slot click
  const handleSlotClick = (slotToRemove) => {
    setSlotTypes((prevSlots) => prevSlots.filter((slot) => slot !== slotToRemove));
    setItemObjects((prevItems) => prevItems.filter((item) => item.slot !== slotToRemove));
  };

  // Function to save the current loadout
  const saveLoadout = () => {

    if (window.electronAPI && window.electronAPI.saveLoadout) {
      window.electronAPI.saveLoadout(itemObjects);
    } else {
      console.error('electronAPI or saveLoadout function not available.');
    }
  };

    // Function to load a loadout
    const loadLoadout = () => {
      if (window.electronAPI && window.electronAPI.loadLoadout) {
        window.electronAPI.loadLoadout();
      } else {
        console.error('err');
      }
    };

  // Handles loading loadouts 
    useEffect(() => {
      if (window.electronAPI && window.electronAPI.onLoadLoadout) {
        window.electronAPI.onLoadLoadout((event, loadedLoadout) => {
          if (loadedLoadout) {
            setItemObjects([]);
            setItemObjects(loadedLoadout);
            const newSlotTypes = loadedLoadout.map(item => item.slot);
            setSlotTypes(newSlotTypes);
            const processedItems = loadedLoadout.reduce((acc, item) => {
              acc[item.slot] = item;
              return acc;
            }, {});
            setSlotItems(processedItems);
            console.log('Loaded Loadout:', loadedLoadout);
          } else {
            console.error('No loadout data received.');
          }
        });
      }
    }, []);

  return (
    <>
    <div className="app-container flex flex-row w-screen h-screen  overflow-hidden bg-[url(assets/background.png)] lg:bg-[url(assets/backgroundLG.png)]">

    {/* Save/Load Container */}
    <div className='load-save-container flex flex-row absolute right-1 top-1'>
      
      {/* Save Button */}
      <div
      className='bg-[url(./assets/export.png)] hover:bg-[url(./assets/exportHover.png)] lg:bg-[url(./assets/exportLG.png)] hover:lg:bg-[url(./assets/exportHoverLG.png)] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] cursor-pointer'
      onClick={() => {
      saveLoadout();
      }}>
      </div>

      {/* Load Button */}
       <div
       className='bg-[url(./assets/import.png)] hover:bg-[url(./assets/importHover.png)] lg:bg-[url(./assets/importLG.png)] hover:lg:bg-[url(./assets/importHoverLG.png)] h-[16px] w-[16px] lg:w-[24px] lg:h-[24px] cursor-pointer ml-2'
      onClick={() => {
      loadLoadout();
      }}>
      </div>
    </div>

      {/* Items Menu */}
      <div className='items-menu w-1/3'>
        <div className='flex flex-col'>
         <ItemMenu  
          setItemObjects={setItemObjects}
          setSlotTypes={setSlotTypes}
          itemObjects={itemObjects}
          slotTypes={slotTypes}/>
        </div>
      </div>

      {/* Slots Menu */}
      <div className='slots-menu flex flex-col w-1/3 h-full items-center'>
        <SlotsMenu 
          itemObjects={itemObjects}
          slotTypes={slotTypes}
          handleSlotClick={handleSlotClick}
          saveLoadout={saveLoadout}
          loadLoadout={loadLoadout}
        />
      </div>

      {/* Stats Display */}
      <div className="stats-display flex flex-col w-1/3 h-full items-center">
        <StatsDisplay 
        itemObjects = {itemObjects}
        slotTypes = {slotTypes} />
      </div>
    </div>
  </>
  )
}

export default App
