import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import logo from '../data/logoInfinity.png'



const AddProduct = () => {

  const { currentColor } = useStateContext()


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg flex'>
        <form className= 'w-3/4'>
            <div className='mt-10'>
                <h1 className='font-bold text-xl mb-4 dark:text-white'>Add a new product</h1>
                <div className='flex mt-3'>
                    <div className='flex flex-col w-50'>
                        <label className='text-gray-500 dark:text-slate-400'>Name</label>
                        <input className='w-80 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>Publication Date</label>
                        <input className='w-80 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' type='date'></input>
                    </div>
                </div>
                <div className='flex mt-3'>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>Price (USD)</label>
                        <input className='w-52 border-2 border-solid border-slate-300 rounded-md p-1 mr-2 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' type='number'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>Rating</label>
                        <select className='w-52 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500'>
                            <optgroup>
                                <option>1</option>
                                <option>2</option>
                                <option selected>3</option>
                                <option>4</option>
                                <option>5</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>Stock</label>
                        <input className='w-52 border-2 border-solid border-slate-300 rounded-md p-1 mr-2 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' type='number'></input>
                    </div>
                </div>
                <div className='flex mt-3'>
                    <div className='flex flex-col'>
                    <label className='text-gray-500 dark:text-slate-400'>Language</label>
                        <select className='w-56 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500'>
                            <optgroup>
                                <option>ES</option>
                                <option selected>EN</option>
                                <option>GR</option>
                                <option>IT</option>
                                <option>CH</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className='flex flex-col' >
                        <label className='text-gray-500 dark:text-slate-400'>Dimensions</label>
                        <input className='w-80 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500'></input>
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='flex flex-col w-50'>
                        <label className='text-gray-500 dark:text-slate-400'>Description</label>
                        <textarea className='w-3/4 border-2 h-32 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500'  ></textarea>
                    </div>
                </div>
            </div>
            <button className='mt-8 w-20 text-white p-2 rounded-md hover:drop-shadow-lg' style={{backgroundColor: currentColor}}>
                Confirm
            </button>
        </form>
        <div className='flex flex-col items-center mt-24 ml-5'>
            <img src={logo} alt='profilePic'></img>
            <button className='mt-12 w-44 text-white p-2 rounded-md bg-black hover:drop-shadow-lg'>
                Upload image
            </button>
        </div>
    </div>
  )
}

export default AddProduct