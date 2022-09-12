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
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
        {icon}
      </span>
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()


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
                <span claassName='text-gray-400 text-14'>Hi, </span>
                <span claassName='text-gray-400 font-bold ml-1 text-14'>Michael</span>
              </p>

            </div>
        </TooltipComponent>
      </div>
    </div>
  )
}

export default Navbar