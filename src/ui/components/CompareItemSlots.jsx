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

    const foodItemOne = firstCompareItemsObjects.find((item) => item.slot === 'food');
    const foodItemNameOne = foodItemOne ? foodItemOne.food_name : undefined;
    const foodImgOne = foodItemOne ? foodItemOne.image_path_xs : undefined;
    const foodImgLG = foodItemOne ? foodItemOne.image_path_sm : undefined;

    const medItemOne = firstCompareItemsObjects.find((item) => item.slot === 'med');
    const medItemNameOne = medItemOne ? medItemOne.med_name : undefined;
    const medImgOne = medItemOne ? medItemOne.image_path_xs : undefined;
    const medImgLGOne = medItemOne ? medItemOne.image_path_sm : undefined;

    const boosterItemOne = firstCompareItemsObjects.find((item) => item.slot === 'booster');
    const boosterItemNameOne = boosterItemOne ? boosterItemOne.booster_name : undefined;
    const boosterImgOne = boosterItemOne ? boosterItemOne.image_path_xs : undefined;
    const boosterImgLGOne = boosterItemOne ?boosterItemOne.image_path_sm : undefined;

    const helmetItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Helmet');
    const helmetItemNameOne = helmetItemOne ? helmetItemOne.armor_name : undefined;
    const helmetImgOne = helmetItemOne ? helmetItemOne.image_path_xs : undefined;
    const helmetImgLGOne = helmetItemOne ? helmetItemOne.image_path_sm : undefined;
    
    const torsoItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Torso');
    const torsoItemNameOne = torsoItemOne ? torsoItemOne.armor_name : undefined;
    const torsoImgOne = torsoItemOne ? torsoItemOne.image_path_xs : undefined;
    const torsoImgLGOne = torsoItemOne ? torsoItemOne.image_path_sm : undefined;

    const armsItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Arms');
    const armsItemNameOne = armsItemOne ? armsItemOne.armor_name : undefined;
    const armsImgOne = armsItemOne ? armsItemOne.image_path_xs : undefined;
    const armsImgLGOne = armsItemOne ? armsItemOne.image_path_sm : undefined;

    const legsItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Legs');
    const legsItemNameOne = legsItemOne ? legsItemOne.armor_name : undefined;
    const legsImgOne = legsItemOne ? legsItemOne.image_path_xs : undefined;
    const legsImgLGOne = legsItemOne ? legsItemOne.image_path_sm : undefined;

    const shouldersItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Shoulders');
    const shouldersItemNameOne = shouldersItemOne ? shouldersItemOne.armor_name : undefined;
    const shouldersImgOne = shouldersItemOne ? shouldersItemOne.image_path_xs : undefined;
    const shouldersImgLGOne = shouldersItemOne ? shouldersItemOne.image_path_sm : undefined;

    const handsItemOne = firstCompareItemsObjects.find((item) => item.slot === 'Hands');
    const handsItemNameOne = handsItemOne ? handsItemOne.armor_name : undefined;
    const handsImgOne = handsItemOne ? handsItemOne.image_path_xs : undefined;
    const handsImgLGOne = handsItemOne ? handsItemOne.image_path_sm : undefined;

    //  Image Handling Logic for secondCompareItemsObjects

    const foodItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'food');
    const foodItemNameTwo = foodItemTwo ? foodItemTwo.food_name : undefined;
    const foodImgTwo = foodItemTwo ? foodItemTwo.image_path_xs : undefined;
    const foodImgLGTwo = foodItemTwo ? foodItemTwo.image_path_sm : undefined;

    const medItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'med');
    const medItemNameTwo = medItemTwo ? medItemTwo.med_name : undefined;
    const medImgTwo = medItemTwo ? medItemTwo.image_path_xs : undefined;
    const medImgLGTwo = medItemTwo ? medItemTwo.image_path_sm : undefined;

    const boosterItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'booster');
    const boosterItemNameTwo = boosterItemTwo ? boosterItemTwo.booster_name : undefined;
    const boosterImgTwo = boosterItemTwo ? boosterItemTwo.image_path_xs : undefined;
    const boosterImgLGTwo = boosterItemTwo ? boosterItemTwo.image_path_sm : undefined;

    const helmetItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Helmet');
    const helmetItemNameTwo = helmetItemTwo ? helmetItemTwo.armor_name : undefined;
    const helmetImgTwo = helmetItemTwo ? helmetItemTwo.image_path_xs : undefined;
    const helmetImgLGTwo = helmetItemTwo ? helmetItemTwo.image_path_sm : undefined;
    
    const torsoItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Torso');
    const torsoItemNameTwo = torsoItemTwo ? torsoItemTwo.armor_name : undefined;
    const torsoImgTwo = torsoItemTwo ? torsoItemTwo.image_path_xs : undefined;
    const torsoImgLGTwo = torsoItemTwo ? torsoItemTwo.image_path_sm : undefined;

    const armsItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Arms');
    const armsItemNameTwo = armsItemTwo ? armsItemTwo.armor_name : undefined;
    const armsImgTwo = armsItemTwo ? armsItemTwo.image_path_xs : undefined;
    const armsImgLGTwo = armsItemTwo ? armsItemTwo.image_path_sm : undefined;

    const legsItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Legs');
    const legsItemNameTwo = legsItemTwo ? legsItemTwo.armor_name : undefined;
    const legsImgTwo = legsItemTwo ? legsItemTwo.image_path_xs : undefined;
    const legsImgLGTwo = legsItemTwo ? legsItemTwo.image_path_sm : undefined;

    const shouldersItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Shoulders');
    const shouldersItemNameTwo = shouldersItemTwo ? shouldersItemTwo.armor_name : undefined;
    const shouldersImgTwo = shouldersItemTwo ? shouldersItemTwo.image_path_xs : undefined;
    const shouldersImgLGTwo = shouldersItemTwo ? shouldersItemTwo.image_path_sm : undefined;

    const handsItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'Hands');
    const handsItemNameTwo = handsItemTwo ? handsItemTwo.armor_name : undefined;
    const handsImgTwo = handsItemTwo ? handsItemTwo.image_path_xs : undefined;
    const handsImgLGTwo = handsItemTwo ? handsItemTwo.image_path_sm : undefined;

    
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

