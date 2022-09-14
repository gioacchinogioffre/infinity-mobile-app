import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartDat } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'



const Ecommerce = () => {
  const { currentColor } = useStateContext()

  return (
    <div className='mt-12'>
        <div className='bg-white dark:text-black  dark:bg-secondary-dark-bg h-50 rounded-xl w-11/12 p-5 pt-9 m-4 bg-hero-pattern bg-no-repeat bg-cover bg-center ml-16'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63.123,87</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button size='md' color='white' bgColor={currentColor} text='Download' borderRadius='10px'></Button>
          </div>
        </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        <div className='flex m-3 flex-wrap justify-between gap-6 '>
          {
            earningData.map(item => (
              <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl items-center justify-center'>
                <button className='rounded-full hover:drop-shadow-xl cursor-pointer  items-center'>
                  <img src={item.image} alt='image' className='rounded-full w-14 h-14 hover:drop-shadow-xl cursor-pointer' />
                </button>
                <p>
                  <span className='text-lg font-semibold'>{item.amount}</span>
                  {item.pcColor === 'red-600' 
                  ? <span className={`text-sm text-red-600 ml-2`}>{item.percentage}</span> 
                  : <span className={`text-sm text-green-600 ml-2`}>{item.percentage}</span>}
                </p>
                <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-5 p-4 rounded-2xl md:w-780 w-full' >
          <div className='flex justify-between'>
              <p className='font-semibold text-xl'>
                  Revenue Updates
              </p>
              <div className='flex items-center gap-4'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot/>
                  </span>
                  <span>
                    Expense
                  </span>
                </p>
                <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot/>
                  </span>
                  <span>
                    Budget
                  </span>
                </p>
              </div>
          </div>

        </div>
        <div className='flex gap-10 flex-wrap justify-center'>
          <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold dark:text-white'>
                    $93.456,92
                  </span>
                  <span className='p-1.5 hover:drop-shadow-xl rounded-md text-white bg-green-500 ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold dark:text-white'>
                    $48.345,92
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Expense
                </p>
              </div>
              <div className='mt-5'>
                <SparkLine currentColor='black' id='sparkline' type='Line' height='80px' width='250px' data={SparklineAreaData} color={currentColor} />
              </div>
              <div className='mt-10'>
                <Button color='white' bgColor={currentColor}  text='Download Report' borderRadius='1vw'/>
              </div>
          </div>
          <div>
             <Stacked width='320px' height='200px'  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce