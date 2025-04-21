/* eslint-disable no-prototype-builtins */
import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const OffenseChartCompare = ({weaponStatsOne, weaponStatsTwo}) => {


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

  let updatedData = weaponStatsOne
  ? data.map(item => {
    if (weaponStatsOne.hasOwnProperty(item.stat)) {
      return {
        ...item,
        A: weaponStatsOne[item.stat]
      };
    }
    return item;
  })
  : undefined;


   updatedData = weaponStatsTwo
  ? updatedData.map(item => {
    if (weaponStatsTwo.hasOwnProperty(item.stat)) {
      return {
        ...item,
        B: weaponStatsTwo[item.stat]
      };
    }
    return item;
  })
  : undefined;

  return (
      <ResponsiveContainer width="85%" height="45%">
        <BarChart
          width={500}
          height={300}
          data={updatedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          style={{fontSize:'10px', fontWeight: 'bold'}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="stat" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="A" fill="#8884d8" />
          <Bar dataKey="B" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
  );

}

export default OffenseChartCompare;
