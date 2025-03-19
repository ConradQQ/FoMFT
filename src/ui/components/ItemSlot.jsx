// src/renderer/components/ItemSlot.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemSlot = ({ slot }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    if (showItems) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/armor/${slot}`); // Adjust API URL if needed
          setItems(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message || 'Error fetching items.');
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setLoading(false); // Set loading to false when not fetching
    }
  }, [slot, showItems]);

  const toggleItems = () => {
    setShowItems(!showItems);
    if (!showItems) {
      setLoading(true); // Start loading when showing items
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="item-slot">
      <div
        className="slot-title cursor-pointer" // Add cursor-pointer for visual feedback
        onClick={toggleItems}
      >
        {/* {slot.charAt(0).toUpperCase() + slot.slice(1)}  */}
      </div>
      {showItems && (
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.armor_id} className="item-list-item">
              {item.armor_name} - {item.armor_defense} {/* Adjust based on your item properties */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemSlot;