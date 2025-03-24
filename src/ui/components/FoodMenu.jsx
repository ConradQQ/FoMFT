import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodMenu = ({ setItemObjects, itemObjects, setSlotTypes}) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <div className="foods-menu">
      <div className="items flex flex-col">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {foods.length > 0 && (
          <ul className="item-list overflow-y-auto max-h-100">
            {foods.map((food) => (
              <li key={food.id} 
                  className='cursor-pointer underline mt-0.5 text-white'
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

export default FoodMenu;