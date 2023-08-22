import React from 'react'
import TecnoPlay_Logo from '../../assets/img/TecnoPlay_Logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='flex bg-sky-700 sticky p-4 justify-between items-center pr-8'>
        <Link to="/">
          <img className=' h-24' src={TecnoPlay_Logo} alt = 'TecnoPlay logo'/>
        </Link>
        
        <ul className='flex gap-4 text-white items-center'>
          <li><Link to="/" className='hover:bg-sky-500 p-4 rounded-md'>Inicio</Link></li>
          <li><Link to="/categoria/SmartPhones" className='hover:bg-sky-500 p-4 rounded-md'>SmartPhones</Link></li>
          <li><Link to="/categoria/Notebooks" className='hover:bg-sky-500 p-4 rounded-md'>Notebooks</Link></li>
          <li><Link to="/categoria/Videojuegos" className='hover:bg-sky-500 p-4 rounded-md'>Videojuegos</Link></li>
          <li><CartWidget/></li>
        </ul>
        
    </nav>
  )
}

export default NavBar