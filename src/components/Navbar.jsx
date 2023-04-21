import React from 'react'
import { Form, NavLink } from 'react-router-dom'
import  logomark  from '../assets/logomark.svg'
import { TrashIcon } from '@heroicons/react/24/solid'

const Navbar = ({ userName }) => {
  return (
    <nav>
        <NavLink to='/'
         aria-label="Go to home">
        <img src={logomark} height={30} alt="logo" />
        <span>HomeBudget</span>
        </NavLink>
        
        {userName && (
            <Form 
            method='post'
             action='logout'
             onSubmit={(event) => {
                if (!window.confirm("Delete user and all data?")){
                    event.preventDefault()
                }
             }}
             >
                <button className='btn btn--warning'>
                    <span>Delete User</span>
                    <TrashIcon width={20} />
                </button>
            </Form>
        ) }
    </nav>
  )
}

export default Navbar