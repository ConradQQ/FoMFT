/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArmorMenuCompareOne = ({
  secondCompareItemsObjects,
  setSecondCompareItemObjects,
  setCompareSlotTypesTwo,
  currentCompareItemObject,
  selectedArmorType
}) => {
  const [armorTypes, _setArmorTypes] = useState([
    'helmet',
    'torso',
    'arms',
    'legs',
    'shoulders',
    'hands'
  ]);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    if (currentCompareItemObject === 2) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://fomft-apix-674490081833.us-central1.run.app/armor/${selectedArmorType}`);
          setItems(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message || 'Error Fetching Items');
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [selectedArmorType, currentCompareItemObject]);


  const handleItemClick = (item) => {
    let duplicateSlot = false;
    let duplicateIndex = -1;

// Check for duplicate slot type

secondCompareItemsObjects.forEach((existingItem, index) => {
      if (item.slot === existingItem.slot) {
        duplicateSlot = true;
        duplicateIndex = index;
      }
    });

// Logic for replacing duplicate slot with new item of the same slot type

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

  };

  return (
    <div className="armor-menu">
      {selectedArmorType && (
        <div className="items flex flex-col">
          {loading && <div className='text-indigo-400'>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {items.length > 0 && (
            <ul className="item-list overflow-y-auto scrollbar max-h-100">
              {items.map((item) => (
                <li
                  key={item.armor_id}
                  onClick={() => {
                    handleItemClick(item)
                  }}
                  className='w-fit cursor-pointer my-1 text-white hover:text-indigo-400 hover:underline'
                >
                  {item.armor_name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ArmorMenuCompareOne;
