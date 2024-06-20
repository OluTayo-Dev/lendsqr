import React, { useState } from 'react';
import Header from "../Components/Header";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import { MdOutlineFilterList } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from '../Components/Sidebar';
import "../Css/Dashboard.scss";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='grid-container'>
       <Header OpenSidebar={toggleSidebar} />
       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
       <div>
          <h1 className='users'>Users</h1>

          <section className='user-listing'>
            <img src={user1} alt="" className='' />
            <img src={user2} alt="" className='' />
            <img src={user3} alt="" className='' />
            <img src={user4} alt="" className='' />
          </section>

          <section>
            <div className='user-data'>
              <span>
                <ul>ORGANIZATION<MdOutlineFilterList /></ul>
                <li>Lendsqr</li>
                <li>Irorun</li>
                <li>Lendstar</li>
                <li>Lendsqr</li>
                <li>Lendstar</li>
                <li>Lendsqr</li>
                <li>Lendstar</li>
                <li>Lendsqr</li>
                <li>Lendstar</li>
              </span>
             
              <span>
                <ul>USERNAME<MdOutlineFilterList /></ul>
                <li>Adedeji</li>
                <li>Debby Oganna</li>
                <li>Grace Effiom</li>
                <li>Tosin Dokunmi</li>
                <li>Grace Effiom</li>
                <li>Tosin Dokunmu</li>
                <li>Grace Dffiom</li>
                <li>Tosin Dokunmu</li>
                <li>Grace Effiom</li>
              </span>
             
               <span>
                <ul>EMAIL<MdOutlineFilterList /></ul>
                <li>adedeji@Lendsqr</li>
                <li>debby2@irorun.com</li>
                <li>grace@Lendstar.com</li>
                <li>tosin@lendsqr.com</li>
                <li>grace@Lendstar.com</li>
                <li>tosin@lendsqr.com</li>
                <li>grace@Lendstar.com</li>
                <li>tosin@lendsqr.com</li>
                <li>grace@Lendstar.com</li>
              </span>
             
               <span>
                <ul>PHONE NUMBER<MdOutlineFilterList /></ul>
                <li>08078903721</li>
                <li>08160780928</li>
                <li>08160780922</li>
                <li>08160780928</li>
                <li>07003309266</li>
                <li>07064219422</li>                     
                <li>08160780922</li>
                <li>08023107466</li>
                <li>07032419074</li>
              </span>
            
               <span>
                <ul>DATE JOINED<MdOutlineFilterList /></ul>
                <li>May 15, 2020 10:00 AM</li>
                <li>April 30, 2020 10:00 AM</li>
                <li>April 30, 2020 10:00 AM</li>
                <li>April 30, 2020 10:00 AM</li>
                <li>April 30, 2020 10:00 AM</li>
                <li>April 30, 2020 10:00 AM</li>
                <li>April 30, 2020 10:00 AM</li>
                <li>April 30, 2020 10:00 AM</li>
                <li>April 30, 2020 10:00 AM</li>
              </span>
             
              <span>
                <ul>STATUS<MdOutlineFilterList /></ul>
                <li className="inactive">Inactive</li>
                <li className="pending">Pending</li>
                <li className="blacklisted">Blacklisted</li>
                <li className="pending">Pending</li>
                <li className="active">Active</li>
                <li className="active">Active</li>
                <li className="blacklisted">Blacklisted</li>
                <li className="inactive">Inactive</li>
                <li >Inactive</li>
              </span>
             
              <span>
                <ul>L</ul>
                <li><BsThreeDotsVertical /></li>
                <li><BsThreeDotsVertical /></li>
                <li><BsThreeDotsVertical /></li>
                <li><BsThreeDotsVertical /></li>
                <li><BsThreeDotsVertical /></li>
                <li><BsThreeDotsVertical /></li>
                <li><BsThreeDotsVertical /></li>
                <li><BsThreeDotsVertical /></li>
                <li><BsThreeDotsVertical /></li>    
              </span> 
            </div>
          </section>
       </div>
    </div>
  )
}

export default Dashboard;
