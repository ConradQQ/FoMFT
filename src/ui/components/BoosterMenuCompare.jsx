/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BoosterMenuCompare = ({
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
  
  const [boosters, setBoosters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://fomft-apix-674490081833.us-central1.run.app/boosters');
        setBoosters(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error fetching boosters.');
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
    <div className="boosters-menu">
      <div className="items flex flex-col">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {boosters.length > 0 && (
          <ul className="item-list overflow-y-auto max-h-100">
            {boosters.map((booster) => (
              <li key={booster.id} 
                  className='w-fit cursor-pointer my-1 text-white hover:text-indigo-400 hover:underline'
                  onClick={() => handleItemClick(booster)}>
                  {booster.booster_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BoosterMenuCompare;