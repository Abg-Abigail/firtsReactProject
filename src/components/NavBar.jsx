import React from 'react'
import logoImg from "../assets/download.png"

const NavBar = () => {
  

  return (
    <header>
        <nav>
            <a href = "index.html" class = "nav-logo">
                <img src= {logoImg} alt = "Logo" />
            </a>
            <ul class = "nav-menu">
                <li class = "menu-item">
                    <a href = "#">Songs</a>
                </li>
                <li class = "menu-item">
                    <a href = "#">About Us</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar