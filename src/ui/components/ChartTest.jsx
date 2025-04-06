import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const ChartTest = ({itemObjects, armorStats, weaponStats}) => {


  const data = [
    {
      stat: 'armor',
      A: 120,
      fullMark: 300,
    },
    {
      stat: 'shielding',
      A: 140,
      fullMark: 300,
    },
    {
      stat: 'endurance',
      A: 140,
      fullMark: 300,
    },
    {
      stat: 'resistance',
      A: 86,
      fullMark: 300,
    },
    {
      stat: 'reflection',
      A: 99,
      fullMark: 300,
    },
  ];

  const updatedData = data.map(item => {
    if (armorStats.hasOwnProperty(item.stat)) {
      return {
        ...item,
        A: armorStats[item.stat]
      };
    }
  });

  console.log(updatedData)

  return (
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="20%" outerRadius="40%" data={updatedData} style={{fontSize: '10px'}}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#3F51B5" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
  );

}

export default ChartTest;
