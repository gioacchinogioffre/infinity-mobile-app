import React from 'react';
import { Header, Stacked as StackedChart } from '../../components';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 pb-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Analytics" title="Revenue Breakdown" />
    <ChartComponent id='charts' primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} chartArea={{border: {width: 0}}} tooltip={{enable:true}} width='full' heigth='320px' legendSettings={{background: 'white'}}>
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item}/>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  </div>
);

export default Stacked;