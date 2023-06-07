import './styles/navbar.css'
import { IoCartOutline } from 'react-icons/io5'
import { HiMenuAlt2 } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScroll] = useState()
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  })

  return (
    <nav
      className="nav"
      style={{
        backgroundColor: scrolled ? '#333' : 'transparent',
      }}
    >
      <img src="/logo.png" alt="" height={20} />

      <div className="nav-links">
        <FiSearch className="nav-link-icon" />
        <IoCartOutline className="nav-link-icon" />
        <HiMenuAlt2 className="nav-link-icon" />
      </div>
    </nav>
  )
}

export default Navbar
