import React, { useState, useEffect } from 'react';

const SlotsMenu = ({itemObjects, slotTypes, handleSlotClick, toolTipShown, setToolTipShown, setToolTipItem, handleToolTipItem}) => {


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
  const helmetStats = helmetItem ? helmetItem.stats : undefined;
  const helmetToolTipStats = helmetStats
    ? Object.entries(helmetStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const helmetToolTipName = helmetItemName
    ? `${helmetItemName}\n${'-'.repeat(helmetItemName.length)}\n` 
    : '';
  const helmetToolTip = helmetToolTipStats && helmetToolTipName 
    ? helmetToolTipName + helmetToolTipStats
    : ''

  const torsoItem = itemObjects.find((item) => item.slot === 'Torso');
  const torsoItemName = torsoItem ? torsoItem.armor_name : undefined;
  const torsoImg = torsoItem ? torsoItem.image_path_sm : undefined;
  const torsoImgLG = torsoItem ? torsoItem.image_path_lg : undefined;
  const torsoStats = torsoItem ? torsoItem.stats : undefined;
  const torsoToolTipStats = torsoStats
    ? Object.entries(torsoStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const torsoToolTipName = torsoItemName
    ? `${torsoItemName}\n${'-'.repeat(torsoItemName.length)}\n` 
    : '';
  const torsoToolTip = torsoToolTipStats && torsoToolTipName 
    ? torsoToolTipName + torsoToolTipStats
    : ''

  const armsItem = itemObjects.find((item) => item.slot === 'Arms');
  const armsItemName = armsItem ? armsItem.armor_name : undefined;
  const armsImg = armsItem ? armsItem.image_path_sm : undefined;
  const armsImgLG = armsItem ? armsItem.image_path_lg : undefined;
  const armsStats = armsItem ? armsItem.stats : undefined;
  const armsToolTipStats = armsStats
    ? Object.entries(armsStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const armsToolTipName = armsItemName
    ? `${armsItemName}\n${'-'.repeat(armsItemName.length)}\n` 
    : '';
  const armsToolTip = armsToolTipStats && armsToolTipName 
    ? armsToolTipName + armsToolTipStats
    : ''

  const legsItem = itemObjects.find((item) => item.slot === 'Legs');
  const legsItemName = legsItem ? legsItem.armor_name || legsItem.implant_name : undefined;
  const legsImg = legsItem ? legsItem.image_path_sm : undefined;
  const legsImgLG = legsItem ? legsItem.image_path_lg : undefined;
  const legsStats = legsItem ? legsItem.stats : undefined;
  const legsToolTipStats = legsStats
    ? Object.entries(legsStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const legsToolTipName = legsItemName
    ? `${legsItemName}\n${'-'.repeat(legsItemName.length)}\n` 
    : '';
  const legsToolTip = legsToolTipStats && legsToolTipName 
    ? legsToolTipName + legsToolTipStats
    : ''

  const shouldersItem = itemObjects.find((item) => item.slot === 'Shoulders');
  const shouldersItemName = shouldersItem ? shouldersItem.armor_name : undefined;
  const shoulderImg = shouldersItem ? shouldersItem.image_path_sm : undefined;
  const shoulderImgLG = shouldersItem ? shouldersItem.image_path_lg : undefined;
  const shouldersStats = shouldersItem ? shouldersItem.stats : undefined;
  const shouldersToolTipStats = shouldersStats
    ? Object.entries(shouldersStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const shouldersToolTipName = shouldersItemName
    ? `${shouldersItemName}\n${'-'.repeat(shouldersItemName.length)}\n` 
    : '';
  const shouldersToolTip = shouldersToolTipStats && shouldersToolTipName 
    ? shouldersToolTipName + shouldersToolTipStats
    : ''


  const handsItem = itemObjects.find((item) => item.slot === 'Hands');
  const handsItemName = handsItem ? handsItem.armor_name : undefined;
  const handsImg = handsItem ? handsItem.image_path_sm : undefined;
  const handsImgLG = handsItem ? handsItem.image_path_lg : undefined;
  const handsStats = handsItem ? handsItem.stats : undefined;
  const handsToolTipStats = handsStats
    ? Object.entries(handsStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const handsToolTipName = handsItemName
    ? `${handsItemName}\n${'-'.repeat(handsItemName.length)}\n` 
    : '';
  const handsToolTip = handsToolTipStats && handsToolTipName 
    ? handsToolTipName + handsToolTipStats
    : ''

  const weaponItem = itemObjects.find((item) => item.slot === 'weapon');
  const weaponItemName = weaponItem ? weaponItem.weapon_name : undefined;
  const weaponStats = weaponItem ? weaponItem.stats : undefined;
  const weaponToolTipStats = weaponStats
    ? Object.entries(weaponStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const weaponToolTipName = weaponItemName
    ? `${weaponItemName}\n${'-'.repeat(weaponItemName.length)}\n` 
    : '';
  const weaponToolTip = weaponToolTipStats && weaponToolTipName 
    ? weaponToolTipName + weaponToolTipStats
    : ''

  const foodItem = itemObjects.find((item) => item.slot === 'food');
  const foodItemName = foodItem ? foodItem.food_name : undefined;
  const foodImg = foodItem ? foodItem.image_path_sm : undefined;
  const foodImgLG = foodItem ? foodItem.image_path_lg : undefined;
  const foodStats = foodItem ? foodItem.stats : undefined;
  const foodToolTipStats = foodStats
    ? Object.entries(foodStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const foodToolTipName = foodItemName
    ? `${foodItemName}\n${'-'.repeat(foodItemName.length)}\n` 
    : '';
  const foodToolTip = foodToolTipStats && foodToolTipName 
    ? foodToolTipName + foodToolTipStats
    : ''

  const medItem = itemObjects.find((item) => item.slot === 'med');
  const medItemName = medItem ? medItem.med_name : undefined;
  const medImg = medItem ? medItem.image_path_sm : undefined;
  const medImgLG = medItem ? medItem.image_path_lg : undefined;
  const medStats = medItem ? medItem.stats : undefined;
  const medToolTipStats = medStats
    ? Object.entries(medStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const medToolTipName = medItemName
    ? `${medItemName}\n${'-'.repeat(medItemName.length)}\n` 
    : '';
  const medToolTip = medToolTipStats && medToolTipName 
    ? medToolTipName + medToolTipStats
    : ''

  const boosterItem = itemObjects.find((item) => item.slot === 'booster');
  const boosterItemName = boosterItem ? boosterItem.booster_name : undefined;
  const boosterStats = boosterItem ? boosterItem.stats : undefined;
  const boosterToolTipStats = boosterStats
    ? Object.entries(boosterStats).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
  const boosterToolTipName = boosterItemName
    ? `${boosterItemName}\n${'-'.repeat(boosterItemName.length)}\n` 
    : '';
  const boosterToolTip = boosterToolTipStats && boosterToolTipName 
    ? boosterToolTipName + boosterToolTipStats
    : ''

// Logic for determining leg pads or implant in leg slot
const legsItemKeys = legsItem ? Object.keys(legsItem) : undefined;
const legsItemType = legsItem ? legsItemKeys[1] : undefined


return (
  <>
  {/* Item Slots */}
  <div className="item-slots flex flex-col w-full h-full items-center"> 
        <h1 className='text-white'>Armor</h1>
        {/* Armor Slots Layout */}
        <div className='armor-slots flex flex-col w-full h-1/6 lg:mb-20'>
          <div className='HTS-slots flex flex-row justify-center  p-2'>
              <div 
              className={isHelmetSlotSelected
                ? `text-center ${helmetImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${helmetImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/headSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/headSlotLG.png)]'
              }
               title={helmetToolTip}
               onClick={isHelmetSlotSelected ? () => handleSlotClick('Helmet') : undefined} 
               onContextMenu={isHelmetSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('Helmet')) : undefined}
            >
              </div>
              <div className={isTorsoSlotSelected 
                ? `text-center ${torsoImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${torsoImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/torsoSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/torsoSlotLG.png)]'
              }
              title={torsoToolTip}
              onClick={isTorsoSlotSelected ? () => handleSlotClick('Torso') : undefined}
              onContextMenu={isTorsoSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('Torso')) : undefined}>

              </div>
              <div className={isArmsSlotSelected 
                ? `text-center ${armsImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${armsImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/armSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/armSlotLG.png)]'
              }
              title={armsToolTip}
              onClick={isArmsSlotSelected ? () => handleSlotClick('Arms') : undefined}
              onContextMenu={isArmsSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('Arms')) : undefined}>
              </div>
          </div>
          <div className='LSH-slots flex flex-row items-center justify-center '>
          <div className={isLegsSlotSelected 
                ? legsItemType === 'armor_name' 
                  ? `text-center ${legsImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${legsImgLG} cursor-pointer`
                  : `text-center ${legsImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${legsImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/legSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/legSlotLG.png)]'
              }
              title={legsToolTip}
              onClick={isLegsSlotSelected ? () => handleSlotClick('Legs') : undefined}
              onContextMenu={isLegsSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('Legs')) : undefined}>
            </div>
            <div className={isShoulderSlotSelected 
                ? `text-center ${shoulderImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${shoulderImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/shouldersSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/shouldersSlotLG.png)]'
              }
              title={shouldersToolTip}
              onClick={isShoulderSlotSelected ? () => handleSlotClick('Shoulders') : undefined}
              onContextMenu={isShoulderSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('Shoulders')) : undefined}>

            </div>
            <div className={isHandsSlotSelected 
                ? `text-center ${handsImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${handsImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/handSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/handSlotLG.png)]'
              }
              title={handsToolTip}
              onClick={isHandsSlotSelected ? () => handleSlotClick('Hands') : undefined}
              onContextMenu={isHandsSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('Hands')) : undefined}>
            </div>
          </div>
        </div>

        {/* Weapon Slot */}
              
        <div className= {
          isWeaponSlotSelected
          ? 'weapon-slot w-full h-full mt-30 mb-20 p-2 bg-[#1f2533]/50 rounded-xl lg:h-80 lg:mb-20 cursor-pointer'
          : 'weapon-slot w-full h-full mt-30 mb-20 p-2 bg-[#1f2533] opacity-50 rounded-xl lg:h-80 lg:mb-20'
        }>
            <div id='weaponSlot' className={
              isWeaponSlotSelected
              ? 'text-center bg-[url(assets/PP7xs.png)] w-full h-full mx-2 lg:w-full lg:h-full lg:bg-[url(assets/pp7XL.png)]'
              : 'text-center w-full h-full bg-[url(assets/pp7Silx.png)] lg:bg-[url(assets/pp7SilxLG.png)]'
            }
            title={weaponToolTip}
            onClick={isWeaponSlotSelected ? () => handleSlotClick('weapon') : undefined}
            onContextMenu={isWeaponSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('weapon')) : undefined}>
            </div>
        </div>

        {/* Food, booster, med slots */}

        <h1 className='text-white'>Misc. Slots</h1>
        <div className='misc-slots flex flex-row w-full justify-center mb-5 p-2 lg:mb-0 lg:mt-5'>
        <div className={isFoodSlotSelected 
                ? `text-center ${foodImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${foodImgLG} cursor-pointer`
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }
              title={foodToolTip}
              onClick={isFoodSlotSelected ? () => handleSlotClick('food') : undefined}
              onContextMenu={isFoodSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('food')) : undefined}>

        </div>
            
        <div className={isMedSlotSelected 
              ? `text-center ${medImg} w-16 h-16 mx-2 lg:w-32 lg:h-32 ${medImgLG} cursor-pointer`
              : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }
              title={medToolTip}
              onClick={isMedSlotSelected ? () => handleSlotClick('med') : undefined}
              onContextMenu={isMedSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('med')) : undefined}>
        </div>
        
        <div className={isBoosterSlotSelected 
                ? 'text-center bg-[url(assets/fakeCoca1.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/fakeCoca1LG.png)] cursor-pointer'
                : 'text-center bg-[url(assets/miscSlot.png)] w-16 h-16 mx-2 lg:w-32 lg:h-32 lg:bg-[url(assets/miscSlotLG.png)]'
              }
              title={boosterToolTip}
              onClick={isBoosterSlotSelected ? () => handleSlotClick('booster') : undefined}
              onContextMenu={isBoosterSlotSelected ? (toolTipShown ? () => setToolTipShown(false) : () => handleToolTipItem('booster')) : undefined}>
        </div>
        </div>
      </div>

  </>
)




}


export default SlotsMenu;
