/* eslint-disable no-prototype-builtins */
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const DefenseChart = ({armorStats}) => {


  const data = [
    {
      stat: 'armor',
      A: 0,
      fullMark: 300,
    },
    {
      stat: 'shielding',
      A: 0,
      fullMark: 300,
    },
    {
      stat: 'endurance',
      A: 0,
      fullMark: 300,
    },
    {
      stat: 'resistance',
      A: 0,
      fullMark: 300,
    },
    {
      stat: 'reflection',
      A: 0,
      fullMark: 300,
    },
  ];

  const updatedData = armorStats 
  ? data.map(item => {
    if (armorStats.hasOwnProperty(item.stat)) {
      return {
        ...item,
        A: armorStats[item.stat]
      };
    }
    return item;
  })
  : undefined

  return (
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="51%" cy="40%" outerRadius="60%" data={updatedData} style={{fontSize: '12px'}}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" />
          <Radar name="Defense" dataKey="A" stroke="#8884d8" fill="#3F51B5" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
  );

}

export default DefenseChart;
