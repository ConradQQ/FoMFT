/* eslint-disable no-unused-vars */
import './input.css';
import BasePage from './components/BasePage';
import DetailedStatsPage from './components/DetailedStatsPage';
import CompareToolPage from './components/CompareToolPage';
import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const App = () => {

  // Base Page State Logic
  const [itemObjects, setItemObjects] = useState([]);
  const [slotTypes, setSlotTypes] = useState([]);
  const [slotItems, setSlotItems] = useState({});
  const [selectedArmorType, setSelectedArmorType] = useState(null);
  const [selectedArmorTypeOne, setSelectedArmorTypeOne] = useState(null);
  const [selectedArmorTypeTwo, setSelectedArmorTypeTwo] = useState(null);
  
  const navigate = useNavigate();

  // CompareToolPage state logic

  const [firstCompareItemsObjects, setFirstCompareItemObjects] = useState([]);
  const [secondCompareItemsObjects, setSecondCompareItemObjects] = useState([]);
  const [compareSlotTypesOne, setCompareSlotTypesOne] = useState([]);
  const [compareSlotTypesTwo, setCompareSlotTypesTwo] = useState([]);
  const [currentCompareItemObject, setCurrentCompareItemObject] = useState(1);
  

  // Function to remove item of a slot from SlotTypes and ItemObjects on item slot click
  const handleSlotClick = (slotToRemove) => {
    setSlotTypes((prevSlots) => prevSlots.filter((slot) => slot !== slotToRemove));
    setItemObjects((prevItems) => prevItems.filter((item) => item.slot !== slotToRemove));
  };

   // Functions to remove item of a non-armor compare slot  
   const handleCompareSlotClickOne = (slotToRemove) => {
    setCompareSlotTypesOne((prevSlots) => prevSlots.filter((slot) => slot !== slotToRemove));
    setFirstCompareItemObjects((prevItems) => prevItems.filter((item) => item.slot !== slotToRemove));
  };

   const handleCompareSlotClickTwo = (slotToRemove) => {
    setCompareSlotTypesTwo((prevSlots) => prevSlots.filter((slot) => slot !== slotToRemove));
    setSecondCompareItemObjects((prevItems) => prevItems.filter((item) => item.slot !== slotToRemove));
  };

  // Functions to remove armor compare slot
    const handleArmorSlotClickOne = (slotToRemove) => {
    setCompareSlotTypesOne((prevSlots) => prevSlots.filter((slot) => slot !== slotToRemove));
    setFirstCompareItemObjects((prevItems) => prevItems.filter((item) => item.slot !== slotToRemove));
  };

   const handleArmorSlotClickTwo = (slotToRemove) => {
    setCompareSlotTypesTwo((prevSlots) => prevSlots.filter((slot) => slot !== slotToRemove));
    setSecondCompareItemObjects((prevItems) => prevItems.filter((item) => item.slot !== slotToRemove));
  };




  // Function to save the current loadout
  const saveLoadout = () => {

    if (window.electronAPI && window.electronAPI.saveLoadout) {
      window.electronAPI.saveLoadout(itemObjects);
    } else {
      console.error('electronAPI or saveLoadout function not available.');
    }
  };

    // Function to load a loadout
    const loadLoadout = () => {
      if (window.electronAPI && window.electronAPI.loadLoadout) {
        window.electronAPI.loadLoadout();
      } else {
        console.error('err');
      }
    };

  // Handles loading loadouts 
    useEffect(() => {
      if (window.electronAPI && window.electronAPI.onLoadLoadout) {
        window.electronAPI.onLoadLoadout((event, loadedLoadout) => {
          if (loadedLoadout) {
            setItemObjects([]);
            setItemObjects(loadedLoadout);
            const newSlotTypes = loadedLoadout.map(item => item.slot);
            setSlotTypes(newSlotTypes);
            const processedItems = loadedLoadout.reduce((acc, item) => {
              acc[item.slot] = item;
              return acc;
            }, {});
            setSlotItems(processedItems);
            console.log('Loaded Loadout:', loadedLoadout);
          } else {
            console.error('No loadout data received.');
          }
        });
      }
    }, []);

    // Electron menu navigation

    useEffect(() => {
      if (window.electronAPI && window.electronAPI.on) {
        window.electronAPI.on('navigate-basePage', () => {
          navigate('/');
        });
  
        window.electronAPI.on('navigate-stats', () => {
          console.log('Navigate to Detailed Stats');
          navigate('/stats');
        });
  
        window.electronAPI.on('navigate-about', () => {
          console.log('Navigate to About');
          navigate('/about');
        });
      }
    }, [navigate]);

  return (
    <>

    <Routes>
      
      <Route
        path="/"
        element={<BasePage
          itemObjects={itemObjects}
          setItemObjects={setItemObjects}
          slotTypes={slotTypes}
          setSlotTypes={setSlotTypes}
          slotItems={slotItems}
          setSlotItems={setSlotItems}
          handleSlotClick={handleSlotClick}
          saveLoadout={saveLoadout}
          loadLoadout={loadLoadout}
          
        />}
      />

      <Route 
        path="/stats" 
        element={<DetailedStatsPage 
          itemObjects={itemObjects}
          setItemObjects={setItemObjects}
          slotTypes={slotTypes}
          setSlotTypes={setSlotTypes}
          slotItems={slotItems}
          setSlotItems={setSlotItems}
          handleSlotClick={handleSlotClick}
          saveLoadout={saveLoadout}
          loadLoadout={loadLoadout}
        />} 
      />

      <Route 
        path="/about"
        element={<CompareToolPage 
          firstCompareItemsObjects={firstCompareItemsObjects}
          setFirstCompareItemObjects={setFirstCompareItemObjects}
          secondCompareItemsObjects={secondCompareItemsObjects}
          setSecondCompareItemObjects={setSecondCompareItemObjects}
          compareSlotTypesOne={compareSlotTypesOne}
          setCompareSlotTypesOne={setCompareSlotTypesOne}
          compareSlotTypesTwo={compareSlotTypesTwo}
          setCompareSlotTypesTwo={setCompareSlotTypesTwo}
          currentCompareItemObject={currentCompareItemObject}
          setCurrentCompareItemObject={setCurrentCompareItemObject}
          handleCompareSlotClickOne={handleCompareSlotClickOne}
          handleCompareSlotClickTwo={handleCompareSlotClickTwo}
          selectedArmorTypeOne={selectedArmorTypeOne}
          setSelectedArmorTypeOne={setSelectedArmorTypeOne}
          selectedArmorTypeTwo={selectedArmorTypeTwo}
          setSelectedArmorTypeTwo={setSelectedArmorTypeTwo}
          selectedArmorType={selectedArmorType}
          setSelectedArmorType={setSelectedArmorType}
          handleArmorSlotClickTwo={handleArmorSlotClickTwo}
          handleArmorSlotClickOne={handleArmorSlotClickOne}
        />}
      />

    </Routes>
    </>
  );
}

export default App
