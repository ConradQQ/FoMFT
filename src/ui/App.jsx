import './input.css'
import ItemSlot from './components/ItemSlot'
import ItemMenu from './components/ItemMenu'
import StatsDisplay from './components/StatsDisplay'
import { useState } from 'react'


function App() {

  const [itemObjects, setItemObjects] = useState([]);
  const [slotTypes, setSlotTypes] = useState([]);

  return (
    <>
    <div className="app-container flex flex-row w-screen h-screen bg-amber-400 overflow-hidden">
      <div className='items-menu w-1/3 bg-teal-500'>
        <div className='flex flex-col'>
         <ItemMenu  
         setItemObjects={setItemObjects}
         setSlotTypes={setSlotTypes}
         itemObjects={itemObjects}
         slotTypes={slotTypes}/>
        </div>
      </div>
      <div className="item-slots bg-fuchsia-800 flex flex-col w-1/3 h-full items-center"> 
        <h1>Armor Slots</h1>
        {/* Armor Slots Layout */}
        <div className='armor-slots flex flex-col w-full h-2/6 border-2 border-indigo-600'>
          <div className='HCS-slots flex flex-row justify-center  p-2'>
            <div id='chestSlot' className='text-center bg-black w-16 h-16 mx-2 lg:w-32 lg:h-32'><ItemSlot slot="Torso" /></div>
            <div id='headSlot' className='text-center bg-amber-900 w-16 h-16 mx-2 lg:w-32 lg:h-32'><ItemSlot slot="Helmet" /></div>
            <div id='shoulderSlot' className='text-center bg-blue-400 w-16 h-16 mx-2 lg:w-32 lg:h-32'><ItemSlot slot="Shoulders" /></div>
          </div>
          <div className='LH-slots flex flex-row justify-between p-2 '>
            <div id='legSlot' className='text-center bg-red-400 w-16 h-16 mx-2 lg:w-32 lg:h-32'><ItemSlot slot="Legs" /></div>
            <div id='handSlot' className='text-center bg-green-300 w-16 h-16 mx-2 lg:w-32 lg:h-32'><ItemSlot slot="Hands" /></div>
          </div>
        </div>
        {/* Weapon Slot */}
        <div className='weapon-slot w-full h-2/10 mt-20 border-2 border-indigo-600 mb-20 p-2'>
            <div id='weaponSlot' className='text-center bg-pink-600 w-full h-full'><ItemSlot slot="Weapon" /></div>
        </div>
        {/* Food, booster, med slots */}
        <h1>Misc. Slots</h1>
        <div className='misc-slots flex flex-row w-full justify-center mb-10 border-2 border-indigo-600 p-2'>
          <div id='foodSlot' className='text-center bg-orange-300 w-16 h-16 mx-2 lg:w-32 lg:h-32'><ItemSlot slot="Food" /></div>
          <div id='boosterSlot' className='text-center bg-green-300 w-16 h-16 mx-2 lg:w-32 lg:h-32'><ItemSlot slot="Booster" /></div>
          <div id='medSlot' className='text-center bg-purple-300 w-16 h-16 mx-2 lg:w-32 lg:h-32'><ItemSlot slot="Booster" /></div>
        </div>
      </div>
      {/* Stats Display */}
      <div className="stats-display bg-amber-700 flex flex-col w-1/3 h-full items-center">
        <h2>Total Stats</h2>
        <StatsDisplay 
        itemObjects = {itemObjects}
        slotTypes = {slotTypes} />
      </div>
    </div>
  </>
  )
}

export default App
