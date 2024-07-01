import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'


const LogoutBtn = ({isOpen}) => {

    const dispatch = useDispatch()

    const logoutHandler = ()=>{
        authService.logout().then((result)=>{ if(result){dispatch(logout())}}).catch(error=>console.log("error : ",error))
    }
  return (

   <button className={`m-1 inline-block px-6 py-2 text-white duration-200 bg-blue-400 hover:bg-red-500 rounded-full`} onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn