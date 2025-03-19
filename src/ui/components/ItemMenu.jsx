// src/renderer/components/ItemMenu.jsx
import React, { useState } from 'react';
import ArmorMenu from './ArmorMenu';
import WeaponsMenu from './WeaponsMenu';
import ImplantsMenu from './ImplantsMenu';
import FoodMenu from './FoodMenu';

const ItemMenu = ({ onItemSelected }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  return (
    <div className="item-menu flex flex-col">
      <div className="categories flex flex-col">
      <button
          onClick={() => handleCategoryClick('armor')}
          className={selectedCategory === 'armor' ? 'selected' : ''}
        >
          Armor
        </button>
        <button
          onClick={() => handleCategoryClick('weapons')}
          className={selectedCategory === 'weapons' ? 'selected' : ''}
        >
          Weapons
        </button>
        <button
          onClick={() => handleCategoryClick('implants')}
          className={selectedCategory === 'implants' ? 'selected' : ''}
        >
          Implants
        </button>
        <button
          onClick={() => handleCategoryClick('food')}
          className={selectedCategory === 'food' ? 'selected' : ''}
        >
          Food
        </button>
        <button
          onClick={() => handleCategoryClick('boosters')}
          className={selectedCategory === 'boosters' ? 'selected' : ''}
        >
          Boosters
        </button>
        <button
          onClick={() => handleCategoryClick('meds')}
          className={selectedCategory === 'meds' ? 'selected' : ''}
        >
          Meds
        </button>
       
      </div>
      {selectedCategory === 'armor' && <ArmorMenu onItemSelected={onItemSelected} />}
      {selectedCategory === 'weapons' && <WeaponsMenu onItemSelected={onItemSelected} />}
      {selectedCategory === 'implants' && <ImplantsMenu onItemSelected={onItemSelected} />}
      {selectedCategory === 'food' && <FoodMenu onItemSelected={onItemSelected} />}
      {selectedCategory === 'boosters' && <BoostersMenu onItemSelected={onItemSelected} />}
      {selectedCategory === 'meds' && <MedsMenu onItemSelected={onItemSelected} />}
    </div>
  );
};

export default ItemMenu;