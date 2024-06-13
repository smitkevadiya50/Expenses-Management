import { BarChart } from '@mui/x-charts';
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';

const g1 = [400, 300, 200, 278, 500, 600, 550];
const g2 = [240, 138, 980, 398, 600, 650, 722];
const g3 = [240, 600, 650, 722, 450, 344, 500];

const income = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const expenses = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

const xLabels = [
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
];

const Dashboard: React.FC = () => {
  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-1 xl:grid-cols-2'>
      <BarChart
      className='md:w-1/2 md:h-1/2'
        xAxis={[{ scaleType: 'band', data: ['group 1', 'group 2', 'group 3'] }]}
        series={[{ data: [500, 600, 550] }, { data: [600, 650, 722] }, { data: [450, 344, 500] }]}
        height={400}
        width={500}
      />
      <LineChart
        height={400}
        width={500}
        series={[
          { data: g1, label: 'Group 1', id: '1' },
          { data: g2, label: 'Group 2', id: '2' },
          { data: g3, label: 'Group 3', id: '3' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
            strokeWidth: 1,
          },
          '.MuiLineElement-series-pvId': {
            strokeDasharray: '5 5',
          },
          '.MuiLineElement-series-uvId': {
            strokeDasharray: '3 4 5 2',
          },
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
            fill: '#fff',
          },
          [`& .${markElementClasses.highlighted}`]: {
            stroke: 'none',
          },
        }}
      />
      <LineChart
      width={500}
      height={300}
      series={[
        { data: expenses, label: 'Income', area: true, stack: 'total', showMark: false },
        {
          data: income,
          label: 'Expenses',
          area: true,
          stack: 'total',
          showMark: false,
        },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
    />
      <PieChart
      title='This Month'
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'Group 1' },
                { id: 1, value: 15, label: 'Group 2' },
                { id: 2, value: 20, label: 'Group 3' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};

export default Dashboard;
