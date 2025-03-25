import React, { useState } from 'react';
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

  return (
    <div className="item-menu flex flex-col">
              {selectedCategory !== null && (
          <button 
            onClick={clearCategory}
            className="absolute top-10 left-0 bg-gray-200 rounded-full p-1 hover:bg-indigo-400 transition-colors"
          >
             <XCircle className="h-4 w-4 text-gray-600 cursor-pointer" /> 
          </button>
        )}
      <div className="categories flex flex-col relative sm:mt-35 lg:mt-27"> 

        {selectedCategory === null && (
          <>
            <button
              onClick={() => handleCategoryClick('armor')}
              className={selectedCategory === 'armor' 
                ? 'selected' 
                : 'text-2xl my-2 lg:text-5xl lg:my-10 text-white hover:text-indigo-400'}
                style={{backgroundColor:'transparent'}}
            >
              Armor
            </button>
            <button
              onClick={() => handleCategoryClick('weapons')}
              className={selectedCategory === 'weapons' 
                ?  'selected' 
                :  'text-2xl lg:text-5xl my-2 lg:my-10 text-white hover:text-indigo-400'}
                style={{backgroundColor:'transparent'}}
            >
              Weapons
            </button>
            <button
              onClick={() => handleCategoryClick('implants')}
              className={selectedCategory === 'implants' 
                ? 'selected' 
                : 'text-2xl my-2 lg:text-5xl lg:my-10 text-white hover:text-indigo-400'}
                style={{backgroundColor:'transparent'}}
            >
              Implants
            </button>
            <button
              onClick={() => handleCategoryClick('food')}
              className={selectedCategory === 'food' 
                ? 'selected' 
                : 'text-2xl my-2 lg:text-5xl lg:my-10 text-white hover:text-indigo-400'}
                style={{backgroundColor:'transparent'}}
            >
              Food
            </button>
 
            <button
              onClick={() => handleCategoryClick('meds')}
              className={selectedCategory === 'meds' 
                ? 'selected' 
                : 'text-2xl lg:text-5xl my-2 lg:my-10 text-white hover:text-indigo-400'}
                style={{backgroundColor:'transparent'}}
            >
              Meds
            </button>
            <button
              onClick={() => handleCategoryClick('boosters')}
              className={selectedCategory === 'boosters' 
              ? 'selected' 
              : 'text-2xl my-2 lg:text-5xl lg:my-10 text-white hover:text-indigo-400'}
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
      {selectedCategory === 'weapons' && <WeaponsMenu 
      onItemSelected={onItemSelected} 
      setItemObjects={setItemObjects}
      itemObjects={itemObjects}
      setSlotTypes={setSlotTypes}
      slotTypes={slotTypes}/>}

      {selectedCategory === 'implants' && <ImplantsMenu 
      onItemSelected={onItemSelected} 
      setItemObjects={setItemObjects}
      itemObjects={itemObjects}
      setSlotTypes={setSlotTypes}
      slotTypes={slotTypes}/>}

      {selectedCategory === 'food' && <FoodMenu 
      onItemSelected={onItemSelected} 
      setItemObjects={setItemObjects}
      itemObjects={itemObjects}
      setSlotTypes={setSlotTypes}
      slotTypes={slotTypes}/>}

      {selectedCategory === 'boosters' && <BoosterMenu 
      onItemSelected={onItemSelected} 
      setItemObjects={setItemObjects}
      itemObjects={itemObjects}
      setSlotTypes={setSlotTypes}
      slotTypes={slotTypes}/>}

      {selectedCategory === 'meds' && <MedsMenu 
      onItemSelected={onItemSelected} 
      setItemObjects={setItemObjects}
      itemObjects={itemObjects}
      setSlotTypes={setSlotTypes}
      slotTypes={slotTypes}/>}
    </div>
  );
};

export default ItemMenu;
