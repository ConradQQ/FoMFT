import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BoosterMenu = ({ setItemObjects, itemObjects, setSlotTypes}) => {
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
    <div className="boosters-menu">
      <div className="items flex flex-col">
        {loading && <div className='text-indigo-400'>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {boosters.length > 0 && (
          <ul className="item-list overflow-y-auto max-h-100">
            {boosters.map((booster) => (
              <li key={booster.id} 
                  className='w-fit cursor-pointer my-1 text-white hover:text-indigo-400 hover:underline lg:text-[18px]'
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

export default BoosterMenu;
