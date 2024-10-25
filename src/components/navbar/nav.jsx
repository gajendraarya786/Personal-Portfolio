import React, { useCallback, useState } from 'react'
import './nav.css'

const Navbar = () => {
    const [menu, setMenu] = useState('home')
    return(
       <div id="Navbar" className="navbar">
       <div className="nav-menu">
        <ul>
            <li className={menu==='home'? "active": ''}><a className='anchor-link' href="#home"><p onClick={() => setMenu('home')}>Home</p></a></li>
            <li className={menu==='About'? "active": ''}><a className='anchor-link' offset={50} href="#About"><p onClick={() => setMenu('About')}>About me</p></a></li>
            <li className={menu==='service'? "active": ''}><a className='anchor-link' offset={50} href="#service"><p onClick={() => setMenu('service')}>Services</p></a></li>
            <li className={menu===''? "active": ''}><a className='anchor-link' offset={50} href="#home"><p onClick={() => setMenu('')}>Portfolio</p></a></li>
            <li classame={menu==='Contact'? "active": ''}><a className='anchor-link' offset={50} href="#Contact"><p onClick={() => setMenu('Contact')}>Contact</p></a></li>
        </ul>
       </div>
       <div className="nav-connect">
        Connect with me
       </div>
       </div>
    );
}
export default Navbar;