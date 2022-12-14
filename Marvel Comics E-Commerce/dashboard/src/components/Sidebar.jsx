import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import logo from '../data/logoInfinity.png'
import { LegendItemStyle } from '@syncfusion/ej2-react-charts'


const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor, currentMode } = useStateContext()

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) setActiveMenu(false)
  } // seteamos funcion para que se cierre el menu cuando clickeamos en una de las navegaciones estando en mobile para no tener que cerrarlo a mano.

  const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-red-500`
  const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-slate-300 hover:text-slate-700 m-2`

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && 
        <>
          <div className='flex justify-between items-center'>
            <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
              <img className='w-20 h-10' src={logo} alt='logo'/><span className='ml-3'>INFINITY</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button type='button' onClick={()=>setActiveMenu(prev=> !prev)} className='text-xl rounded-full p-3 hover:bg-red-500 hover:text-white mt-4 block md:hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map(l => (
              <div key={l.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>{l.title}</p>
                {l.links.map(link => (
                  <NavLink key={link.name} to={`/${link.name}`} onClick={handleCloseSideBar} activeStyle={{backgroundColor: currentColor, color: 'white'}} className={({ isActive })=> isActive ? activeLink : normalLink}>
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          <div className='flex ml-3'>
            <button className='m-3 mt-10 flex items-center'>
              <TbLogout color={currentMode==='Dark' && 'white'}/>
              <span className={`ml-5 ${currentMode==='Dark' && 'text-white'}`}>Logout</span>
              </button>
          </div>
        </>

      }
    </div>
  )
}

export default Sidebar