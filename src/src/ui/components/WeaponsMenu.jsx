import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeaponsMenu = ({setItemObjects, itemObjects, setSlotTypes }) => {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://fomft-apix-674490081833.us-central1.run.app/weapons'); 
        setWeapons(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error fetching weapons.');
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const handleItemClick = (item) => {
    let duplicateSlot = false;
    let duplicateIndex = -1;

// Check for duplicate slot type

    itemObjects.forEach((existingItem, index) => {
      if (item.slot === existingItem.slot) {
        duplicateSlot = true;
        duplicateIndex = index;
      }
    });
    
// Logic for replacing duplicate slot with new item of the same slot type

    if (duplicateSlot) {
      setItemObjects(prevItemsObject => {
        const newItemsObject = [...prevItemsObject];
        newItemsObject[duplicateIndex] = item;
        return newItemsObject
      });

      setSlotTypes(prevSlotTypes => {
        const newSlotTypes = [...prevSlotTypes];
        newSlotTypes[duplicateIndex] = item.slot; 
        return newSlotTypes;
      });

    } else {
        setItemObjects(prevItemObjects => [...prevItemObjects, item]);
        setSlotTypes(prevSlotTypes => [...prevSlotTypes, item.slot]);   
    }

  };

  return (
    <div className="weapons-menu">
      <div className="items flex flex-col">
        {loading && <div className='text-indigo-400'>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {weapons.length > 0 && (
          <ul className="item-list overflow-y-auto max-h-100">
            {weapons.map((weapon) => (
              <li key={weapon.weapon_id} onClick={() => handleItemClick(weapon)} className='w-fit cursor-pointer my-1 text-white hover:text-indigo-400 hover:underline text-[18px]'>
                {weapon.weapon_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WeaponsMenu;
