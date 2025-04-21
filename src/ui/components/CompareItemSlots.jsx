/* eslint-disable no-unused-vars */
import FoodMenuCompare from "./FoodMenuCompare";
import MedsMenuCompare from "./MedsMenuCompare";
import BoosterMenuCompare from "./BoosterMenuCompare";
import WeaponsMenuCompare from "./WeaponsMenuCompare";
import ArmorMenuCompareOne from "./ArmorMenuCompareOne";
import ArmorMenuCompareTwo from "./ArmorMenuCompareTwo";
import { useState, useEffect } from "react";


const CompareItemSlots = ({
  firstCompareItemsObjects,
  setFirstCompareItemObjects,
  secondCompareItemsObjects,
  setSecondCompareItemObjects,
  compareSlotTypesOne,
  setCompareSlotTypesOne,
  compareSlotTypesTwo,
  setCompareSlotTypesTwo,
  currentCompareItemObject,
  setCurrentCompareItemObject,
  handleCompareSlotClickOne,
  handleCompareSlotClickTwo,
  selectedArmorTypeOne,
  setSelectedArmorTypeOne,
  selectedArmorTypeTwo,
  setSelectedArmorTypeTwo,
  selectedArmorType,
  setSelectedArmorType,
  handleArmorSlotClickOne,
  handleArmorSlotClickTwo
}) => {

    // Checks if slots are selected on compareSlotTypesOne
    const isHelmetSlotSelectedOne = compareSlotTypesOne.includes('Helmet');
    const isTorsoSlotSelectedOne = compareSlotTypesOne.includes('Torso');
    const isArmsSlotSelectedOne = compareSlotTypesOne.includes('Arms');
    const isShoulderSlotSelectedOne = compareSlotTypesOne.includes('Shoulders');
    const isLegsSlotSelectedOne = compareSlotTypesOne.includes('Legs');
    const isHandsSlotSelectedOne = compareSlotTypesOne.includes('Hands');
    const isWeaponSlotSelectedOne = compareSlotTypesOne.includes('weapon');
    const isFoodSlotSelectedOne = compareSlotTypesOne.includes('food');
    const isBoosterSlotSelectedOne = compareSlotTypesOne.includes('booster');
    const isMedSlotSelectedOne = compareSlotTypesOne.includes('med');
  
     // Checks if slots are selected on compareSlotTypesTwo
     const isHelmetSlotSelectedTwo = compareSlotTypesTwo.includes('Helmet');
     const isTorsoSlotSelectedTwo = compareSlotTypesTwo.includes('Torso');
     const isArmsSlotSelectedTwo = compareSlotTypesTwo.includes('Arms');
     const isShoulderSlotSelectedTwo = compareSlotTypesTwo.includes('Shoulders');
     const isLegsSlotSelectedTwo = compareSlotTypesTwo.includes('Legs');
     const isHandsSlotSelectedTwo = compareSlotTypesTwo.includes('Hands');
     const isWeaponSlotSelectedTwo = compareSlotTypesTwo.includes('weapon');
     const isFoodSlotSelectedTwo = compareSlotTypesTwo.includes('food');
     const isBoosterSlotSelectedTwo = compareSlotTypesTwo.includes('booster');
     const isMedSlotSelectedTwo = compareSlotTypesTwo.includes('med');

    //  Image Handling Logic for firstCompareItemsObjects

    const weaponItemOne = firstCompareItemsObjects.find((item) => item.slot === 'weapon');
    const weaponItemNameOne = weaponItemOne ? weaponItemOne.weapon_name : undefined;
    const weaponImgOne = weaponItemOne ? weaponItemOne.image_path_xs : undefined;
    const weaponImgOneMD = weaponItemOne ? weaponItemOne.image_path_md : undefined;
    const weaponImgLG = weaponItemOne ? weaponItemOne.image_path_sm : undefined;
    const weaponStatsOne = weaponItemOne ? weaponItemOne.stats : undefined;
    const weaponToolTipStatsOne = weaponStatsOne
    ? Object.entries(weaponStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const weaponToolTipNameOne = weaponItemNameOne
    ? `${weaponItemNameOne}\n${'-'.repeat(weaponItemNameOne.length)}\n` 
    : '';
    const weaponToolTipOne = weaponToolTipStatsOne && weaponToolTipNameOne
    ? weaponToolTipNameOne + weaponToolTipStatsOne
    : ''

    const foodItemOne = firstCompareItemsObjects.find((item) => item.slot === 'food');
    const foodItemNameOne = foodItemOne ? foodItemOne.food_name : undefined;
    const foodImgOne = foodItemOne ? foodItemOne.image_path_xs : undefined;
    const foodImgOneMD = foodItemOne ? foodItemOne.image_path_md : undefined;
    const foodImgLG = foodItemOne ? foodItemOne.image_path_sm : undefined;
    const foodStatsOne = foodItemOne ? foodItemOne.stats : undefined;
    const foodToolTipStatsOne = foodStatsOne
    ? Object.entries(foodStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const foodToolTipNameOne = foodItemNameOne
    ? `${foodItemNameOne}\n${'-'.repeat(foodItemNameOne.length)}\n` 
    : '';
    const foodToolTipOne = foodToolTipStatsOne && foodToolTipNameOne
    ? foodToolTipNameOne + foodToolTipStatsOne
    : ''

    const medItemOne = firstCompareItemsObjects.find((item) => item.slot === 'med');
    const medItemNameOne = medItemOne ? medItemOne.med_name : undefined;
    const medImgOne = medItemOne ? medItemOne.image_path_xs : undefined;
    const medImgOneMD = medItemOne ? medItemOne.image_path_md : undefined;
    const medImgLGOne = medItemOne ? medItemOne.image_path_sm : undefined;
    const medStatsOne = medItemOne ? medItemOne.stats : undefined;
    const medToolTipStatsOne = medStatsOne
    ? Object.entries(medStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const medToolTipNameOne = medItemNameOne
    ? `${medItemNameOne}\n${'-'.repeat(medItemNameOne.length)}\n` 
    : '';
    const medToolTipOne = medToolTipStatsOne && medToolTipNameOne 
    ? medToolTipNameOne + medToolTipStatsOne
    : ''

    const boosterItemOne = firstCompareItemsObjects.find((item) => item.slot === 'booster');
    const boosterItemNameOne = boosterItemOne ? boosterItemOne.booster_name : undefined;
    const boosterImgOne = boosterItemOne ? boosterItemOne.image_path_xs : undefined;
    const boosterImgOneMD = boosterItemOne ? boosterItemOne.image_path_md : undefined;
    const boosterImgLGOne = boosterItemOne ?boosterItemOne.image_path_sm : undefined;
    const boosterStatsOne = boosterItemOne ? boosterItemOne.stats : undefined;
    const boosterToolTipStatsOne = boosterStatsOne
    ? Object.entries(boosterStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const boosterToolTipNameOne = boosterItemNameOne
    ? `${boosterItemNameOne}\n${'-'.repeat(boosterItemNameOne.length)}\n` 
    : '';
    const boosterToolTipOne = boosterToolTipStatsOne && boosterToolTipNameOne
    ? boosterToolTipNameOne + boosterToolTipStatsOne
    : ''

    const helmetItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Helmet');
    const helmetItemNameOne = helmetItemOne ? helmetItemOne.armor_name : undefined;
    const helmetImgOne = helmetItemOne ? helmetItemOne.image_path_xs : undefined;
    const helmetImgOneMD = helmetItemOne ? helmetItemOne.image_path_md : undefined;
    const helmetImgLGOne = helmetItemOne ? helmetItemOne.image_path_sm : undefined;
    const helmetStatsOne = helmetItemOne ? helmetItemOne.stats : undefined;
    const helmetToolTipStatsOne = helmetStatsOne
    ? Object.entries(helmetStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const helmetToolTipNameOne = helmetItemNameOne
    ? `${helmetItemNameOne}\n${'-'.repeat(helmetItemNameOne.length)}\n` 
    : '';
    const helmetToolTipOne = helmetToolTipStatsOne && helmetToolTipNameOne
    ? helmetToolTipNameOne + helmetToolTipStatsOne
    : ''

    
    const torsoItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Torso');
    const torsoItemNameOne = torsoItemOne ? torsoItemOne.armor_name : undefined;
    const torsoImgOne = torsoItemOne ? torsoItemOne.image_path_xs : undefined;
    const torsoImgOneMD = torsoItemOne ? torsoItemOne.image_path_md : undefined;
    const torsoImgLGOne = torsoItemOne ? torsoItemOne.image_path_sm : undefined;
    const torsoStatsOne = torsoItemOne ? torsoItemOne.stats : undefined;
    const torsoToolTipStatsOne = torsoStatsOne
    ? Object.entries(torsoStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const torsoToolTipNameOne = torsoItemNameOne
    ? `${torsoItemNameOne}\n${'-'.repeat(torsoItemNameOne.length)}\n` 
    : '';
    const torsoToolTipOne = torsoToolTipStatsOne && torsoToolTipNameOne
    ? torsoToolTipNameOne + torsoToolTipStatsOne
    : ''

    const armsItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Arms');
    const armsItemNameOne = armsItemOne ? armsItemOne.armor_name : undefined;
    const armsImgOne = armsItemOne ? armsItemOne.image_path_xs : undefined;
    const armsImgOneMD = armsItemOne ? armsItemOne.image_path_md : undefined;
    const armsImgLGOne = armsItemOne ? armsItemOne.image_path_sm : undefined;
    const armsStatsOne = armsItemOne ? armsItemOne.stats : undefined;
    const armsToolTipStatsOne = armsStatsOne
    ? Object.entries(armsStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const armsToolTipNameOne = armsItemNameOne
    ? `${armsItemNameOne}\n${'-'.repeat(armsItemNameOne.length)}\n` 
    : '';
    const armsToolTipOne = armsToolTipStatsOne && armsToolTipNameOne
    ? armsToolTipNameOne + armsToolTipStatsOne
    : ''

    const legsItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Legs');
    const legsItemNameOne = legsItemOne ? legsItemOne.armor_name : undefined;
    const legsImgOne = legsItemOne ? legsItemOne.image_path_xs : undefined;
    const legsImgOneMD = legsItemOne ? legsItemOne.image_path_md : undefined;
    const legsImgLGOne = legsItemOne ? legsItemOne.image_path_sm : undefined;
    const legsStatsOne = legsItemOne ? legsItemOne.stats : undefined;
    const legsToolTipStatsOne = legsStatsOne
    ? Object.entries(legsStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const legsToolTipNameOne = legsItemNameOne
    ? `${legsItemNameOne}\n${'-'.repeat(legsItemNameOne.length)}\n` 
    : '';
    const legsToolTipOne = legsToolTipStatsOne && legsToolTipNameOne
    ? legsToolTipNameOne + legsToolTipStatsOne
    : ''

    const shouldersItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Shoulders');
    const shouldersItemNameOne = shouldersItemOne ? shouldersItemOne.armor_name : undefined;
    const shouldersImgOne = shouldersItemOne ? shouldersItemOne.image_path_xs : undefined;
    const shouldersImgOneMD = shouldersItemOne ? shouldersItemOne.image_path_md : undefined;
    const shouldersImgLGOne = shouldersItemOne ? shouldersItemOne.image_path_sm : undefined;
    const shouldersStatsOne = shouldersItemOne ? shouldersItemOne.stats : undefined;
    const shouldersToolTipStatsOne = shouldersStatsOne
    ? Object.entries(shouldersStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const shouldersToolTipNameOne = shouldersItemNameOne
    ? `${shouldersItemNameOne}\n${'-'.repeat(shouldersItemNameOne.length)}\n` 
    : '';
    const shouldersToolTipOne = shouldersToolTipStatsOne && shouldersToolTipNameOne
    ? shouldersToolTipNameOne + shouldersToolTipStatsOne
    : ''

    const handsItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Hands');
    const handsItemNameOne = handsItemOne ? handsItemOne.armor_name : undefined;
    const handsImgOne = handsItemOne ? handsItemOne.image_path_xs : undefined;
    const handsImgOneMD = handsItemOne ? handsItemOne.image_path_md : undefined;
    const handsImgLGOne = handsItemOne ? handsItemOne.image_path_sm : undefined;
    const handsStatsOne = handsItemOne ? handsItemOne.stats : undefined;
    const handsToolTipStatsOne = handsStatsOne
    ? Object.entries(handsStatsOne).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const handsToolTipNameOne = handsItemNameOne
    ? `${handsItemNameOne}\n${'-'.repeat(handsItemNameOne.length)}\n` 
    : '';
    const handsToolTipOne = handsToolTipStatsOne && handsToolTipNameOne
    ? handsToolTipNameOne + handsToolTipStatsOne
    : ''
    //  Image Handling Logic for secondCompareItemsObjects



    const weaponItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'weapon');
    const weaponItemNameTwo = weaponItemTwo ? weaponItemTwo.weapon_name : undefined;
    const weaponImgTwoMD = weaponItemTwo ? weaponItemTwo.image_path_md : undefined;
    const weaponStatsTwo = weaponItemTwo ? weaponItemTwo.stats : undefined;
    const weaponToolTipStatsTwo = weaponStatsTwo
    ? Object.entries(weaponStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const weaponToolTipNameTwo = weaponItemNameTwo
    ? `${weaponItemNameTwo}\n${'-'.repeat(weaponItemNameTwo.length)}\n` 
    : '';
    const weaponToolTipTwo = weaponToolTipStatsTwo && weaponToolTipNameTwo
    ? weaponToolTipNameTwo + weaponToolTipStatsTwo
    : ''

    const foodItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'food');
    const foodItemNameTwo = foodItemTwo ? foodItemTwo.food_name : undefined;
    const foodImgTwo = foodItemTwo ? foodItemTwo.image_path_xs : undefined;
    const foodImgTwoMD = foodItemTwo ? foodItemTwo.image_path_md : undefined;
    const foodStatsTwo = foodItemTwo ? foodItemTwo.stats : undefined;
    const foodToolTipStatsTwo = foodStatsTwo
    ? Object.entries(foodStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const foodToolTipNameTwo = foodItemNameTwo
    ? `${foodItemNameTwo}\n${'-'.repeat(foodItemNameTwo.length)}\n` 
    : '';
    const foodToolTipTwo = foodToolTipStatsTwo && foodToolTipNameTwo
    ? foodToolTipNameTwo + foodToolTipStatsTwo
    : ''

    const medItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'med');
    const medItemNameTwo = medItemTwo ? medItemTwo.med_name : undefined;
    const medImgTwo = medItemTwo ? medItemTwo.image_path_xs : undefined;
    const medImgTwoMD = medItemTwo ? medItemTwo.image_path_md : undefined;
    const medStatsTwo = medItemTwo ? medItemTwo.stats : undefined;
    const medToolTipStatsTwo = medStatsTwo
    ? Object.entries(medStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const medToolTipNameTwo = medItemNameTwo
    ? `${medItemNameTwo}\n${'-'.repeat(medItemNameTwo.length)}\n` 
    : '';
    const medToolTipTwo = medToolTipStatsTwo && medToolTipNameTwo
    ? medToolTipNameTwo + medToolTipStatsTwo
    : ''

    const boosterItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'booster');
    const boosterItemNameTwo = boosterItemTwo ? boosterItemTwo.booster_name : undefined;
    const boosterImgTwo = boosterItemTwo ? boosterItemTwo.image_path_xs : undefined;
    const boosterImgTwoMD = boosterItemTwo ? boosterItemTwo.image_path_md : undefined;
    const boosterStatsTwo = boosterItemTwo ? boosterItemTwo.stats : undefined;
    const boosterToolTipStatsTwo = boosterStatsTwo
    ? Object.entries(boosterStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const boosterToolTipNameTwo = boosterItemNameTwo
    ? `${boosterItemNameTwo}\n${'-'.repeat(boosterItemNameTwo.length)}\n` 
    : '';
    const boosterToolTipTwo = boosterToolTipStatsTwo && boosterToolTipNameTwo
    ? boosterToolTipNameTwo + boosterToolTipStatsTwo
    : ''

    const helmetItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Helmet');
    const helmetItemNameTwo = helmetItemTwo ? helmetItemTwo.armor_name : undefined;
    const helmetImgTwo = helmetItemTwo ? helmetItemTwo.image_path_xs : undefined;
    const helmetImgTwoMD = helmetItemTwo ? helmetItemTwo.image_path_md : undefined;
    const helmetStatsTwo = helmetItemTwo ? helmetItemTwo.stats : undefined;
    const helmetToolTipStatsTwo = helmetStatsTwo
    ? Object.entries(helmetStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const helmetToolTipNameTwo = helmetItemNameTwo
    ? `${helmetItemNameTwo}\n${'-'.repeat(helmetItemNameTwo.length)}\n` 
    : '';
    const helmetToolTipTwo = helmetToolTipStatsTwo && helmetToolTipNameTwo
    ? helmetToolTipNameTwo + helmetToolTipStatsTwo
    : '' 

    const torsoItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Torso');
    const torsoItemNameTwo = torsoItemTwo ? torsoItemTwo.armor_name : undefined;
    const torsoImgTwo = torsoItemTwo ? torsoItemTwo.image_path_xs : undefined;
    const torsoImgTwoMD = torsoItemTwo ? torsoItemTwo.image_path_md : undefined;
    const torsoStatsTwo = torsoItemTwo ? torsoItemTwo.stats : undefined;
    const torsoToolTipStatsTwo = torsoStatsTwo
    ? Object.entries(torsoStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const torsoToolTipNameTwo = torsoItemNameTwo
    ? `${torsoItemNameTwo}\n${'-'.repeat(torsoItemNameTwo.length)}\n` 
    : '';
    const torsoToolTipTwo = torsoToolTipStatsTwo && torsoToolTipNameTwo
    ? torsoToolTipNameTwo + torsoToolTipStatsTwo
    : ''

    const armsItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Arms');
    const armsItemNameTwo = armsItemTwo ? armsItemTwo.armor_name : undefined;
    const armsImgTwo = armsItemTwo ? armsItemTwo.image_path_xs : undefined;
    const armsImgTwoMD = armsItemTwo ? armsItemTwo.image_path_md : undefined;
    const armsStatsTwo = armsItemTwo ? armsItemTwo.stats : undefined;
    const armsToolTipStatsTwo = armsStatsTwo
    ? Object.entries(armsStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const armsToolTipNameTwo = armsItemNameTwo
    ? `${armsItemNameTwo}\n${'-'.repeat(armsItemNameTwo.length)}\n` 
    : '';
    const armsToolTipTwo = armsToolTipStatsTwo && armsToolTipNameTwo
    ? armsToolTipNameTwo + armsToolTipStatsTwo
    : ''

    const legsItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Legs');
    const legsItemNameTwo = legsItemTwo ? legsItemTwo.armor_name : undefined;
    const legsImgTwo = legsItemTwo ? legsItemTwo.image_path_xs : undefined;
    const legsImgTwoMD = legsItemTwo ? legsItemTwo.image_path_md : undefined;
    const legsStatsTwo = legsItemTwo ? legsItemTwo.stats : undefined;
    const legsToolTipStatsTwo = legsStatsTwo
    ? Object.entries(legsStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const legsToolTipNameTwo = legsItemNameTwo
    ? `${legsItemNameTwo}\n${'-'.repeat(legsItemNameTwo.length)}\n` 
    : '';
    const legsToolTipTwo = legsToolTipStatsTwo && legsToolTipNameTwo
    ? legsToolTipNameTwo + legsToolTipStatsTwo
    : ''

    const shouldersItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Shoulders');
    const shouldersItemNameTwo = shouldersItemTwo ? shouldersItemTwo.armor_name : undefined;
    const shouldersImgTwo = shouldersItemTwo ? shouldersItemTwo.image_path_xs : undefined;
    const shouldersImgTwoMD = shouldersItemTwo ? shouldersItemTwo.image_path_md : undefined;
    const shouldersStatsTwo = shouldersItemTwo ? shouldersItemTwo.stats : undefined;
    const shouldersToolTipStatsTwo = shouldersStatsTwo
    ? Object.entries(shouldersStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const shouldersToolTipNameTwo = shouldersItemNameTwo
    ? `${shouldersItemNameTwo}\n${'-'.repeat(shouldersItemNameTwo.length)}\n` 
    : '';
    const shouldersToolTipTwo = shouldersToolTipStatsTwo && shouldersToolTipNameTwo
    ? shouldersToolTipNameTwo + shouldersToolTipStatsTwo
    : ''

    const handsItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Hands');
    const handsItemNameTwo = handsItemTwo ? handsItemTwo.armor_name : undefined;
    const handsImgTwo = handsItemTwo ? handsItemTwo.image_path_xs : undefined;
    const handsImgTwoMD = handsItemTwo ? handsItemTwo.image_path_md : undefined;
    const handsStatsTwo = handsItemTwo ? handsItemTwo.stats : undefined;
    const handsToolTipStatsTwo = handsStatsTwo
    ? Object.entries(handsStatsTwo).map(([statName, statValue]) => `${statName}: ${statValue}`).join('\n')
    : ''
    const handsToolTipNameTwo = handsItemNameTwo
    ? `${handsItemNameTwo}\n${'-'.repeat(handsItemNameTwo.length)}\n` 
    : '';
    const handsToolTipTwo = handsToolTipStatsTwo && handsToolTipNameTwo
    ? handsToolTipNameTwo + handsToolTipStatsTwo
    : ''

  const [selectedCategory, setSelectedCategory] = useState(null);

const handleCategoryClickOne = (category) => {
  setSelectedCategory(category);
  setCurrentCompareItemObject(1);
};

const handleCategoryClickTwo = (category) => {
  setSelectedCategory(category);
  setCurrentCompareItemObject(2);
};

const handleArmorTypeClickOne = (armorType) => {
  setSelectedArmorType(armorType);
  setSelectedCategory('armor1')
  setCurrentCompareItemObject(1);
};


const handleArmorTypeClickTwo = (armorType) => {
  setSelectedArmorType(armorType);
  setSelectedCategory('armor2')
  setCurrentCompareItemObject(2);
};

const clearCategory = () => { 
  setSelectedCategory(null);
};

// Handles clearing categories on esc key press
useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      clearCategory();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);

// Closes menu window after an item is selected
useEffect(() => {
  clearCategory();
}, [
  isFoodSlotSelectedOne, 
  isFoodSlotSelectedTwo, 
  isMedSlotSelectedOne, 
  isMedSlotSelectedTwo, 
  isBoosterSlotSelectedOne, 
  isBoosterSlotSelectedTwo, 
  isWeaponSlotSelectedOne,
  isWeaponSlotSelectedTwo,
  isHelmetSlotSelectedOne,
  isTorsoSlotSelectedOne,
  isShoulderSlotSelectedOne,
  isLegsSlotSelectedOne,
  isHandsSlotSelectedOne,
  isArmsSlotSelectedOne,
  isHelmetSlotSelectedTwo,
  isTorsoSlotSelectedTwo,
  isShoulderSlotSelectedTwo,
  isLegsSlotSelectedTwo,
  isHandsSlotSelectedTwo,
  isArmsSlotSelectedTwo,
]);

  return (
    <>
      <div className="compare-item-slots-container overflow-hidden">
      {selectedCategory === null && (
        <>
          <div className="item-slots-1 flex flex-col  w-full h-1/2 items-center">
            
          <div className="HTS-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div className={isHelmetSlotSelectedOne
                ? `helmetSlot1 ${helmetImgOne} w-[60px] h-[60px] ${helmetImgOneMD} lg:w-[90px] lg:h-[90px] mx-1 cursor-pointer`
                : "helmetSlot1 lg:bg-[url(assets/headSlot-md.png)] bg-[url(assets/headSlot-sm.png)] lg:w-[90px] lg:h-[90px] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isHelmetSlotSelectedOne ? () => handleArmorSlotClickOne('Helmet') : () => handleArmorTypeClickOne('Helmet')} title={helmetToolTipOne}></div>

            <div className={isTorsoSlotSelectedOne
                ? `torsoSlot1 ${torsoImgOne} w-[60px] h-[60px] ${torsoImgOneMD} lg:w-[90px] lg:h-[90px] lg:mx-1 cursor-pointer`
                : "torsoSlot1 bg-[url(assets/torsoSlot-sm.png)] lg:bg-[url(assets/torsoSlot-md.png)] lg:w-[90px] lg:h-[90px] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isTorsoSlotSelectedOne ? () => handleArmorSlotClickOne('Torso') : () => handleArmorTypeClickOne('Torso')} title={torsoToolTipOne}></div>
              
            <div className={isArmsSlotSelectedOne
                ? `armsSlot1 ${armsImgOne} w-[60px] h-[60px]  ${armsImgOneMD} lg:w-[90px] lg:h-[90px] mx-1 cursor-pointer`
                : "armsSlot1 bg-[url(assets/armSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer  lg:bg-[url(assets/armSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isArmsSlotSelectedOne ? () => handleArmorSlotClickOne('Arms') : () => handleArmorTypeClickOne('Arms')} title={armsToolTipOne}></div>
          </div>

          <div className="LSH-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div className={isLegsSlotSelectedOne
                ? `armsSlot1 ${legsImgOne} w-[60px] h-[60px]  ${legsImgOneMD} lg:w-[90px] lg:h-[90px] mx-1 cursor-pointer`
                : "armsSlot1 bg-[url(assets/legSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/legSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isLegsSlotSelectedOne ? () => handleArmorSlotClickOne('Legs') : () => handleArmorTypeClickOne('Legs')} title={legsToolTipOne}></div>


            <div className={isShoulderSlotSelectedOne
                ? `armsSlot1 ${shouldersImgOne} w-[60px] h-[60px]  ${shouldersImgOneMD} lg:w-[90px] lg:h-[90px] mx-1 cursor-pointer`
                : "armsSlot1 bg-[url(assets/shouldersSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/shouldersSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isShoulderSlotSelectedOne ? () => handleArmorSlotClickOne('Shoulders') : () => handleArmorTypeClickOne('Shoulders')}  title={shouldersToolTipOne}></div>

            <div className={isHandsSlotSelectedOne
                ? `armsSlot1 ${handsImgOne} w-[60px] h-[60px]  ${handsImgOneMD} lg:w-[90px] lg:h-[90px] mx-1 cursor-pointer`
                : "armsSlot1 bg-[url(assets/handSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/handSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isHandsSlotSelectedOne ? () => handleArmorSlotClickOne('Hands') : () => handleArmorTypeClickOne('Hands')} title={handsToolTipOne}></div>
          </div>

          <div className="misc-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div 

              className={isFoodSlotSelectedOne
                ? `foodSlot1 ${foodImgOne} w-[60px] h-[60px] mx-1 cursor-pointer ${foodImgOneMD} lg:w-[90px] lg:h-[90px] `
                : "foodSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/miscSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isFoodSlotSelectedOne ? () => handleCompareSlotClickOne('food') : () => handleCategoryClickOne('food')} title={foodToolTipOne}></div>

            <div className={isMedSlotSelectedOne
                ? `medSlot1 ${medImgOne} w-[60px] h-[60px] mx-1 cursor-pointer ${medImgOneMD} lg:w-[90px] lg:h-[90px]`
                : "medSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/miscSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isMedSlotSelectedOne ? () => handleCompareSlotClickOne('med') : () => handleCategoryClickOne('med')} title={medToolTipOne}></div>

            <div className={isBoosterSlotSelectedOne
                ? `medSlot1 ${boosterImgOne} w-[60px] h-[60px] mx-1 cursor-pointer ${boosterImgOneMD} lg:w-[90px] lg:h-[90px]`
                : "medSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/miscSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isBoosterSlotSelectedOne ? () => handleCompareSlotClickOne('booster') : () => handleCategoryClickOne('booster')} title={boosterToolTipOne}></div>
        </div>

          <div className="weapon-slot-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div className="bg-[#1f2533] opacity-50 lg:opacity-100 w-[200px] h-[80px]  lg:w-[275px] lg:h-[110px] mx-1 rounded-lg cursor-pointer">
              <div className={isWeaponSlotSelectedOne
                ? `weaponSlot1 bg-[url(assets/PP7xs-sm.png)]  lg:bg-[url(assets/PP7xs-md.png)] w-full h-full bg-auto`
                : 'w-full h-full'
              }
              onClick={isWeaponSlotSelectedOne ? () => handleCompareSlotClickOne('weapon') : () => handleCategoryClickOne('weapon')} title={weaponToolTipOne}>

              </div>
            </div>
          </div>
        
      </div>

      <div className="item-slots-2 flex flex-col w-full h-1/2 items-center lg:mt-55">
        
      <div className="HTS-slots-2 w-full h-1/3 item-center flex flex-row mt-1">
            <div className={isHelmetSlotSelectedTwo
                ? `helmetSlot2  ${helmetImgTwoMD} lg:w-[90px] lg:h-[90px] ${helmetImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "helmetSlot2 bg-[url(assets/headSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/headSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isHelmetSlotSelectedTwo ? () => handleArmorSlotClickTwo('Helmet') : () => handleArmorTypeClickTwo('Helmet')} title={helmetToolTipTwo}></div>

            <div className={isTorsoSlotSelectedTwo
                ? `torsoSlot2  ${torsoImgTwoMD} lg:w-[90px] lg:h-[90px] ${torsoImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "torsoSlot2 bg-[url(assets/torsoSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/torsoSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isTorsoSlotSelectedTwo ? () => handleArmorSlotClickTwo('Torso') : () => handleArmorTypeClickTwo('Torso')} title={torsoToolTipTwo}></div>
              
            <div className={isArmsSlotSelectedTwo
                ? `armsSlot2  ${armsImgTwoMD} lg:w-[90px] lg:h-[90px] ${armsImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "armsSlot2 bg-[url(assets/armSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/armSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isArmsSlotSelectedTwo ? () => handleArmorSlotClickTwo('Arms') : () => handleArmorTypeClickTwo('Arms')} title={armsToolTipTwo}></div>
          </div>

          <div className="LSH-slots-2 w-full h-1/3 item-center flex flex-row mt-1">
            <div className={isLegsSlotSelectedTwo
                ? `legsSlot2  ${legsImgTwoMD} lg:w-[90px] lg:h-[90px] ${legsImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "legsSlot2 bg-[url(assets/legSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/legSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isLegsSlotSelectedTwo ? () => handleArmorSlotClickTwo('Legs') : () => handleArmorTypeClickTwo('Legs')} title={legsToolTipTwo}></div>

            <div className={isShoulderSlotSelectedTwo
                ? `shoulderSlot2  ${shouldersImgTwoMD} lg:w-[90px] lg:h-[90px] ${shouldersImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "shoulderSlot2 bg-[url(assets/shouldersSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/shouldersSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isShoulderSlotSelectedTwo ? () => handleArmorSlotClickTwo('Shoulders') : () => handleArmorTypeClickTwo('Shoulders')} title={shouldersToolTipTwo}></div>

            <div className={isHandsSlotSelectedTwo
                ? `handsSlot2  ${handsImgTwoMD} lg:w-[90px] lg:h-[90px] ${handsImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "handsSlot2 bg-[url(assets/handSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/handSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isHandsSlotSelectedTwo ? () => handleArmorSlotClickTwo('Hands') : () => handleArmorTypeClickTwo('Hands')} title={handsToolTipTwo}></div>
          </div>

        <div className="misc-slots-2 w-full h-1/3 item-center flex flex-row mt-1">

          <div 
          className={isFoodSlotSelectedTwo
            ? `foodSlot2  ${foodImgTwoMD} lg:w-[90px] lg:h-[90px] ${foodImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
            : "foodSlot2 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/miscSlot-md.png)] lg:w-[90px] lg:h-[90px] "
          }
          onClick={isFoodSlotSelectedTwo ? () => handleCompareSlotClickTwo('food') : () => handleCategoryClickTwo('food')} title={foodToolTipTwo}>

          </div>

          <div className={isMedSlotSelectedTwo
                ? `medSlot1  ${medImgTwoMD} lg:w-[90px] lg:h-[90px] ${medImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "medSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/miscSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isMedSlotSelectedTwo ? () => handleCompareSlotClickTwo('med') : () => handleCategoryClickTwo('med')} title={medToolTipTwo}></div>

          <div className={isBoosterSlotSelectedTwo
                ? `medSlot1  ${boosterImgTwoMD} lg:w-[90px] lg:h-[90px] ${boosterImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "medSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer lg:bg-[url(assets/miscSlot-md.png)] lg:w-[90px] lg:h-[90px] "
              }
              onClick={isBoosterSlotSelectedTwo ? () => handleCompareSlotClickTwo('booster') : () => handleCategoryClickTwo('booster')} title={boosterToolTipTwo}></div>
        </div>

        <div className="weapon-slot-2 w-full h-1/3 item-center flex flex-row mt-1 cursor-pointer">
          <div className="bg-[#1f2533] opacity-50 lg:opacity-100 w-[200px] h-[80px] lg:w-[275px] lg:h-[120px] mx-1 rounded-lg">
          <div className={isWeaponSlotSelectedTwo
                ? `weaponSlot1 bg-[url(assets/PP7xs-sm.png)] lg:bg-[url(assets/PP7xs-md.png)] w-full h-full bg-auto`
                : 'w-full h-full'
              }
              onClick={isWeaponSlotSelectedTwo ? () => handleCompareSlotClickTwo('weapon') : () => handleCategoryClickTwo('weapon')} title={weaponToolTipTwo}>

              </div>
          </div>
        </div>
      
      </div>
    </> )}
        
        {selectedCategory === 'food' &&  (
          <FoodMenuCompare 
          firstCompareItemsObjects={firstCompareItemsObjects}
          setFirstCompareItemObjects={setFirstCompareItemObjects}
          secondCompareItemsObjects={secondCompareItemsObjects}
          setSecondCompareItemObjects={setSecondCompareItemObjects}
          compareSlotTypesOne={compareSlotTypesOne}
          setCompareSlotTypesOne={setCompareSlotTypesOne}
          compareSlotTypesTwo={compareSlotTypesTwo}
          setCompareSlotTypesTwo={setCompareSlotTypesTwo}
          currentCompareItemObject={currentCompareItemObject}
          setCurrentCompareItemObject={setCurrentCompareItemObject}
          />
        )}

        {selectedCategory === 'med' &&  (
          <MedsMenuCompare 
          firstCompareItemsObjects={firstCompareItemsObjects}
          setFirstCompareItemObjects={setFirstCompareItemObjects}
          secondCompareItemsObjects={secondCompareItemsObjects}
          setSecondCompareItemObjects={setSecondCompareItemObjects}
          compareSlotTypesOne={compareSlotTypesOne}
          setCompareSlotTypesOne={setCompareSlotTypesOne}
          compareSlotTypesTwo={compareSlotTypesTwo}
          setCompareSlotTypesTwo={setCompareSlotTypesTwo}
          currentCompareItemObject={currentCompareItemObject}
          setCurrentCompareItemObject={setCurrentCompareItemObject}
          />
        )}

        {selectedCategory === 'booster' &&  (
          <BoosterMenuCompare 
          firstCompareItemsObjects={firstCompareItemsObjects}
          setFirstCompareItemObjects={setFirstCompareItemObjects}
          secondCompareItemsObjects={secondCompareItemsObjects}
          setSecondCompareItemObjects={setSecondCompareItemObjects}
          compareSlotTypesOne={compareSlotTypesOne}
          setCompareSlotTypesOne={setCompareSlotTypesOne}
          compareSlotTypesTwo={compareSlotTypesTwo}
          setCompareSlotTypesTwo={setCompareSlotTypesTwo}
          currentCompareItemObject={currentCompareItemObject}
          setCurrentCompareItemObject={setCurrentCompareItemObject}
          />
        )}

        {selectedCategory === 'weapon' &&  (
          <WeaponsMenuCompare 
          firstCompareItemsObjects={firstCompareItemsObjects}
          setFirstCompareItemObjects={setFirstCompareItemObjects}
          secondCompareItemsObjects={secondCompareItemsObjects}
          setSecondCompareItemObjects={setSecondCompareItemObjects}
          compareSlotTypesOne={compareSlotTypesOne}
          setCompareSlotTypesOne={setCompareSlotTypesOne}
          compareSlotTypesTwo={compareSlotTypesTwo}
          setCompareSlotTypesTwo={setCompareSlotTypesTwo}
          currentCompareItemObject={currentCompareItemObject}
          setCurrentCompareItemObject={setCurrentCompareItemObject}
          />
        )}

        {selectedCategory === 'armor1' &&  (
          <ArmorMenuCompareOne
          firstCompareItemsObjects={firstCompareItemsObjects}
          setFirstCompareItemObjects={setFirstCompareItemObjects}
          secondCompareItemsObjects={secondCompareItemsObjects}
          setSecondCompareItemObjects={setSecondCompareItemObjects}
          compareSlotTypesOne={compareSlotTypesOne}
          setCompareSlotTypesOne={setCompareSlotTypesOne}
          compareSlotTypesTwo={compareSlotTypesTwo}
          setCompareSlotTypesTwo={setCompareSlotTypesTwo}
          currentCompareItemObject={currentCompareItemObject}
          setCurrentCompareItemObject={setCurrentCompareItemObject}
          selectedArmorTypeOne={selectedArmorTypeOne}
          setSelectedArmorTypeOne={setSelectedArmorTypeOne}
          selectedArmorTypeTwo={selectedArmorTypeTwo}
          setSelectedArmorTypeTwo={setSelectedArmorTypeTwo}
          selectedArmorType={selectedArmorType}
          setSelectedArmorType={setSelectedArmorType}
          />
        )}

        {selectedCategory === 'armor2' &&  (
          <ArmorMenuCompareTwo
          firstCompareItemsObjects={firstCompareItemsObjects}
          setFirstCompareItemObjects={setFirstCompareItemObjects}
          secondCompareItemsObjects={secondCompareItemsObjects}
          setSecondCompareItemObjects={setSecondCompareItemObjects}
          compareSlotTypesOne={compareSlotTypesOne}
          setCompareSlotTypesOne={setCompareSlotTypesOne}
          compareSlotTypesTwo={compareSlotTypesTwo}
          setCompareSlotTypesTwo={setCompareSlotTypesTwo}
          currentCompareItemObject={currentCompareItemObject}
          setCurrentCompareItemObject={setCurrentCompareItemObject}
          selectedArmorTypeOne={selectedArmorTypeOne}
          setSelectedArmorTypeOne={setSelectedArmorTypeOne}
          selectedArmorTypeTwo={selectedArmorTypeTwo}
          setSelectedArmorTypeTwo={setSelectedArmorTypeTwo}
          selectedArmorType={selectedArmorType}
          setSelectedArmorType={setSelectedArmorType}
          />
        )}
      </div>
    </>
  )
};


export default CompareItemSlots;
