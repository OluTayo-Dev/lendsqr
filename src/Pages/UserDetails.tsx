import React from 'react'
import Header from "../Components/Header";
import Sidebar from '../Components/Sidebar';
import { FaArrowLeftLong } from "react-icons/fa6";
import "../Css/Dashboard.scss";
import "../Css/UserDetails.scss";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import line from "../assets/line.png";


const UserDetails: React.FC = () => {
  return (
    <div className='grid-container'>
       <Header OpenSidebar={function (): void {
              throw new Error('Function not implemented.');
          } } />
        <Sidebar openSidebarToggle={false} OpenSidebar={function (): void {
              throw new Error('Function not implemented.');
          } } />

            <div>
                  <div className='arrow'>
                     <h4><FaArrowLeftLong />Back to Users</h4>
                  </div>
              
                 <div className='Details'>
                     <h1>User Details</h1>

                     <div className='details-btn'>
                       <button id="btn-one">BLACKLIST USER</button>
                       <button id="btn-two">ACTIVATE USER</button>
                     </div>
                 </div>


                 <section className="box-1">
                    <div className='user'>
                        <div className='circle'>
                            <AiOutlineUser className='icon'/>
                        </div>

                        <div id="user">
                          <h1>Grace Effiom</h1> 
                          <p>LSQFf587g90</p>
                        </div>

                        <img src={line} alt="" />

                         <div className="user-tier">
                           <p className="u-tier">User's Tier</p> 
                             <MdOutlineStar id="icon-one"/>
                             <MdOutlineStarBorder id="icon"/>
                             <MdOutlineStarBorder id="icon"/>
                         </div>
                         <img src={line} alt="" />

                        <div id='amount'>
                          <h1>#200,000.0</h1>
                          <h5>9912345678/Providus Bank</h5>
                        </div>
                    </div> 

                    <div className='menu-list'>
                       <a id="init" href="">General Details</a>
                       <a href="">Documents</a>
                       <a href="">Bank Details</a>
                       <a href="">Loans</a>
                       <a href="">Savings</a>
                       <a href="">App and System</a>
                    </div>
                 </section>

                 <section className='box-2'>
                   <h4>Personal Information</h4>

                    <div className='first-flex'>
                      <span>
                        <h5>FULL NAME</h5>
                        <p>Grace Effiom</p>
                      </span>

                      <span>
                        <h5>PHONE NUMBER</h5>
                        <p>07060780922</p>
                      </span>

                      <span>
                        <h5>EMAIL ADDRESS</h5>
                        <p>grace@gmail.com</p>
                      </span>

                      <span>
                        <h5>BVN</h5>
                        <p>07060780922</p>
                      </span>

                      <span>
                        <h5>GENDER</h5>
                        <p>Female</p>
                      </span>
                    </div>

                    <div className='second-flex'>
                      <span>
                        <h5>MARITAL STATUS</h5>
                        <p>Single</p>
                      </span>

                      <span>
                        <h5>CHILDREN</h5>
                        <p>None</p>
                      </span>

                      <span>
                        <h5>TYPE OF RESIDENCE</h5>
                        <p>Parent's Apartment</p>
                      </span>
                    </div>
                 <hr />

                 <h4>Education and Employment</h4>
                 <div className='third-flex'>
                      <span>
                        <h5>LEVEL OF EDUCATION</h5>
                        <p>B.Sc</p>
                      </span>

                      <span>
                        <h5>EMPLOYMENT STATUS</h5>
                        <p>Employed</p>
                      </span>

                      <span>
                        <h5>SECTOR OF EMPLOYMENT</h5>
                        <p>FinTech</p>
                      </span>

                      <span>
                        <h5>DURATION OF EMPLOYMENT</h5>
                        <p>2 years</p>
                      </span>
                    </div>

                    <div className='fourth-flex'>
                      <span>
                        <h5>OFFICE EMAIL</h5>
                        <p>grace@lendsqr.com</p>
                      </span>

                      <span>
                        <h5>MONTHLY INCOME</h5>
                        <p>#200,000.00-#400,000.00</p>
                      </span>

                      <span>
                        <h5>LOAN REPAYMENT</h5>
                        <p>#40,000</p>
                      </span>
                    </div>
                    <hr />

                     <h4>Socials</h4>
                    
                     <div className='fifth-flex'>
                      <span>
                        <h5>TWITTER</h5>
                        <p>@grace_effiom</p>
                      </span>

                      <span>
                        <h5>FACEBOOK</h5>
                        <p>Grace Effiom</p>
                      </span>

                      <span>
                        <h5>Instagram</h5>
                        <p>@grace_effiom</p>
                      </span>
                    </div>
                    <hr />
                    
                    <h4>Guarantor</h4>
                    <div className='sixth-flex'>
                      <span>
                        <h5>FULL NAME</h5>
                        <p>Debby Ogana</p>
                      </span>

                      <span>
                        <h5>PHONE NUMBER</h5>
                        <p>07060780922</p>
                      </span>

                      <span>
                        <h5>EMAIL ADDRESS</h5>
                        <p>debby@gmail.com</p>
                      </span>

                      <span>
                        <h5>RELATIONSHIP</h5>
                        <p>Sister</p>
                      </span>
                    </div>
                    <hr />

                    <div className='sixth-flex'>
                      <span>
                        <h5>FULL NAME</h5>
                        <p>Debby Ogana</p>
                      </span>

                      <span>
                        <h5>PHONE NUMBER</h5>
                        <p>07060780922</p>
                      </span>

                      <span>
                        <h5>EMAIL ADDRESS</h5>
                        <p>debby@gmail.com</p>
                      </span>

                      <span>
                        <h5>RELATIONSHIP</h5>
                        <p>Sister</p>
                      </span>
                    </div>
                 </section>

               
            </div>
       
    </div>
  )
}

export default UserDetails