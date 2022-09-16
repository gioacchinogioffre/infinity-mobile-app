import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import logo from '../data/logoInfinity.png'
import bg from '../data/backgroundLogin.jpg'
import { getUser } from '../redux/actions'
import { useStateContext } from '../contexts/ContextProvider'



const Login = () => {

 const { setIsAuthenticated } = useStateContext()

 const dispatch = useDispatch()  
 const history = useHistory()  
 const user = useSelector(state => state.user)
 const token = useSelector(state => state.token)
 
 useEffect (()=> {

    if (user.roles?.length && user?.roles[0]?.name === 'admin' && token) {
        setIsAuthenticated(prev => token)
        history.push('/Ecommerce')
    }

 }, [user, token])

 const [input, setInput] = useState({
        email: '',
        password: '',
       })

const handleOnChange = (e) => {

        setInput({
            ...input,
           [e.target.name]: e.target.value
        })
        // setError(validateForm({
        //     ...input,
        //     [e.target.name]:e.target.value
        // }))
}

const login = (e) => {
    e.preventDefault()
    dispatch(getUser(input))

    // navigation.navigate('Bottom')
}


  return (
    <div className='flex w-screen h-screen justify-center items-center' style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        {/* <div className='flex flex-col w-1/2  h-screen justify-center items-center bg-slate-600 text-white'>
            <h1 className='text-5xl mb-10'>Welcome to</h1>
        </div> */}
            <img className='w-1/3 h-90' src={logo} alt='infinity'></img>
            <form className='flex flex-col w-96 justify-center items-center h-96'>
                <div className='flex flex-col mb-4'>
                    <label className='text-gray-500 dark:text-slate-400'>Email</label>
                    <input className='w-72 border-2 border-solid border-slate-300 rounded-md p-1 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500' placeholder='example@email.com' name='email' value={input.email} onChange={e => handleOnChange(e)}></input>
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-gray-500 dark:text-slate-400'>Password</label>
                    <input className='w-72 border-2 border-solid border-slate-300 rounded-md p-1 dark:bg-secondary-dark-bg dark:text-white dark:border-slate-500'  placeholder='********' type='password' name='password' value={input.password} onChange={e => handleOnChange(e)}></input>
                </div>
                <button onClick={e => login(e)} className='rounded-lg w-72 text-center text-white bg-red-500 h-10 mt-4 p-1 hover:drop-shadow-xl hover:bg-slate-700'>Login</button>
            </form>
    </div>
  )
}

export default Login