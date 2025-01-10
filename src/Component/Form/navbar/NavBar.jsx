import { useState } from 'react'
import './nav.css'
function NavBar(){
    const [Islogin,SetLogin]=useState(false)

       function handliaerLogin(){
        SetLogin(!Islogin)
       }
    
    return(
        <nav class="navbar">
    <div class="logo">MySite</div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li  >  
         <button onClick={handliaerLogin}>
            {Islogin ? '<a>Logout</a>' : '<a>Login</a>'}
          </button></li>

    </ul>
  </nav>
    )
}
export default NavBar