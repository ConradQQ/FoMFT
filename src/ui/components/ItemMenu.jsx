import React, { useState, useEffect } from 'react';
import ArmorMenu from './ArmorMenu';
import WeaponsMenu from './WeaponsMenu';
import ImplantsMenu from './ImplantsMenu';
import FoodMenu from './FoodMenu';
import MedsMenu from './MedsMenu';
import BoosterMenu from './BoosterMenu';
import { XCircle } from 'lucide-react'; 

const ItemMenu = ({ onItemSelected, setItemObjects, itemObjects, setSlotTypes, slotTypes }) => {

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

  // Use Effect hook to handle clear categories on esc key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        clearCategory();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="item-menu flex flex-col">
              {selectedCategory !== null && (
          <button 
            onClick={clearCategory}
            className="absolute top-0 left-0 armorType rounded-full p-1 transition-colors cursor-pointer"
          >
             <XCircle className="h-2 w-2 lg:h-4 lg:w-4 text-white cursor-pointer" /> 
          </button>
        )}
      <div className="categories flex flex-col relative sm:mt-35 lg:mt-27"> 

        {selectedCategory === null && (
          <>
            <button
              onClick={() => handleCategoryClick('armor')}
              className={selectedCategory === 'armor' 
                ? 'selected' 
                : 'text-2xl my-2 lg:text-5xl lg:my-10 text-white hover:text-indigo-400 cursor-pointer'}
                style={{backgroundColor:'transparent'}}
            >
              Armor
            </button>
            <button
              onClick={() => handleCategoryClick('weapons')}
              className={selectedCategory === 'weapons' 
                ?  'selected' 
                :  'text-2xl lg:text-5xl my-2 lg:my-10 text-white hover:text-indigo-400 cursor-pointer'}
                style={{backgroundColor:'transparent'}}
            >
              Weapons
            </button>
            <button
              onClick={() => handleCategoryClick('implants')}
              className={selectedCategory === 'implants' 
                ? 'selected' 
                : 'text-2xl my-2 lg:text-5xl lg:my-10 text-white hover:text-indigo-400 cursor-pointer'}
                style={{backgroundColor:'transparent'}}
            >
              Implants
            </button>
            <button
              onClick={() => handleCategoryClick('food')}
              className={selectedCategory === 'food' 
                ? 'selected' 
                : 'text-2xl my-2 lg:text-5xl lg:my-10 text-white hover:text-indigo-400 cursor-pointer'}
                style={{backgroundColor:'transparent'}}
            >
              Food
            </button>
 
            <button
              onClick={() => handleCategoryClick('meds')}
              className={selectedCategory === 'meds' 
                ? 'selected' 
                : 'text-2xl lg:text-5xl my-2 lg:my-10 text-white hover:text-indigo-400 cursor-pointer'}
                style={{backgroundColor:'transparent'}}
            >
              Meds
            </button>
            <button
              onClick={() => handleCategoryClick('boosters')}
              className={selectedCategory === 'boosters' 
              ? 'selected' 
              : 'text-2xl my-2 lg:text-5xl lg:my-10 text-white hover:text-indigo-400 cursor-pointer'}
              style={{backgroundColor:'transparent'}}
            >
              Boosters
            </button>
          </>
        )}
      </div>
      {selectedCategory === 'armor' && (
        <ArmorMenu
          onItemSelected={onItemSelected}
          showArmorTypes={showArmorTypes}
          setItemObjects={setItemObjects}
          itemObjects={itemObjects}
          setSlotTypes={setSlotTypes}
          slotTypes={slotTypes}
        />
      )}
      {selectedCategory === 'weapons' && 
      <WeaponsMenu 
        onItemSelected={onItemSelected} 
        setItemObjects={setItemObjects}
        itemObjects={itemObjects}
        setSlotTypes={setSlotTypes}
        slotTypes={slotTypes}/>}

      {selectedCategory === 'implants' && 
      <ImplantsMenu 
        onItemSelected={onItemSelected} 
        setItemObjects={setItemObjects}
        itemObjects={itemObjects}
        setSlotTypes={setSlotTypes}
        slotTypes={slotTypes}/>}

      {selectedCategory === 'food' && 
      <FoodMenu 
        onItemSelected={onItemSelected} 
        setItemObjects={setItemObjects}
        itemObjects={itemObjects}
        setSlotTypes={setSlotTypes}
        slotTypes={slotTypes}/>}

      {selectedCategory === 'boosters' && 
      <BoosterMenu 
        onItemSelected={onItemSelected} 
        setItemObjects={setItemObjects}
        itemObjects={itemObjects}
        setSlotTypes={setSlotTypes}
        slotTypes={slotTypes}/>}

      {selectedCategory === 'meds' && 
      <MedsMenu 
        onItemSelected={onItemSelected} 
        setItemObjects={setItemObjects}
        itemObjects={itemObjects}
        setSlotTypes={setSlotTypes}
        slotTypes={slotTypes}/>}
    </div>
  );
};

export default ItemMenu;
