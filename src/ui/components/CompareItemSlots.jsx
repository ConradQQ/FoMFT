/* eslint-disable no-unused-vars */
import FoodMenuCompare from "./FoodMenuCompare";
import MedsMenuCompare from "./MedsMenuCompare";
import BoosterMenuCompare from "./BoosterMenuCompare";
import WeaponsMenuCompare from "./WeaponsMenuCompare";
import ArmorMenuCompareOne from "./ArmorMenuCompareOne";
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



// Local State Logic
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
                ? `foodSlot1 ${helmetImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "foodSlot1 bg-[url(assets/headSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isHelmetSlotSelectedOne ? () => handleArmorSlotClickOne('Helmet') : () => handleArmorTypeClickOne('Helmet')}></div>

            <div className={isTorsoSlotSelectedOne
                ? `foodSlot1 ${torsoImgOne} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "foodSlot1 bg-[url(assets/torsoSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={isTorsoSlotSelectedOne ? () => handleCompareSlotClickOne('armor1') : () => handleArmorTypeClickOne('Torso')}></div>
              
            <div className="bg-[url(assets/armSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
          </div>

          <div className="LSH-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div className="bg-[url(assets/legSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
            <div className="bg-[url(assets/shouldersSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
            <div className="bg-[url(assets/handSlot-sm.png)]  w-[60px] h-[60px] mx-1 cursor-pointer"></div>
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
          <div className="bg-[url(assets/headSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
          <div className="bg-[url(assets/torsoSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
          <div className="bg-[url(assets/armSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
        </div>

        <div className="LSH-slots-2 w-full h-1/3 item-center flex flex-row mt-1">
          <div className="bg-[url(assets/legSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
          <div className="bg-[url(assets/shouldersSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
          <div className="bg-[url(assets/handSlot-sm.png)]  w-[60px] h-[60px] mx-1 cursor-pointer"></div>
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
      </div>
    </>
  )
};


export default CompareItemSlots;
