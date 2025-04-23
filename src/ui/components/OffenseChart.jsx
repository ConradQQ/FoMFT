/* eslint-disable no-prototype-builtins */
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const OffenseChart = ({weaponStats}) => {


  const data = [
    {
      stat: 'xeno',
      A: 0,
      fullMark: 10,
    },
    {
      stat: 'ballistics',
      A: 0,
      fullMark: 100,
    },
    {
      stat: 'energy',
      A: 0,
      fullMark: 100,
    },
    {
      stat: 'destruction',
      A: 0,
      fullMark: 100,
    },
    {
      stat: 'bio',
      A: 0,
      fullMark: 100,
    },
    {
      stat: 'stamina',
      A: 0,
      fullMark: 100,
    },
    {
      stat: 'aura',
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


  return (
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="40%" outerRadius="60%" data={updatedData} style={{fontSize: '12px', color: 'red'}}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" style={{color: 'red'}} />
          <Radar name="Defense" dataKey="A" stroke="#8884d8" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
  );

}

export default OffenseChart;
