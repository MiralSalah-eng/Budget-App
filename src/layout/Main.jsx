import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { fetchData } from '../helpers'
import wave from '../assets/wave.svg'
export function mainLoader() {
  const userName =  fetchData('userName')
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()
  return (
    <div className="layout">
      <Navbar userName={userName} />
    <main>
      <Outlet/>
    </main>
    <img src={wave} alt="footer"/>
    </div>
  )
}

export default Main