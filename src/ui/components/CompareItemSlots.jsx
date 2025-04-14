/* eslint-disable no-unused-vars */
import FoodMenuCompare from "./FoodMenuCompare";
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
  setCurrentCompareItemObject
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

    const foodItem = firstCompareItemsObjects.find((item) => item.slot === 'food');
    const foodItemName = foodItem ? foodItem.food_name : undefined;
    const foodImg = foodItem ? foodItem.image_path_xs : undefined;
    const foodImgLG = foodItem ? foodItem.image_path_sm : undefined;


    //  Image Handling Logic for secondCompareItemsObjects

    const foodItemTwo = secondCompareItemsObjects.find((item) => item.slot === 'food');
    const foodItemNameTwo = foodItem ? foodItem.food_name : undefined;
    const foodImgTwo = foodItemTwo ? foodItemTwo.image_path_xs : undefined;
    const foodImgLGTwo = foodItemTwo ? foodItemTwo.image_path_sm : undefined;




// Local State Logic
const [selectedCategory, setSelectedCategory] = useState(null);
const [armorCategorySelected, setArmorCategorySelected] = useState(null);

const handleCategoryClickOne = (category) => {
  setSelectedCategory(category);
  setCurrentCompareItemObject(1);
};

const handleCategoryClickTwo = (category) => {
  setSelectedCategory(category);
  setCurrentCompareItemObject(2);
};

const handleArmorCategoryClick = (armorType) => {
  setArmorCategorySelected(armorType);
};

const clearCategory = () => { 
  setSelectedCategory(null);
};

// Use Effect hook to handle clear categories on esc key press
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
// Needs to display item category list on slot click
console.log(currentCompareItemObject)

  return (
    <>
      <div className="compare-item-slots-container">
      {selectedCategory === null && (
        <>
          <div className="item-slots-1 flex flex-col  w-full h-1/2 items-center">
            
          <div className="HTS-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div className="bg-[url(assets/headSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
            <div className="bg-[url(assets/torsoSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
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
                ? `foodSlot1 ${foodImg} w-[60px] h-[60px] mx-1 cursor-pointer`
                : "foodSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"
              }
              onClick={() => handleCategoryClickOne('food')}
            ></div>
            <div className="medSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
            <div className="boosterSlot1 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
        </div>

          <div className="weapon-slot-1 w-full h-1/3 item-center flex flex-row mt-1">
            <div className="bg-[#1f2533] opacity-50 w-[200px] h-[60px] mx-1 rounded-lg cursor-pointer"></div>
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
          onClick={() => handleCategoryClickTwo('food')}>

          </div>
          <div className="medSlot2 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
          <div className="boosterSlot2 bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1 cursor-pointer"></div>
        </div>

        <div className="weapon-slot-2 w-full h-1/3 item-center flex flex-row mt-1 cursor-pointer">
          <div className="bg-[#1f2533] opacity-50 w-[200px] h-[60px] mx-1 rounded-lg"></div>
        </div>
      
      </div>
    </> )}
        
        {selectedCategory === 'food' && (
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
      </div>
    </>
  )
};


export default CompareItemSlots;