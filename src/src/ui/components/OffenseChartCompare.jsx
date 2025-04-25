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
  

// This needs refactoring




 
  const data = [
    {
      stat: 'DPS',
      A: 0,
      fullMark: 100,
    },
    {
      stat: 'destruction',
      A: 0,
      fullMark: 100,
    },
    {
      stat: 'alpha',
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
      <ResponsiveContainer width="85%" height="60%">
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
          style={{fontSize:'12px', fontWeight: 'bold', }}
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
