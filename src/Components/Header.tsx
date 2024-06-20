import React from 'react';
import Group from "../assets/Group.svg";
import { BsFillBellFill, BsPersonCircle, BsSearch } from 'react-icons/bs';
import { LuMenu } from "react-icons/lu";
import '../Css/Dashboard.scss';

interface HeaderProps {
  OpenSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ OpenSidebar }) => {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <LuMenu className='icon' onClick={OpenSidebar} />
      </div>

      <div className='logo'>
        <img src={Group} alt="Logo" className='' />
      </div>
    
      <div className='header-left'>
        <input type="text" placeholder='Search for anything' className='' />
        <button type='submit'><BsSearch /></button>
      </div>
      
      <div className='header-right'>
        <BsFillBellFill className='icon cursor-pointer' />
        <BsPersonCircle className='icon cursor-pointer' />
      </div>
    </header>
  );
}

export default Header;
