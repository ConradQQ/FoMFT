import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemMenu = ({onItemSelect}) => {
  const [categories, setCategories] = useState([
    'armor',
    'weapons',
    'food',
    'boosters',
    'implants',
    'meds',
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(selectedCategory) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:3000/${selectedCategory}`);
          setItems(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message || 'Error Fetching Items');
          setLoading(false);
        }
      };
      fetchData();
    }
    
  }, [selectedCategory])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  const handleItemClick = (item) => {
    onItemSelected(item);
  }

  return (
    <div className="item-menu">
      <div className="categories flex flex-col">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'selected' : ''}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="items">
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {items.length > 0 && (
            <ul className='item-list overflow-y-auto max-h-100'>
              {items.map((item) => (
                <li key={item.id || item.armor_id || item.material_id} onClick={() => handleItemClick(item)}>
                  {item.name || item.armor_name || item.material_name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default ItemMenu;

