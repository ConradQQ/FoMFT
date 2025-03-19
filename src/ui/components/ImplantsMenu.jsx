// src/renderer/components/ImplantsMenu.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImplantsMenu = ({ onItemSelected }) => {
  const [implants, setImplants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/implants'); // Adjust API URL
        setImplants(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error fetching implants.');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleItemClick = (implant) => {
    onItemSelected(implant);
  };

  return (
    <div className="implants-menu">
      <div className="items flex flex-col">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {implants.length > 0 && (
          <ul className="item-list overflow-y-auto max-h-100">
            {implants.map((implant) => (
              <li key={implant.id} className='cursor-pointer'
                  onClick={() => handleItemClick(implant)}>
                  {implant.implant_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ImplantsMenu;