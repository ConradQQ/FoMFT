// src/ui/components/ItemMenu.jsx
import React, { useState } from 'react';
import ArmorMenu from './ArmorMenu';
import WeaponsMenu from './WeaponsMenu';
import ImplantsMenu from './ImplantsMenu';
import FoodMenu from './FoodMenu';
import { XCircle } from 'lucide-react'; 

const ItemMenu = ({ onItemSelected }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showArmorTypes, setShowArmorTypes] = useState(false);

  const handleCategoryClick = (category) => {
    if (category === 'armor') {
      setShowArmorTypes((prev) => !prev);
      setSelectedCategory(category);
    } else {
      setSelectedCategory(category);
      setShowArmorTypes(false);
    }
  };

  const clearCategory = () => { 
    setSelectedCategory(null);
    setShowArmorTypes(false);
  };

  return (
    <div className="item-menu flex flex-col">
              {selectedCategory !== null && (
          <button 
            onClick={clearCategory}
            className="absolute top-10 left-0 bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition-colors"
          >
             <XCircle className="h-4 w-4 text-gray-600 cursor-pointer" /> 
          </button>
        )}
      <div className="categories flex flex-col relative sm:mt-35 lg:mt-40"> 

        {selectedCategory === null && (
          <>
            <button
              onClick={() => handleCategoryClick('armor')}
              className={selectedCategory === 'armor' 
                ? 'selected' 
                : 'text-2xl my-2 lg:text-5xl lg:my-10'}
            >
              Armor
            </button>
            <button
              onClick={() => handleCategoryClick('weapons')}
              className={selectedCategory === 'weapons' 
                ?  'selected' 
                :  'text-2xl lg:text-5xl my-2 lg:my-10'}
            >
              Weapons
            </button>
            <button
              onClick={() => handleCategoryClick('implants')}
              className={selectedCategory === 'implants' 
                ? 'selected' 
                : 'text-2xl my-2 lg:text-5xl lg:my-10'}
            >
              Implants
            </button>
            <button
              onClick={() => handleCategoryClick('food')}
              className={selectedCategory === 'food' 
                ? 'selected' 
                : 'text-2xl my-2 lg:text-5xl lg:my-10'}
            >
              Food
            </button>
            {/* <button
              onClick={() => handleCategoryClick('boosters')}
              className={selectedCategory === 'boosters' 
              ? 'selected' 
              : 'text-2xl my-2 g:text-5xl lg:my-10'}
            >
              Boosters
            </button> */}
            <button
              onClick={() => handleCategoryClick('meds')}
              className={selectedCategory === 'meds' 
                ? 'selected' 
                : 'text-2xl lg:text-5xl my-2 lg:my-10'}
            >
              Meds
            </button>
          </>
        )}
      </div>
      {selectedCategory === 'armor' && (
        <ArmorMenu
          onItemSelected={onItemSelected}
          showArmorTypes={showArmorTypes}
        />
      )}
      {selectedCategory === 'weapons' && <WeaponsMenu onItemSelected={onItemSelected} />}
      {selectedCategory === 'implants' && <ImplantsMenu onItemSelected={onItemSelected} />}
      {selectedCategory === 'food' && <FoodMenu onItemSelected={onItemSelected} />}
      {/* {selectedCategory === 'boosters' && <BoostersMenu onItemSelected={onItemSelected} />} */}
      {selectedCategory === 'meds' && <MedsMenu onItemSelected={onItemSelected} />}
    </div>
  );
};

export default ItemMenu;
