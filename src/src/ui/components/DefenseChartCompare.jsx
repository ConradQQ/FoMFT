import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Label,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const DefenseChartCompare = ({armorStatsOne, armorStatsTwo}) => {

const data = [
  {
    stat: 'armor',
    A: 0,
    B: 0,
    amt: 10,
  },
  {
    stat: 'shielding',
    A: 0,
    B: 0,
    amt: 10,
  },
  {
    stat: 'endurance',
    A: 0,
    B: 0,
    amt: 10,
  },
  {
    stat: 'resistance',
    A: 0,
    B: 0,
    amt: 10,
  },
  {
    stat: 'reflection',
    A: 0,
    B: 0,
    amt: 10,
  }
  // {
  //   stat: 'Page F',
  //   A: 0,
  //   B: 0,
  //   amt: 10,
  // },
  // {
  //   stat: 'Page G',
  //   A: 0,
  //   B: 0,
  //   amt: 10,
  // },
];

  let updatedData = armorStatsOne 
  ? data.map(item => {
    if (armorStatsOne.hasOwnProperty(item.stat)) {
      return {
        ...item,
        A: armorStatsOne[item.stat]
      };
    }
    return item;
  })
  : undefined

updatedData = armorStatsTwo 
  ? updatedData.map(item => {
    if (armorStatsTwo.hasOwnProperty(item.stat)) {
      return {
        ...item,
        B: armorStatsTwo[item.stat]
      };
    }
    return item;
  })
  : undefined
  

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
          style={{fontSize:'11px', fontWeight: 'bold', fill: 'blue' }}
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
    )
};
export default DefenseChartCompare;
