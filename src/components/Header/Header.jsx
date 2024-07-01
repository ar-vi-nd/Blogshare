import React from 'react'
import {Container,Logo} from "../index"
import LogoutBtn from './LogoutBtn'
import { Link , NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const authStatus = useSelector((state)=>{return state.auth.status})
    const navigate = useNavigate();

    const navItems  = [
        {name:"Home",slug:"/",active:true},
        {name:"Login",slug:"/login",active:!authStatus},
        {name:"Signup",slug:"/signup",active:!authStatus},
        {name:"All Posts",slug:"/all-posts",active:authStatus},
        {name:"Add Post",slug:"/add-post",active:authStatus},
    ]

    // console.log("authStatus ",authStatus)




  return (
    <header className='py-3 shadow bg-rose-200'>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to="/">
                    <Logo width='50px'/>
                    </Link>
                </div>

                <ul className='flex ml-auto'>
                    {navItems.map((item)=>( item.active?<li key={item.name}><NavLink to={item.slug} className={({isActive}) =>
                                        `${isActive?"font-bold text-black":"text-white"}`
                                    }>
                        <button className='inline-block px-4 py-2 duration-200 bg-blue-400 hover:bg-blue-500 hover:px-6 rounded-full' onClick={()=>{navigate(item.slug)}}>{item.name}</button>
                        </NavLink></li>:null))}
                    {authStatus&&(<li><LogoutBtn textColor="text-white" /></li>)}
                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header