const StatsDisplay = ({ itemObjects }) => {

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
      if (item.stats) {
        for (const key in item.stats) {
          const value = item.stats[key];
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
    <div className="stats-container">
      <div className="defensive-stats mt-4 p-4 bg-amber-500 rounded-md">
        <h2 className="underline sm:text-sm">Defensive Stats</h2>
        {Object.entries(armorStats).map(([statName, statValue]) => (
          <p key={statName} className="sm:text-sm">
            {statName}: {statValue}
          </p>
        ))}
      </div>
      <div className="offensive-stats mt-4 p-4 bg-amber-500 rounded-md">
        <h2 className="underline sm:text-sm">Offensive Stats</h2>
        {Object.entries(weaponStats).map(([statName, statValue]) => (
          <p key={statName} className='sm:text-sm'>
            {statName}: {statValue}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StatsDisplay;


 