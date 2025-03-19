import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodMenu = ({ onItemSelected }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/food');
        setFoods(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error fetching food.');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleItemClick = (food) => {
    onItemSelected(food);
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