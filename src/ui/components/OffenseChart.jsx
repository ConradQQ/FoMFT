import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const OffenseChart = ({weaponStats}) => {


  const data = [
    {
      stat: 'xeno dmg',
      A: 0,
      fullMark: 10,
    },
    {
      stat: 'ballistics dmg',
      A: 0,
      fullMark: 100,
    },
    {
      stat: 'energy dmg',
      A: 0,
      fullMark: 100,
    },
    
  ];

  const updatedData = weaponStats
  ? data.map(item => {
    if (weaponStats.hasOwnProperty(item.stat)) {
      return {
        ...item,
        A: weaponStats[item.stat]
      };
    }
    return item;
  })
  : undefined;

  console.log(updatedData)

  return (
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={updatedData} style={{fontSize: '11px'}}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" />
          <Radar name="Defense" dataKey="A" stroke="#8884d8" fill="#3F51B5" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
  );

}

export default OffenseChart;
