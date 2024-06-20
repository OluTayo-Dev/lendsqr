import React from 'react'
import Header from "../Components/Header";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import Modal from 'react-modal';
import { useState } from 'react';
import { MdOutlineFilterList } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuUserX2 } from "react-icons/lu";
import { PiEye } from "react-icons/pi";
import { RiUserFollowLine } from "react-icons/ri";
import Sidebar from '../Components/Sidebar';
import "../Css/Dashboard.scss";
import "../Css/User.scss";

Modal.setAppElement('#root');

const Users: React.FC = () => {

   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);

   };

   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                         <ul id="username">ORGANIZATION<MdOutlineFilterList /><ul>USERNAME<MdOutlineFilterList /></ul></ul>
                          <div className='organization-list'>
                             <label>Organization</label> <br />
                             <select>
                                <option>Lendsqr</option>
                                <option>Lendstar</option>
                                <option>Irorun</option>
                             </select> <br />

                            
                             <label>Username</label> <br />
                             <input type="text" placeholder='User' /> <br />
                             
                             
                             <label>Email</label> <br />
                             <input type="text" placeholder='User' /> <br />
                             
                             
                             <label>Date</label> <br />
                             <input type="date" placeholder='User' /> <br />
                             
                             
                             <label>Phone Number</label> < br />
                             <input type="text" placeholder='User' /> < br />
                              
                              
                             <label>Status</label> <br />
                             <select>
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Pending</option>
                                <option>Blacklisted</option>
                             </select>

                             <div className='btn'>
                                <button type='reset' id="first-btn">Reset</button>
                                <button type='reset' id="second-btn">Filter</button>
                             </div>
                          </div>
                      </span>
                     
                      {/* <span>
                         <ul id='username'>USERNAME<MdOutlineFilterList /></ul>
                       
                      </span> */}
                     
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
                         <li className="inactive">Inactive</li>
                      </span>
                       
                      <span>
                         <ul id='letter'>L</ul>
                         <li><BsThreeDotsVertical /></li>
                         <li><BsThreeDotsVertical /></li>
                         <li><BsThreeDotsVertical /></li>
                         <li><BsThreeDotsVertical /></li>
                         <li onClick={openModal}><BsThreeDotsVertical /></li>
                         <li><BsThreeDotsVertical /></li>
                         <li><BsThreeDotsVertical /></li>
                         <li><BsThreeDotsVertical /></li>
                         <li><BsThreeDotsVertical /></li>    
                     </span> 
                   </div>
                </section>

                <div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
        contentLabel="Example Modal"
      >
        <div className='modal'>
           <span>
              <PiEye />
               <a href="/user-details">View user Details</a>
           </span>

           <span>
               <LuUserX2 />
               <p>BlackList User</p>
           </span>

           <span>
               <RiUserFollowLine />
               <p>Activate User</p>
           </span>
        </div>
        {/* <button onClick={closeModal}>Close Modal</button> */}
      </Modal>
    </div>
            </div>
       
    </div>
  )
}

export default Users