import { useEffect, useState } from 'react'
import './styles/navbar.css'

// icons
import { IoCartOutline } from 'react-icons/io5'
import { HiMenuAlt2 } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  const [scrolled, setScroll] = useState()

  // turn dark background when scrolled
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
      <div className="nav-container">
        <img src="/logo.png" alt="" height={20} />

        <div className="nav-links">
          <FiSearch className="nav-link-icon" />
          <IoCartOutline className="nav-link-icon" />
          <HiMenuAlt2 className="nav-link-icon" />
        </div>

      </div>
    </nav>
  )
}

export default Navbar
