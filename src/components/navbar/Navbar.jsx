import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useEffect(()=>{
    console.log(location.pathname);
  },[location])
  return (
    <div className="navbar">
      <Link to='/' className={(location.pathname === '/')?'light':'defalutnav'}>Movies</Link>
      <Link to='/about' className={(location.pathname === '/about')?'light':'defalutnav'}>About</Link>
    </div>
  )
};

export default Navbar;
