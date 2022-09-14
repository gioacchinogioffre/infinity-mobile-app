import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Footer, Sidebar, ThemeSettings, Navbar } from './components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, ColorPicker, ColorMapping, Editor, Line, Audience } from './pages'
import './App.css'
import { useStateContext } from './contexts/ContextProvider'


/*SETTINGS BUTTON
Le damos inline style en el color del background para ir cambiando los theme color del dashboard. 
*/

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>

            <div className='flex relative dark:bg-main-dark-bg'> 
                <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent content='Settings' position='Top'>
                        <button type='button' onClick={() => setThemeSettings(true)} className='text-4xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{backgroundColor: currentColor, borderRadius: '50%'}} >
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar/>
                    </div>  
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar/>
                    </div>
                )}
                <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar/>
                    </div>
                    <div>
                    
                    {themeSettings && <ThemeSettings/>}  

                    <Routes>
                        {/* DASHBOARD */}
                        <Route path='/' element={<Ecommerce/>}/>
                        <Route path='/Ecommerce' element={<Ecommerce/>}/>

                        {/* PAGES */}
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/employees' element={<Employees/>}/>
                        <Route path='/customers' element={<Customers/>}/>

                        {/* APPS */}
                        <Route path='/kanban' element={<Kanban/>}/>
                        <Route path='/editor' element={<Editor/>}/>
                        <Route path='/calendar' element={<Calendar/>}/>
                        <Route path='/color-picker' element={<ColorPicker/>}/>

                        {/* CHARTS */}
                        <Route path='/inflation%20rate' element={<Line/>}/>
                        <Route path='/area' element={<Area/>}/>
                        <Route path='/bar' element={<Bar/>}/>
                        <Route path='/pie' element={<Pie/>}/>
                        <Route path='/audience' element={<Audience/>}/>
                        <Route path='/color-mapping' element={<ColorMapping/>}/>
                        <Route path='/pyramid' element={<Pyramid/>}/>
                        <Route path='/revenue' element={<Stacked/>}/>

                    </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App