// src/renderer/components/ArmorMenu.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArmorMenu = ({ onItemSelected }) => {
  const [armorTypes, _setArmorTypes] = useState([
    'helmet',
    'torso',
    'arms',
    'legs',
    'shoulders',
  ]);

  const [selectedArmorType, setSelectedArmorType] = useState(null);
  const [showArmorTypes, setShowArmorTypes] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(selectedArmorType) {
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

  const handleArmorClick = () => {
    setShowArmorTypes(!showArmorTypes);
  };
  
  return (
    <div className="armor-menu">
      <div className="armor-category">
        <div className="armor-label" onClick={handleArmorClick}>
          Armor
        </div>
        {showArmorTypes && (
          <div className="armor-types flex flex-col">
            {armorTypes.map((type) => (
              <button key={type} onClick={() => handleArmorTypeClick(type)}>
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
            <ul className="item-list overflow-y-auto max-h-100">
              {items.map((item) => (
                <li key={item.armor_id} onClick={() => handleItemClick(item)}>
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