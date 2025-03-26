import './input.css'
import ItemSlot from './components/ItemSlot'
import ItemMenu from './components/ItemMenu'
import StatsDisplay from './components/StatsDisplay'
import SlotsMenu from './components/SlotsMenu'
import { useState } from 'react'


function App() {

  const [itemObjects, setItemObjects] = useState([]);
  const [slotTypes, setSlotTypes] = useState([]);



// Function to remove item of a slot from SlotTypes and ItemObjects on item slot click

const handleSlotClick = (slotToRemove) => {

  setSlotTypes((prevSlots) => prevSlots.filter((slot) => slot !== slotToRemove));

  setItemObjects((prevItems) => prevItems.filter((item) => item.slot !== slotToRemove));

}



  return (
    <>
    <div className="app-container flex flex-row w-screen h-screen  overflow-hidden bg-[url(assets/background.png)] lg:bg-[url(assets/backgroundLG.png)]">
      
      {/* Items Menu */}
      <div className='items-menu w-1/3 '>
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
