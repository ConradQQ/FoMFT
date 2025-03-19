const StatsDisplay = ({ totalStats }) => {
  if (!totalStats || Object.keys(totalStats).length === 0) {
    return <div className="mt-4">No stats to display.</div>;
  }

  return (
    <div className="stats-display mt-4 p-4 bg-amber-500 rounded-md">
      <h2>Total Stats</h2>
      {Object.entries(totalStats).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </div>
  );
};

export default StatsDisplay