console.log(selectedArmorType)

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

console.log(`Selected Category: ${selectedCategory}`)
  return (
    <>
      <div className="compare-item-slots-container">
      {selectedCategory === null && (
        <>
          <div className="item-slots-1 flex flex-col  w-full h-1/2 items-center">
            
          <div className="HTS-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div className={isHelmetSlotSelectedOne
                ? `helmetSlot1 ${helmetImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "helmetSlot1 bg-[url(assets/headSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isHelmetSlotSelectedOne ? () => handleArmorSlotClickOne('Helmet') : () => handleArmorTypeClickOne('Helmet')}></div>

            <div className={isTorsoSlotSelectedOne
                ? `torsoSlot1 ${torsoImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "torsoSlot1 bg-[url(assets/torsoSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isTorsoSlotSelectedOne ? () => handleArmorSlotClickOne('Torso') : () => handleArmorTypeClickOne('Torso')}></div>
              
            <div className={isArmsSlotSelectedOne
                ? `armsSlot1 ${armsImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "armsSlot1 bg-[url(assets/armSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isArmsSlotSelectedOne ? () => handleArmorSlotClickOne('Arms') : () => handleArmorTypeClickOne('Arms')}></div>
          </div>

          <div className="LSH-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div className={isLegsSlotSelectedOne
                ? `armsSlot1 ${legsImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "armsSlot1 bg-[url(assets/legSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isLegsSlotSelectedOne ? () => handleArmorSlotClickOne('Legs') : () => handleArmorTypeClickOne('Legs')}></div>

            <div className={isShoulderSlotSelectedOne
                ? `armsSlot1 ${shouldersImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "armsSlot1 bg-[url(assets/shouldersSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isShoulderSlotSelectedOne ? () => handleArmorSlotClickOne('Shoulders') : () => handleArmorTypeClickOne('Shoulders')}></div>

            <div className={isHandsSlotSelectedOne
                ? `armsSlot1 ${handsImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "armsSlot1 bg-[url(assets/handSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isHandsSlotSelectedOne ? () => handleArmorSlotClickOne('Hands') : () => handleArmorTypeClickOne('Hands')}></div>
          </div>

          <div className="misc-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div 

              className={isFoodSlotSelectedOne
                ? `foodSlot1 ${foodImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "foodSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isFoodSlotSelectedOne ? () => handleCompareSlotClickOne('food') : () => handleCategoryClickOne('food')}></div>

            <div className={isMedSlotSelectedOne
                ? `medSlot1 ${medImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "medSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isMedSlotSelectedOne ? () => handleCompareSlotClickOne('med') : () => handleCategoryClickOne('med')}></div>

            <div className={isBoosterSlotSelectedOne
                ? `medSlot1 ${boosterImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "medSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isBoosterSlotSelectedOne ? () => handleCompareSlotClickOne('booster') : () => handleCategoryClickOne('booster')}></div>
        </div>

          <div className="weapon-slot-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div className="bg-[#1f2533] opacity-50 w-[200px] h-[90px] mx-1 rounded-lg cursor-pointer">
              <div className={isWeaponSlotSelectedOne
                ? `weaponSlot1 bg-[url(assets/PP7xs-sm.png)] w-full h-full bg-auto`
                : 'w-full h-full'
              }
              onClick={isWeaponSlotSelectedOne ? () => handleCompareSlotClickOne('weapon') : () => handleCategoryClickOne('weapon')}>

              </div>
            </div>
          </div>
        
      </div>

      <div className="item-slots-2 flex flex-col w-full h-1/2 items-center">
        
      <div className="HTS-slots-2 w-full h-1/3 item-center flex flex-row mt-1">
            <div className={isHelmetSlotSelectedTwo
                ? `helmetSlot2 ${helmetImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "helmetSlot2 bg-[url(assets/headSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isHelmetSlotSelectedTwo ? () => handleArmorSlotClickTwo('Helmet') : () => handleArmorTypeClickTwo('Helmet')}></div>

            <div className={isTorsoSlotSelectedTwo
                ? `torsoSlot2 ${torsoImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "torsoSlot2 bg-[url(assets/torsoSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isTorsoSlotSelectedTwo ? () => handleArmorSlotClickTwo('Torso') : () => handleArmorTypeClickTwo('Torso')}></div>
              
            <div className={isArmsSlotSelectedTwo
                ? `armsSlot2 ${armsImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "armsSlot2 bg-[url(assets/armSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isArmsSlotSelectedTwo ? () => handleArmorSlotClickTwo('Arms') : () => handleArmorTypeClickTwo('Arms')}></div>
          </div>

          <div className="LSH-slots-2 w-full h-1/3 item-center flex flex-row mt-1">
            <div className={isLegsSlotSelectedTwo
                ? `legsSlot2 ${legsImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "legsSlot2 bg-[url(assets/legSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isLegsSlotSelectedTwo ? () => handleArmorSlotClickTwo('Legs') : () => handleArmorTypeClickTwo('Legs')}></div>

            <div className={isShoulderSlotSelectedTwo
                ? `shoulderSlot2 ${shouldersImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "shoulderSlot2 bg-[url(assets/shouldersSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isShoulderSlotSelectedTwo ? () => handleArmorSlotClickTwo('Shoulders') : () => handleArmorTypeClickTwo('Shoulders')}></div>

            <div className={isHandsSlotSelectedTwo
                ? `handsSlot2 ${handsImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "handsSlot2 bg-[url(assets/handSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isHandsSlotSelectedTwo ? () => handleArmorSlotClickTwo('Hands') : () => handleArmorTypeClickTwo('Hands')}></div>
          </div>

        <div className="misc-slots-2 w-full h-1/3 item-center flex flex-row mt-1">

          <div 
          className={isFoodSlotSelectedTwo
            ? `foodSlot2 ${foodImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
            : "foodSlot2 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
          }
          onClick={isFoodSlotSelectedTwo ? () => handleCompareSlotClickTwo('food') : () => handleCategoryClickTwo('food')}>

          </div>

          <div className={isMedSlotSelectedTwo
                ? `medSlot1 ${medImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "medSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isMedSlotSelectedTwo ? () => handleCompareSlotClickTwo('med') : () => handleCategoryClickTwo('med')}></div>

          <div className={isBoosterSlotSelectedTwo
                ? `medSlot1 ${boosterImgTwo} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "medSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isBoosterSlotSelectedTwo ? () => handleCompareSlotClickTwo('booster') : () => handleCategoryClickTwo('booster')}></div>
        </div>

        <div className="weapon-slot-2 w-full h-1/3 item-center flex flex-row mt-1 cursor-pointer">
          <div className="bg-[#1f2533] opacity-50 w-[200px] h-[90px] mx-1 rounded-lg">
          <div className={isWeaponSlotSelectedTwo
                ? `weaponSlot1 bg-[url(assets/PP7xs-sm.png)] w-full h-full bg-auto`
                : 'w-full h-full'
              }
              onClick={isWeaponSlotSelectedTwo ? () => handleCompareSlotClickTwo('weapon') : () => handleCategoryClickTwo('weapon')}>

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
