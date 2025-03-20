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
    if(Object.keys(item)[0] === 'armor_id') {
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


 