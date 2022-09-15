import React from 'react'
import { Header } from '../../components'
import LineChart from '../../components/Charts/LineChart.jsx'



const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Analytics' title='Annual Sales Rate'/>
      <div className='w-full mt-4'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line