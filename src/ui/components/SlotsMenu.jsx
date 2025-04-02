// ItemSlot.jsx

import React from 'react';


const SlotsMenu = ({itemObjects, slotTypes, handleSlotClick}) => {

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

  // Item slot tooltip logic
  const helmetItem = itemObjects.find((item) => item.slot === 'Helmet');
  const helmetItemName = helmetItem ? helmetItem.armor_name : undefined;
  const helmetImg = helmetItem ? helmetItem.image_path_sm : undefined;
  const helmetImgLG = helmetItem ? helmetItem.image_path_lg : undefined;

  const torsoItem = itemObjects.find((item) => item.slot === 'Torso');
  const torsoItemName = torsoItem ? torsoItem.armor_name : undefined;
  const torsoImg = torsoItem ? torsoItem.image_path_sm : undefined;
  const torsoImgLG = torsoItem ? torsoItem.image_path_lg : undefined;

  const armsItem = itemObjects.find((item) => item.slot === 'Arms');
  const armsItemName = armsItem ? armsItem.armor_name : undefined;

  const legsItem = itemObjects.find((item) => item.slot === 'Legs');
  const legsItemName = legsItem ? legsItem.armor_name || legsItem.implant_name : undefined;

  const shouldersItem = itemObjects.find((item) => item.slot === 'Shoulders');
  const shoulderItemName = shouldersItem ? shouldersItem.armor_name : undefined;
  const shoulderImg = shouldersItem ? shouldersItem.image_path_sm : undefined;
  const shoulderImgLG = shouldersItem ? shouldersItem.image_path_lg : undefined;

  const handsItem = itemObjects.find((item) => item.slot === 'Hands');
  const handsItemName = handsItem ? handsItem.armor_name : undefined;

  const weaponItem = itemObjects.find((item) => item.slot === 'weapon');
  const weaponItemName = weaponItem ? weaponItem.weapon_name : undefined;

  const foodItem = itemObjects.find((item) => item.slot === 'food');
  const foodItemName = foodItem ? foodItem.food_name : undefined;

  const medItem = itemObjects.find((item) => item.slot === 'med');
  const medItemName = medItem ? medItem.med_name : undefined;

  const boosterItem = itemObjects.find((item) => item.slot === 'booster');
  const boosterItemName = boosterItem ? boosterItem.booster_name : undefined;

// Logic for determining leg pads or implant in leg slot
const legsItemKeys = legsItem ? Object.keys(legsItem) : undefined;
const legsItemType = legsItem ? legsItemKeys[1] : undefined

// console.log(helmetImg);
// console.log(helmetImgLG)

return (
  <>
  {/* Item Slots */}
  <div className="item-slots flex flex-col w-full h-full items-center"> 
        <h1 className='text-white'>Armor</h1>
        {/* Armor Slots Layout */}
        <div className='armor-slots flex flex-col w-full h-1/6 bg-[url(asset/grid.jpg)] lg:mb-20'>
          <div className='HTS-slots flex flex-row justify-center  p-2'>
              <div 
              className={isHelmetSlotSelected
                ? `text-center ${helmetImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${helmetImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/headSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/headSlotLG.png)]'
              }
               title={helmetItemName}
               onClick={isHelmetSlotSelected ? () => handleSlotClick('Helmet') : undefined}>
              </div>
              <div className={isTorsoSlotSelected 
                ? `text-center ${torsoImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${torsoImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/torsoSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/torsoSlotLG.png)]'
              }
              title={torsoItemName}
              onClick={isTorsoSlotSelected ? () => handleSlotClick('Torso') : undefined}>

              </div>
              <div className={isArmsSlotSelected 
                ? `text-center ${torsoImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${torsoImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/armSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/armSlotLG.png)]'
              }
              title={armsItemName}
              onClick={isArmsSlotSelected ? () => handleSlotClick('Arms') : undefined}>

              </div>
          </div>
          <div className='LSH-slots flex flex-row justify-between p-2 '>
          <div className={isLegsSlotSelected 
                ? legsItemType === 'armor_name' 
                  ? 'text-center bg-[url(assets/legPadSelected.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/legPadSelectedLG.png)] cursor-pointer'
                  : 'text-center bg-[url(assets/resAmp.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/resAmpLG.png)] cursor-pointer'
                : 'text-center bg-[url(assets/legSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/legSlotLG.png)]'
              }
              title={legsItemName}
              onClick={isLegsSlotSelected ? () => handleSlotClick('Legs') : undefined}>

            </div>
            <div className={isShoulderSlotSelected 
                ? `text-center ${shoulderImg}  w-16 h-16 mx-2 lg:w-32 lg:h-32 ${shoulderImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/shouldersSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/shouldersSlotLG.png)]'
              }
              title={shoulderItemName}
              onClick={isShoulderSlotSelected ? () => handleSlotClick('Shoulders') : undefined}>

            </div>
            <div className={isHandsSlotSelected 
                ? 'text-center bg-[url(assets/handsSelected.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/handsSelectedLG.png)] cursor-pointer'
                : 'text-center bg-[url(assets/handSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/handSlotLG.png)]'
              }
              title={handsItemName}
              onClick={isHandsSlotSelected ? () => handleSlotClick('Hands') : undefined}>

            </div>
          </div>
        </div>

        {/* Weapon Slot */}
              
        <div className= {
          isWeaponSlotSelected
          ? 'weapon-slot w-full h-full mt-30 mb-10 p-2 bg-[#1f2533]/50 rounded-xl lg:h-80 lg:mb-20 cursor-pointer'
          : 'weapon-slot w-full h-full mt-30 mb-10 p-2 bg-[#1f2533] opacity-50 rounded-xl lg:h-80 lg:mb-20'
        }>
            <div id='weaponSlot' className={
              isWeaponSlotSelected
              ? 'text-center bg-[url(assets/PP7xs.png)] w-full h-full mx-2 lg:w-full lg:h-full lg:bg-[url(assets/pp7XL.png)]'
              : 'text-center w-full h-full bg-[url(assets/pp7Silx.png)] lg:bg-[url(assets/pp7SilxLG.png)]'
            }
            title={weaponItemName}
            onClick={isWeaponSlotSelected ? () => handleSlotClick('weapon') : undefined}>
            </div>
        </div>

        {/* Food, booster, med slots */}

        <h1 className='text-white'>Misc. Slots</h1>
        <div className='misc-slots flex flex-row w-full justify-center mb-5 p-2 lg:mb-0 lg:mt-5'>
        <div className={isFoodSlotSelected 
                ? 'text-center bg-[url(assets/pizza1x.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/pizza1xLG.png)] cursor-pointer'
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }
              title={foodItemName}
              onClick={isFoodSlotSelected ? () => handleSlotClick('food') : undefined}>

        </div>
            
        <div className={isMedSlotSelected 
              ? 'text-center bg-[url(assets/XL1.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/XL1LG.png)] cursor-pointer'
              : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }
              title={medItemName}
              onClick={isMedSlotSelected ? () => handleSlotClick('med') : undefined}>

        </div>
        
        <div className={isBoosterSlotSelected 
                ? 'text-center bg-[url(assets/fakeCoca1.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/fakeCoca1LG.png)] cursor-pointer'
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }
              title={boosterItemName}
              onClick={isBoosterSlotSelected ? () => handleSlotClick('booster') : undefined}>

        </div>
        </div>
      </div>
  </>
)




}


export default SlotsMenu;