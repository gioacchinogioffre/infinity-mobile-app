import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'


const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-red-500 '
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-red-400 hover:text-white m-2'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && 
        <>
          <div className='flex justify-between items-center'>
            <Link to='/' onClick={()=> setActiveMenu(false)} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
              <SiShopware/> <span>Infinity</span>
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
                  <NavLink key={link.name} to={`/${link.name}`} onClick={()=>{}} className={({ isActive })=> isActive ? activeLink : normalLink}>
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default Sidebar