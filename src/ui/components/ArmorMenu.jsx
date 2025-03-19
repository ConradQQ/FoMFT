// src/renderer/components/ArmorMenu.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArmorMenu = ({ onItemSelected, showArmorTypes }) => {
  const [armorTypes, _setArmorTypes] = useState([
    'helmet',
    'torso',
    'arms',
    'legs',
    'shoulders',
  ]);

  const [selectedArmorType, setSelectedArmorType] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (selectedArmorType) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:3000/armor/${selectedArmorType}`);
          setItems(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message || 'Error Fetching Items');
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [selectedArmorType]);

  const handleArmorTypeClick = (type) => {
    setSelectedArmorType(type);

  };

  const handleItemClick = (item) => {
    onItemSelected(item);
  };

  return (
    <div className="armor-menu">
      <div className="armor-category absolute top-0 ml-2 lg:ml-8">
        {showArmorTypes && (
          <div className="armor-types flex flex-row text-[14px] lg:text-[24px]">
            {armorTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleArmorTypeClick(type)}
                className='mx-1 lg:mx-5 font-bold underline text-blue-800'
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
      {selectedArmorType && (
        <div className="items flex flex-col">
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {items.length > 0 && (
            <ul className="item-list overflow-y-auto max-h-100 no-scrollbar">
              {items.map((item) => (
                <li
                  key={item.armor_id}
                  onClick={() => handleItemClick(item)}
                  className='cursor-pointer'
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

export default ArmorMenu;