import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Sidebar, ThemeSettings, Navbar, Profile, AddProduct } from './components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Customers, Kanban, Login, Bar, Pie, ColorPicker, ColorMapping, Editor, Line, Audience } from './pages'
import './App.css'
import { useStateContext } from './contexts/ContextProvider'




/*SETTINGS BUTTON
Le damos inline style en el color del background para ir cambiando los theme color del dashboard. 
*/

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, isAuthenticated } = useStateContext()

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>

            {isAuthenticated ? 
            
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

                    <React.Fragment>
                        {/* DASHBOARD */}
                        <Route path='/Ecommerce' component={Ecommerce}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/add product' component={AddProduct}/>

                        {/* PAGES */}
                        <Route path='/orders' component={Orders}/>
                        <Route path='/employees' component={Employees}/>
                        <Route path='/customers' component={Customers}/>

                        {/* APPS */}
                        <Route path='/kanban' component={Kanban}/>
                        <Route path='/editor' component={Editor}/>
                        <Route path='/calendar' component={Calendar}/>
                        <Route path='/color-picker' component={ColorPicker}/>

                        {/* CHARTS */}
                        <Route path='/sales' component={Line}/>
                        {/* <Route path='/area' component={<Area/>}/> */}
                        {/* <Route path='/bar' component={<Bar/>}/> */}
                        <Route path='/costs' component={Pie}/>
                        <Route path='/audience' component={Audience}/>
                        {/* <Route path='/color-mapping' component={<ColorMapping/>}/> */}
                        {/* <Route path='/pyramid' component={<Pyramid/>}/> */}
                        <Route path='/revenue' component={Stacked}/>
                    </React.Fragment>
                    </div>
                </div>
            </div>
            : 
            <React.Fragment>
                <Route path='/' component={Login}/>
            </React.Fragment>
            }
        </BrowserRouter>
    </div>
  )
}

export default App