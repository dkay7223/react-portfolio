import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#")


  return (
    <div>
      <nav>

      <a
        href="#home"
        className={activeNav==='#home' ? 'an active' : 'an' }
        onClick={()=>setActiveNav('#home')}
      >
        <h3> Home</h3>
      </a>
      <a
        href="#add"
        className={activeNav==='#add' ? 'an active' : 'an' }
        onClick={()=>setActiveNav('#add')}
      >
        <h3> Add</h3>
      </a>

      <a
        href="#update"
        onClick={()=>setActiveNav('#update')}
        className={activeNav==='#update' ? 'an active' : 'an' }
      >
        <h3>update</h3>
      </a>

     
      </nav>
    </div>
  )
} 

export default Navbar
