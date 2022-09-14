import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Header, Pie as PieChart, Stacked as StackedChart } from '../../components';


const audienceData = [
  { x: 'Male', y: 67, text: '67%' },
  { x: 'Female', y: 28, text: '28%' },
  { x: 'Prefer not to answer', y: 5, text: '5%' },
];

export const stackedChartData = [
  [
    { x: '18-24', y: 24 },
    { x: '25-34', y: 33 },
    { x: '35-44', y: 26 },
    { x: '45-54', y: 11 },
    { x: '55-64', y: 4 },
    { x: '65+', y: 2 },
  ]
];
const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Age',
    type: 'StackingColumn',
    background: 'blue',
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
  labelFormat: '{value}%',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 100,
  interval: 20,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}%',
};

const Audience = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Analytics" title="Audience" />
    <div className="w-full flex justify-center items-center mt-5">
      <StackedChart stackedCustomSeries={stackedCustomSeries} stackedPrimaryXAxis={stackedPrimaryXAxis} stackedPrimaryYAxis={stackedPrimaryYAxis} />
      <PieChart id="chart-pie" data={audienceData} legendVisiblity height="320px" width="320px" />
    </div>
  </div>
);

export default Audience;