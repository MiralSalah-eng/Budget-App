import React from 'react'
import { Form } from 'react-router-dom'
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from'../assets/illustration.jpg'

const Intro = () => {
  return (
    <div className="intro">
        <div>
        <h1>Take Control of<span className='accent'> Your Money</span></h1>
        <p>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
       <Form method='post'>
        <input type='text'  required
            placeholder="What is your name?" aria-label="Your Name"
            name='userName'
            autoComplete="given-name"/>
            <input type='hidden' name="_action" value="newUser"/>
            <button className='btn btn--dark'>
                <span>Craete account</span>
                <UserPlusIcon width={20} />
            </button>
       </Form>
        </div>
        <img src={illustration} alt="illustration"/>
        
    </div>
  )
}

export default Intro