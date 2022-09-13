import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext() // reemplazamos redux con esto. Creamos un contexto al cual toda nuestra app podrá acceder.

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

// Children va siempre. Renderiza los componentes que están dentro del contexto que mostremos.
// value es un objeto, le llega a todos los componentes de nuestra app

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true) // seteamos los estados que le pasaremos a los componentes de la app
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03c9d7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }

    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem('colorMode', e.target.value)
        setThemeSettings(false)
    }


    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }


    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode, themeSettings, setThemeSettings, setMode, setColor }}> 
            {children}
        </StateContext.Provider>
    )
}

// Exportamos el contexto para usarlo en los componentes. Le pasamos como parámetro el contexto que queremos utilizar.
export const useStateContext = () => useContext(StateContext)