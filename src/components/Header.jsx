import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
    <nav>Now you don't have to remember your tasks, all you have to do is finish them!</nav>
    <div className='header'>
        <Link to= '/'>Home</Link>
        <Link to= '/about'>About</Link>
        <Link to= '/contact'>Contact</Link>
    </div>
    </>
  )
}

export default Header;