import React, { useRef, useState } from 'react'
import './nav.css'
import menu_open from '../../assests/menu_open.svg'
import menu_close from '../../assests/menu_close.svg'
const Navbar = () => {
    const [menu, setMenu] = useState('home')
    const menuRef = useRef();

    const openMenu = ()=> {
        menuRef.current.style.right="0";
    }
    const closeMenu = ()=> {
        menuRef.current.style.right="-350px";
    }
    return(
       <div id="Navbar" className="navbar">
           <img src={menu_open} onClick={openMenu} alt="" class className="nav-mob-open" />
       <div className="nav-menu">
        <ul ref={menuRef}>
            <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
            <li className={menu==='home'? "active": ''}><a className='anchor-link' href="#home"><p onClick={() => setMenu('home')}>Home</p></a></li>
            <li className={menu==='About'? "active": ''}><a className='anchor-link'  href="#About"><p onClick={() => setMenu('About')}>About me</p></a></li>
            <li className={menu==='service'? "active": ''}><a className='anchor-link'  href="#service"><p onClick={() => setMenu('service')}>Services</p></a></li>
            <li className={menu===''? "active": ''}><a className='anchor-link'  href="#home"><p onClick={() => setMenu('')}>Portfolio</p></a></li>
            <li className={menu==='Contact'? "active": ''}><a className='anchor-link'  href="#Contact"><p onClick={() => setMenu('Contact')}>Contact</p></a></li>
        </ul>
       </div>
       <div className="nav-connect">
       <a className='anchor-connect' offset={50} href="#Contact"> Connect with me</a>
       </div>
       </div>
    );
}
export default Navbar;