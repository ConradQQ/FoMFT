const StatsDisplay = ({ itemObjects, slotTypes }) => {
  const aggregatedStats = {};

  

  return (
    <div className="stats-display mt-4 p-4 bg-amber-500 rounded-md">
      <h2>Total Stats</h2>
      {itemObjects.map((item, index) => {
        console.log(itemObjects)
        return Object.entries(item.stats).map(([key, value]) => {
          console.log("Key:", key, "Value:", value); // Added console.log
          return (
            <p key={index + "-" + key}>
              {key}: {value}
            </p>
          );
        });
      })}
    </div>
  );
};

export default StatsDisplay;
