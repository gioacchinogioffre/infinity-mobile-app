import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'


import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth) // seteamos el tamano actual de la ventana 
    window.addEventListener('resize', handleResize) // escuchamos cada vez que la ventana cambia de tamano y llamamos a la función para obtener el ancho actual
  
    handleResize()

      return () => window.removeEventListener('resize', handleResize) // siempre hay que remover los eventos
    
  }, [])

  useEffect(() => {
      if (screenSize <= 900) setActiveMenu(false)
      else setActiveMenu(true)
  }, [screenSize])


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={() => setActiveMenu(prev => !prev)} color='red' icon={<AiOutlineMenu/>} />
      <div className='flex'>
        <NavButton title='Cart' customFunc={() => handleClick('cart')} color='red' icon={<FiShoppingCart/>} />
        <NavButton title='Chat' customFunc={() => handleClick('chat')} color='red' icon={<BsChatLeft/>} dotColor='black' />
        <NavButton title='Notifications' customFunc={() => handleClick('notification')} color='red' icon={<RiNotification3Line/>} dotColor='black' />
        <TooltipComponent content='Profile' position='BottomCenter'>
            <div className='flex gap-2 items-center cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
              <img src={avatar} className='rounded-full w-8 h-8'/>
              <p>
                <span className='text-gray-400 text-14'>Hi, </span>
                <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            </div>
        </TooltipComponent>
        { isClicked.cart && <Cart/>}
        { isClicked.chat && <Chat/>}
        { isClicked.notification && <Notification/>}
        { isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar