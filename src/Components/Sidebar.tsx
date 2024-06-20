import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { MdLocationPin } from 'react-icons/md';
import { BiSolidBriefcase } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { BsFillGearFill } from 'react-icons/bs';
import { HiUsers } from "react-icons/hi2";
import { FaUsers, FaRegHandshake } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import '../Css/Dashboard.scss';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <aside id="sidebar" className={isOpen ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-black">
                    {/* You can add a logo or title here */}
                    Sidebar
                </div>
                <span className='icon close_icon text-[#fff] text-2xl' onClick={toggleSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="/dashboard">
                        <IoHome className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/switch-organization">
                        <BiSolidBriefcase className='icon' /> Switch Organization
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/users">
                        <HiUsers className='icon' /> Users
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/guarantors">
                        <FaUsers className='icon' /> Guarantors
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/loans">
                        <MdLocationPin className='icon' /> Loans
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/decision-models">
                        <FaRegHandshake className='icon' /> Decision Models
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/savings">
                        <MdSavings className='icon' /> Savings
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/loan-request">
                        <BsFillGearFill className='icon' /> Loan Request
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/whitelisted">
                        <BiLogOut className='icon' /> Whitelisted
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/karma">
                        <BiLogOut className='icon' /> Karma
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/organization">
                        <BiLogOut className='icon' /> Organization
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/loan-products">
                        <BiLogOut className='icon' /> Loan Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/savings-products">
                        <BiLogOut className='icon' /> Savings Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/fees-and-charges">
                        <BiLogOut className='icon' /> Fees and Charges
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/transactions">
                        <BiLogOut className='icon' /> Transactions
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/services">
                        <BiLogOut className='icon' /> Services
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/service-account">
                        <BiLogOut className='icon' /> Service Account
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/settlement">
                        <BiLogOut className='icon' /> Settlement
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/reports">
                        <BiLogOut className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/preferences">
                        <BiLogOut className='icon' /> Preferences
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/fees-and-pricing">
                        <BiLogOut className='icon' /> Fees and Pricing
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/audit-logs">
                        <BiLogOut className='icon' /> Audit Logs
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
