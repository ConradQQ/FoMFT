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
      {/* Item Slots */}
      <div className="item-slots flex flex-col w-1/3 h-full items-center"> 
        <h1>Armor</h1>
        {/* Armor Slots Layout */}
        <div className='armor-slots flex flex-col w-full h-1/6 bg-[url(asset/grid.jpg)] lg:mb-20'>
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
              
        <div className= {
          isWeaponSlotSelected
          ? 'weapon-slot w-full h-full mt-30 mb-10 p-2 bg-[#1f2533]/50 rounded-xl lg:h-80 lg:mb-20'
          : 'weapon-slot w-full h-full mt-30 mb-10 p-2 bg-[#1f2533] opacity-50 rounded-xl lg:h-80 lg:mb-20'
        }>
            <div id='weaponSlot' className={
              isWeaponSlotSelected
              ? 'text-center bg-[url(assets/PP7xs.png)] w-full h-full mx-2 lg:w-full lg:h-full lg:bg-[url(assets/pp7XL.png)]'
              : 'text-center w-full h-full bg-[url(assets/pp7Silx.png)] lg:bg-[url(assets/pp7SilxLG.png)]'
            }>
            </div>
        </div>

        {/* Food, booster, med slots */}

        <h1>Misc. Slots</h1>
        <div className='misc-slots flex flex-row w-full justify-center mb-5 p-2 lg:mb-0 lg:mt-5'>
        <div className={isFoodSlotSelected 
                ? 'text-center bg-[url(assets/pizza1x.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/pizza1xLG.png)]'
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }>

        </div>
            
        <div className={isMedSlotSelected 
                ? 'text-center bg-[url(assets/XL1.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/XL1LG.png)]'
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }>

        </div>
        
        <div className={isBoosterSlotSelected 
                ? 'text-center bg-[url(assets/fakeCoca1.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/fakeCoca1LG.png)]'
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }>

        </div>
        </div>
      </div>

      {/* Stats Display */}

      <div className="stats-display  flex flex-col w-1/3 h-full items-center">
        <StatsDisplay 
        itemObjects = {itemObjects}
        slotTypes = {slotTypes} />
      </div>
    </div>
  </>
  )
}

export default App
