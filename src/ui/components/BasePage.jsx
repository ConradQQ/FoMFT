/* eslint-disable no-unused-vars */
import ItemMenu from './ItemMenu';
import StatsDisplay from './StatsDisplay';
import SlotsMenu from './SlotsMenu';
import '../input.css';

const BasePage = ({
  itemObjects,
  setItemObjects,
  slotTypes,
  setSlotTypes,
  handleSlotClick,
  saveLoadout,
  loadLoadout
}) => {
  

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
            slotTypes={slotTypes}
          />
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
          slotTypes = {slotTypes} 
        />
      </div>
    </div>
  </>
  )
}


export default BasePage;
