/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodMenuCompare = ({ 
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

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(`compareSlotTypesOne: ${compareSlotTypesOne}, compareSlotTypesTwo: ${compareSlotTypesTwo}`)
  
// API call
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://fomft-apix-674490081833.us-central1.run.app/food');
        setFoods(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error fetching food.');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleItemClick = (item) => {
    let duplicateSlot = false;
    let duplicateIndex = -1;

// Check for duplicate slot type
    
    if (currentCompareItemObject === 1) {
      duplicateSlot = false;
      duplicateIndex = -1;
      firstCompareItemsObjects.forEach((existingItem, index) => {
        if (item.slot === existingItem.slot) {
          duplicateSlot = true;
          duplicateIndex = index;
        }
    });

// Logic for replacing duplicate slot with new item of the same slot type

      if (duplicateSlot) {
        setFirstCompareItemObjects(prevItemsObject => {
          const newItemsObject = [...prevItemsObject];
          newItemsObject[duplicateIndex] = item;
          return newItemsObject
        });

        setCompareSlotTypesOne(prevSlotTypes => {
          const newSlotTypes = [...prevSlotTypes];
          newSlotTypes[duplicateIndex] = item.slot; 
          return newSlotTypes;
        });

      } else {
        setFirstCompareItemObjects(prevItemObjects => [...prevItemObjects, item]);
        setCompareSlotTypesOne(prevSlotTypes => [...prevSlotTypes, item.slot]);   
      }

  }

  if (currentCompareItemObject === 2) {
    duplicateSlot = false;
    duplicateIndex = -1;
    secondCompareItemsObjects.forEach((existingItem, index) => {
      if (item.slot === existingItem.slot) {
        duplicateSlot = true;
        duplicateIndex = index;
      }
  });
  if (duplicateSlot) {
    setSecondCompareItemObjects(prevItemsObject => {
      const newItemsObject = [...prevItemsObject];
      newItemsObject[duplicateIndex] = item;
      return newItemsObject
    });

    setCompareSlotTypesTwo(prevSlotTypes => {
      const newSlotTypes = [...prevSlotTypes];
      newSlotTypes[duplicateIndex] = item.slot; 
      return newSlotTypes;
    });

  } else {
    setSecondCompareItemObjects(prevItemObjects => [...prevItemObjects, item]);
    setCompareSlotTypesTwo(prevSlotTypes => [...prevSlotTypes, item.slot]);   
  }

  }

};


  return (
    <div className="foods-menu">
      <div className="items flex flex-col">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {foods.length > 0 && (
          <ul className="item-list overflow-y-auto max-h-100">
            {foods.map((food) => (
              <li key={food.id} 
                  className='w-fit cursor-pointer my-1 text-white hover:text-indigo-400 hover:underline'
                  onClick={() => handleItemClick(food)}>
                  {food.food_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FoodMenuCompare;