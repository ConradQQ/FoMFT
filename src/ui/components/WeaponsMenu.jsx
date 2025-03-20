// src/renderer/components/WeaponsMenu.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeaponsMenu = ({ onItemSelected }) => {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/weapons'); 
        setWeapons(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error fetching weapons.');
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const handleItemClick = (weapon) => {
    onItemSelected(weapon);
  };

  return (
    <div className="weapons-menu">
      <div className="items flex flex-col">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {weapons.length > 0 && (
          <ul className="item-list overflow-y-auto max-h-100">
            {weapons.map((weapon) => (
              <li key={weapon.weapon_id} onClick={() => handleItemClick(weapon)} className='cursor-pointer underline'>
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