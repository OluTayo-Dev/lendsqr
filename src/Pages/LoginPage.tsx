import React from 'react';
import Group from "../assets/Group.svg";
import Pablo from "../assets/Pablo.svg";
import '../LoginPage.scss';
const LoginPage: React.FC = () => {
  return (
    <div>
       <section>
         <header>
            <img src={Group} alt="" className='' />
         </header>
         <div className="first">
             <div className='Image'>
                 <img src={Pablo} alt="" className='' />
             </div>
             <div className='Text'>
                <h1>Welcome!</h1>
                <p>Enter details to begin</p>
                 <form>
                    <input type="text"
                     placeholder='Email' 
                     className='' /> <br/>
                    <input type='password'
                     placeholder='Password' 
                     className='' />
                     <h4>FORGOT PASSWORD?</h4>
                    <button type='submit'>LOG IN</button>
                  </form>
             </div>
         </div>
       </section>
    </div>
  );
}

export default LoginPage;
