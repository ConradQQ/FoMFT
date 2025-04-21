import { useState } from "react";
import DefenseChartCompare from "./DefenseChartCompare";
import OffenseChartCompare from "./OffenseChartCompare";

const CompareStatsDisplay = ({
  firstCompareItemsObjects,
  secondCompareItemsObjects,


}) => {

  const [showRawStats, setShowRawStats] = useState(true);

  const aggregatedStatsOne = {};
  const aggregatedStatsTwo= {};
  const armorStatsOne = {};
  const armorStatsTwo = {};
  const weaponStatsOne = {};
  const weaponStatsTwo = {};

if (firstCompareItemsObjects) {
  firstCompareItemsObjects.forEach(item => {
    if (item.stats) {
      for (const key in item.stats) {
        const value = item.stats[key];
        if (aggregatedStatsOne[key]) {
          aggregatedStatsOne[key] += value;
        } else {
          aggregatedStatsOne[key] = value;
        }
      }
    }
  });
} 
  // Logic for adding stats to armorStats object


  if (firstCompareItemsObjects) {
  firstCompareItemsObjects.forEach(item => {
    if(
      Object.keys(item)[0] === 'armor_id' || Object.keys(item)[0] === 'implant_id' ||
      Object.keys(item)[0] === 'food_id' || Object.keys(item)[0] === 'med_id'  ) {
      if (item.stats) {
        for (const key in item.stats) {
          const value = item.stats[key];
          if (armorStatsOne[key]) {
            armorStatsOne[key] += value;
          } else {
            armorStatsOne[key] = value;
          }
        }
      }
  }});
}
  // Logic for adding stats to weaponStats object
  
if (firstCompareItemsObjects) {
  firstCompareItemsObjects.forEach(item => {
    if(Object.keys(item)[0] === 'weapon_id') {
      if (item.stats) {
        for (const key in item.stats) {
          const value = item.stats[key];
          if (weaponStatsOne[key]) {
            weaponStatsOne[key] += value;
          } else {
            weaponStatsOne[key] = value;
          }
        }
      }
  }});

}
  // Logic for handling agility and weapon_recoil

  for (let [weaponKey, weaponValue] of Object.entries(weaponStatsOne)) {
    if (weaponKey === 'agility') {
      if (armorStatsOne.agility) {
        armorStatsOne.agility += weaponValue;
      }
      else{
        armorStatsOne.agility = weaponValue
      }
      delete weaponStatsOne.agility
    }
  };

  for (let [armorKey, armorValue] of Object.entries(armorStatsOne)) {
    if (armorKey === 'weapon recoil') {
      if (weaponStatsOne['weapon recoil']) {
        weaponStatsOne['weapon recoil'] += armorValue;
      }
      else{
        weaponStatsOne['weapon recoil'] = armorValue
      }
      delete armorStatsOne['weapon recoil']
    }
  };

// Round decimals in each of the stat objects

// eslint-disable-next-line no-unused-vars
for (let [weaponKey, weaponValue] of Object.entries(weaponStatsOne)) {

  if (typeof weaponStatsOne[weaponKey] === 'number') {

    weaponStatsOne[weaponKey] = Math.round(weaponStatsOne[weaponKey] * 10000) / 10000

}

};


// eslint-disable-next-line no-unused-vars
for (let [armorKey, armorValue] of Object.entries(armorStatsOne)) {

  if (typeof armorStatsOne[armorKey] === 'number') {

    armorStatsOne[armorKey] = Math.round(armorStatsOne[armorKey] * 10000) / 10000
}

};


// Second Items Object logic
if (secondCompareItemsObjects) {
  secondCompareItemsObjects.forEach(item => {
    if (item.stats) {
      for (const key in item.stats) {
        const value = item.stats[key];
        if (aggregatedStatsTwo[key]) {
          aggregatedStatsTwo[key] += value;
        } else {
          aggregatedStatsTwo[key] = value;
        }
      }
    }
  });
  } 
  // Logic for adding stats to armorStats object

if (secondCompareItemsObjects) {
  secondCompareItemsObjects.forEach(item => {
    if(
      Object.keys(item)[0] === 'armor_id' || Object.keys(item)[0] === 'implant_id' ||
      Object.keys(item)[0] === 'food_id' || Object.keys(item)[0] === 'med_id'  ) {
      if (item.stats) {
        for (const key in item.stats) {
          const value = item.stats[key];
          if (armorStatsTwo[key]) {
            armorStatsTwo[key] += value;
          } else {
            armorStatsTwo[key] = value;
          }
        }
      }
  }});
}
  // Logic for adding stats to weaponStats object
  
  if (secondCompareItemsObjects) {
    secondCompareItemsObjects.forEach(item => {
    if(Object.keys(item)[0] === 'weapon_id') {
      if (item.stats) {
        for (const key in item.stats) {
          const value = item.stats[key];
          if (weaponStatsTwo[key]) {
            weaponStatsTwo[key] += value;
          } else {
            weaponStatsTwo[key] = value;
          }
        }
      }
  }});
  }
  // Logic for handling agility and weapon_recoil

  for (let [weaponKey, weaponValue] of Object.entries(weaponStatsTwo)) {
    if (weaponKey === 'agility') {
      if (armorStatsTwo.agility) {
        armorStatsTwo.agility += weaponValue;
      }
      else{
        armorStatsTwo.agility = weaponValue
      }
      delete weaponStatsTwo.agility
    }
  };

  for (let [armorKey, armorValue] of Object.entries(armorStatsTwo)) {
    if (armorKey === 'weapon recoil') {
      if (weaponStatsTwo['weapon recoil']) {
        weaponStatsTwo['weapon recoil'] += armorValue;
      }
      else{
        weaponStatsTwo['weapon recoil'] = armorValue
      }
      delete armorStatsTwo['weapon recoil']
    }
  };

// Round decimals in each of the stat objects

// eslint-disable-next-line no-unused-vars
for (let [weaponKey, weaponValue] of Object.entries(weaponStatsTwo)) {

  if (typeof weaponStatsTwo[weaponKey] === 'number') {

    weaponStatsTwo[weaponKey] = Math.round(weaponStatsTwo[weaponKey] * 10000) / 10000

}

};


// eslint-disable-next-line no-unused-vars
for (let [armorKey, armorValue] of Object.entries(armorStatsTwo)) {

  if (typeof armorStatsTwo[armorKey] === 'number') {

    armorStatsTwo[armorKey] = Math.round(armorStatsTwo[armorKey] * 10000) / 10000
}

};


  return (
    <div className="stats-container text-white flex flex-col sm:mt-5 w-full h-full items-right justify-right">

      <div 
      className="bg-[url(assets/chart.png)] lg:bg-[url(assets/chartlg.png)] hover:bg-[url(assets/chartHover.png)] hover:lg:bg-[url(assets/chartHover.png)] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] cursor-pointer absolute top-1 right-2 lg:top-1 lg:right-2" 
      onClick={() => setShowRawStats(!showRawStats)}>
      </div>

      {!showRawStats && (
        <>
        <div className="defensive-stats mt-4 p-4 bg-indigo-900/70 rounded-md w-fit h-fit ml-70 lg:ml-230">
        <h2 className="underline sm:text-sm lg:text-xl text-center mb-3">Defensive Stats</h2>
        {Object.entries(armorStatsOne).map(([statName, statValue]) => (
          <p key={statName} className="sm:text-[12px] lg:text-xl">
            {statName}: {statValue}
          </p>
        ))}
      </div>

      <div className="offensive-stats mt-4 p-4 bg-indigo-900/70 rounded-md w-51 lg:w-79 h-fit ml-70 lg:ml-230">
        <h2 className="underline sm:text-sm lg:text-xl text-center mb-3">Offensive Stats</h2>
        {Object.entries(weaponStatsOne).map(([statName, statValue]) => (
          <p key={statName} className='sm:text-[12px] lg:text-xl'>
            {statName}: {statValue}
          </p>
        ))}
      </div>
        </>
      )}
      {showRawStats && (
        <>
        <div className="w-full h-full ml-25 lg:w-2/3 lg:h-2/3 lg:ml-140 lg:mt-3">
        <DefenseChartCompare 
            armorStatsOne={armorStatsOne} 
            armorStatsTwo={armorStatsTwo} />
        </div>


        <div className="w-full h-full ml-25 lg:w-2/3 lg:h-2/3 lg:ml-140 lg:mt-3">
        <OffenseChartCompare 
            weaponStatsOne={weaponStatsOne} 
            weaponStatsTwo={weaponStatsTwo} />
        </div>
        </>
      )
      }
      
      
      
    </div>
  );
};

export default CompareStatsDisplay;


 
