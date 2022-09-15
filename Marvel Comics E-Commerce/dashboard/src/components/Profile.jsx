import React from 'react'
import avatar from '../data/profilepic.jpeg';
import { Button } from '.'
import { useStateContext } from '../contexts/ContextProvider';


const Profile = () => {

  const { currentColor } = useStateContext()


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg flex'>
        <form className= 'w-3/4'>
            <div className='mt-10'>
                <h1 className='font-bold text-xl mb-4 dark:text-white'>General Information</h1>
                <div className='flex mt-3'>
                    <div className='flex flex-col w-50'>
                        <label className='text-gray-500 dark:text-slate-400'>First Name</label>
                        <input className='w-80 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' value='Joaquín'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>Last Name</label>
                        <input className='w-80 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' value='Gioffre'></input>
                    </div>
                </div>
                <div className='flex mt-3'>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>Birthday</label>
                        <input className='w-80 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' type='date'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>Gender</label>
                        <select className='w-80 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500'>
                            <optgroup>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Prefer not to anwser</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className='flex mt-3'>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>Email</label>
                        <input className='w-80 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' value='j.gioffre@hotmail.com'></input>
                    </div>
                    <div className='flex flex-col' >
                        <label className='text-gray-500 dark:text-slate-400'>Phone</label>
                        <input className='w-80 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' value='+54 9 11 49397178'></input>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-xl mb-4 dark:text-white'>Address</h1>
                <div className='flex mt-3'>
                    <div className='flex flex-col w-50'>
                        <label className='text-gray-500 dark:text-slate-400'>Address</label>
                        <input className='w-96 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' value='Av. Siempreviva 123'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>Country</label>
                        <select className='w-64 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500'>
                            <optgroup>
                                <option>Argentina</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className='flex mt-3'>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>State</label>
                        <select className='w-52 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500'>
                            <optgroup>
                                <option>Buenos Aires</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>City</label>
                        <input className='w-52 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' value='Buenos Aires'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-gray-500 dark:text-slate-400'>ZIP</label>
                        <input className='w-52 border-2 border-solid border-slate-300 rounded-md p-1 mr-4 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' value='1405'></input>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <button className='mt-8 w-20 text-white p-2 rounded-md' style={{backgroundColor: currentColor}}>
                Save All
            </button>
        </form>
        <div className='flex flex-col items-center mt-24'>
            <img className='w-44 h-44 rounded-full' src={avatar} alt='profilePic'></img>
            <h1 className='dark:text-white text-lg mt-4'>Joaquín Gioffre</h1>
            <h3 className='dark:text-slate-500'>Admin / Front-End Developer</h3>
            <span className='dark:text-slate-500'>Buenos Aires, Argentina</span>
        </div>
    </div>
  )
}

export default Profile