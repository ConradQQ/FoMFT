import DefenseChart from "./DefenseChart";
import OffenseChart from "./OffenseChart";
import { useState } from "react";

const StatsDisplay = ({ itemObjects }) => {

  const [showRawStats, setShowRawStats] = useState(true);

  const aggregatedStats = {};
  const armorStats = {};
  const weaponStats = {};

  itemObjects.forEach(item => {
    if (item.stats) {
      for (const key in item.stats) {
        const value = item.stats[key];
        if (aggregatedStats[key]) {
          aggregatedStats[key] += value;
        } else {
          aggregatedStats[key] = value;
        }
      }
    }
  });
  
  // Logic for adding stats to armorStats object

  itemObjects.forEach(item => {
    if(
      Object.keys(item)[0] === 'armor_id' || Object.keys(item)[0] === 'implant_id' ||
      Object.keys(item)[0] === 'food_id' || Object.keys(item)[0] === 'med_id'  ) {
      if (item.stats) {
        for (const key in item.stats) {
          const value = item.stats[key];
          if (armorStats[key]) {
            armorStats[key] += value;
          } else {
            armorStats[key] = value;
          }
        }
      }
  }});

  // Logic for adding stats to weaponStats object
  
  itemObjects.forEach(item => {
    if(Object.keys(item)[0] === 'weapon_id') {
      if (item.stats_plus) {
        for (const key in item.stats_plus) {
          const value = item.stats_plus[key];
          if (weaponStats[key]) {
            weaponStats[key] += value;
          } else {
            weaponStats[key] = value;
          }
        }
      }
  }});

  // Logic for handling agility and weapon_recoil

  for (let [weaponKey, weaponValue] of Object.entries(weaponStats)) {
    if (weaponKey === 'agility') {
      if (armorStats.agility) {
        armorStats.agility += weaponValue;
      }
      else{
        armorStats.agility = weaponValue
      }
      delete weaponStats.agility
    }
  };

  for (let [armorKey, armorValue] of Object.entries(armorStats)) {
    if (armorKey === 'weapon recoil') {
      if (weaponStats['weapon recoil']) {
        weaponStats['weapon recoil'] += armorValue;
      }
      else{
        weaponStats['weapon recoil'] = armorValue
      }
      delete armorStats['weapon recoil']
    }
  };

// Round decimals in each of the stat objects

// eslint-disable-next-line no-unused-vars
for (let [weaponKey, weaponValue] of Object.entries(weaponStats)) {

  if (typeof weaponStats[weaponKey] === 'number') {

    weaponStats[weaponKey] = Math.round(weaponStats[weaponKey] * 10000) / 10000

}

};


// eslint-disable-next-line no-unused-vars
for (let [armorKey, armorValue] of Object.entries(armorStats)) {

  if (typeof armorStats[armorKey] === 'number') {

    armorStats[armorKey] = Math.round(armorStats[armorKey] * 10000) / 10000
}

};


  return (
    <div className="stats-container text-white flex flex-col sm:mt-5 w-full h-full items-center">
      <div 
      className="bg-[url(assets/chart.png)] lg:bg-[url(assets/chartlg.png)] hover:bg-[url(assets/chartHover.png)] hover:lg:bg-[url(assets/chartHover.png)] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] cursor-pointer absolute top-1 right-56 lg:top-1 lg:right-140" 
      onClick={() => setShowRawStats(!showRawStats)}></div>

      {!showRawStats && (
        <>
        <div className="defensive-stats mt-4 p-4 bg-indigo-900/70 rounded-md ">
        <h2 className="underline sm:text-sm lg:text-xl text-center mb-3">Defensive Stats</h2>
        {Object.entries(armorStats).map(([statName, statValue]) => (
          <p key={statName} className="sm:text-[12px] lg:text-xl">
            {statName}: {statValue}
          </p>
        ))}
      </div>

      <div className="offensive-stats mt-4 p-4 bg-indigo-900/70 rounded-md">
        <h2 className="underline sm:text-sm lg:text-xl text-center mb-3">Offensive Stats</h2>
        {Object.entries(weaponStats).map(([statName, statValue]) => (
          <p key={statName} className='sm:text-[12px] lg:text-xl'>
            {statName}: {statValue}
          </p>
        ))}
      </div>
        </>
      )}
      {showRawStats && (
        <>
        <p className="ml-2">Defense Stats</p>
        <DefenseChart armorStats={armorStats} />
        
        <p className="ml-1">DPS</p>
        <OffenseChart weaponStats={weaponStats} />
        </>
      )
      }
      
      
      
    </div>
  );
};

export default StatsDisplay;


 
