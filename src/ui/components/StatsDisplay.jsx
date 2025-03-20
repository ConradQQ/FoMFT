const StatsDisplay = ({ itemObjects, slotTypes }) => {
  const aggregatedStats = {};

  itemObjects.forEach(item => {
    if (item.stats) {
      for (const key in item.stats) {
        const value = item.stats[key];
        if (aggregatedStats[key]) {
          // If the key exists, add the value to the existing value
          aggregatedStats[key] += value;
        } else {
          // If the key doesn't exist, initialize it as a single value
          aggregatedStats[key] = value;
        }
      }
    }
  });



 
  return (
    <div className="stats-display mt-4 p-4 bg-amber-500 rounded-md">
      <h2>Total Stats</h2>
      {Object.entries(aggregatedStats).map(([statName, statValue]) => (
        <p key={statName}>
          {statName}: {statValue}
        </p>
      ))}
    </div>
  );
};

export default StatsDisplay;
