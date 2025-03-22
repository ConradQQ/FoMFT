import './input.css'
import ItemSlot from './components/ItemSlot'
import ItemMenu from './components/ItemMenu'
import StatsDisplay from './components/StatsDisplay'
import { useState } from 'react'


function App() {

  const [itemObjects, setItemObjects] = useState([]);
  const [slotTypes, setSlotTypes] = useState([]);

  const isHelmetSlotSelected = slotTypes.includes('Helmet');
  const isTorsoSlotSelected = slotTypes.includes('Torso');
  const isArmsSlotSelected = slotTypes.includes('Arms');

  const isShoulderSlotSelected = slotTypes.includes('Shoulders');

  const isLegsSlotSelected = slotTypes.includes('Legs');
  const isHandsSlotSelected = slotTypes.includes('Hands');

  const isWeaponSlotSelected = slotTypes.includes('weapon');

  const isFoodSlotSelected = slotTypes.includes('food');

  const isBoosterSlotSelected = slotTypes.includes('booster');

  const isMedSlotSelected = slotTypes.includes('med');




  console.log(isHelmetSlotSelected)

  return (
    <>
    <div className="app-container flex flex-row w-screen h-screen bg-amber-400 overflow-hidden">
      
      {/* Items Menu */}
      <div className='items-menu w-1/3 bg-teal-500'>
        <div className='flex flex-col'>
         <ItemMenu  
         setItemObjects={setItemObjects}
         setSlotTypes={setSlotTypes}
         itemObjects={itemObjects}
         slotTypes={slotTypes}/>
        </div>
      </div>
      {/* Item Slots */}
      <div className="item-slots bg-fuchsia-800 flex flex-col w-1/3 h-full items-center"> 
        <h1>Armor Slots</h1>
        {/* Armor Slots Layout */}
        <div className='armor-slots flex flex-col w-full h-2/6 border-2 border-indigo-600'>
          <div className='HTS-slots flex flex-row justify-center  p-2'>
              <div className={isHelmetSlotSelected 
                ? 'text-center bg-[url(assets/helmetSelected.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/helmetSelectedLG.png)]'
                : 'text-center bg-[url(assets/headSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/headSlotLG.png)]'
              }>

              </div>
              <div className={isTorsoSlotSelected 
                ? 'text-center bg-[url(assets/torsoSelected.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/torsoSelectedLG.png)]'
                : 'text-center bg-[url(assets/torsoSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/torsoSlotLG.png)]'
              }>

              </div>
              <div className={isArmsSlotSelected 
                ? 'text-center bg-[url(assets/armsSelected.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/armsSelectedLG.png)]'
                : 'text-center bg-[url(assets/armSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/armSlotLG.png)]'
              }>

              </div>
          </div>
          <div className='LSH-slots flex flex-row justify-between p-2 '>
          <div className={isLegsSlotSelected 
                ? 'text-center bg-[url(assets/resAmp.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/resAmpLG.png)]'
                : 'text-center bg-[url(assets/legSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/legSlotLG.png)]'
              }>

            </div>
            <div className={isShoulderSlotSelected 
                ? 'text-center bg-[url(assets/shouldersSelected.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/shouldersSelectedLG.png)]'
                : 'text-center bg-[url(assets/shouldersSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/shouldersSlotLG.png)]'
              }>

            </div>
            <div className={isHandsSlotSelected 
                ? 'text-center bg-[url(assets/handsSelected.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/handsSelectedLG.png)]'
                : 'text-center bg-[url(assets/handSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/handSlotLG.png)]'
              }>

            </div>
          </div>
        </div>

        {/* Weapon Slot */}

        <div className='weapon-slot w-full h-full mt-10 border-2 border-indigo-600 mb-20 p-2'>
            <div id='weaponSlot' className={
              isWeaponSlotSelected
              ? 'text-center bg-[url(assets/PP7.png)] w-full h-full mx-2 lg:w-full lg:h-full lg:bg-[url(assets/PP7LG.png)]'
              : 'text-center bg-green-600 w-full h-full'
            }>
            </div>
        </div>

        {/* Food, booster, med slots */}

        <h1>Misc. Slots</h1>
        <div className='misc-slots flex flex-row w-full justify-center mb-5 border-2 border-indigo-600 p-2'>
        <div className={isFoodSlotSelected 
                ? 'text-center bg-[url(assets/pizza.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/pizzaLG.png)]'
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }>

        </div>
            
        <div className={isMedSlotSelected 
                ? 'text-center bg-[url(assets/xl.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/xlLG.png)]'
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }>

        </div>
        <div className={isBoosterSlotSelected 
                ? 'text-center bg-red-300 w-16 h-16 mx-2 lg:w-32 lg:h-32'
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }>

        </div>
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
