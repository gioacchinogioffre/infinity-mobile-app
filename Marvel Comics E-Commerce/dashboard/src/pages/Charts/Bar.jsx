import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, Legend, BarSeries, Tooltip, Category } from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Bar = () => {

  const { currentMode } = useStateContext()


  return (
  <div className='m-4 md:m-10 mt-24 p10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Chart' title='Bar'/>
    <ChartComponent id='bar-chart' height='420px' primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} chartArea={{border: {width: 0}}} tooltip={{enable: true}} background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
      <Inject services={[BarSeries, DataLabel, Legend, Tooltip, Category]}/>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} type='Bar'/>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  </div>
  )
}

export default Bar