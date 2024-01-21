import React, { useState } from 'react'
import { MdOutlineMenu, MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../assets/HMO-removebg-preview (1).png';

const LandingHeader = () => {
  const [scroll, setScroll] = useState(false);
  const [state, setState] = useState(false);
  const [drop, setDrop] = useState(false);

  const toggle =()=>{
    setState(!state)
    setDrop(!drop)
  };

  const headerChange =  () => {
    if (window.pageYOffset >= 70) {
        setScroll(false);
    } else{
        setScroll(true);
    }
}
window.addEventListener("scroll", headerChange);

  return (
    <div>
      {scroll? (
        <div className=' w-full h-[70px] flex justify-center items-center fixed bg-[#f3f5fc]'>
        <div className=' w-[95%] h-[90%] flex justify-between items-center relative'>
            <div className=' w-[150px] lg:w-[200px] '>
              <Link to='/'>
              <img src={logo} alt="" className=''/>
              </Link>
            </div>
            <div className=' w-[380px] hidden lg:flex justify-between items-center text-[18px] font-[400] cursor-pointer'>
              <nav>Features</nav>
              <nav>Pricing</nav>
              <nav>Blog</nav>
              <nav>Contact Us</nav>
            </div>
            <div className=' w-[220px] hidden lg:block text-[18px] font-[400]'>
            <Link to='/login'>
              <button className=' w-[80px] h-[40px]'>Login</button>
              </Link>
              <Link to='/register'>
              <button className=' w-[130px] h-[40px] bg-[#3b82f6] rounded-lg text-white'>Register</button>
              </Link>
            </div>
            <div className=' w-[50px] lg:hidden cursor-pointer'
            onClick={()=>{toggle()}}
            >
              {state?<MdOutlineCancel size={30}/> : <MdOutlineMenu size={30}/>}
            </div>
        </div>
        {drop? <div className=' w-full h-[89vh] bg-red-500 absolute top-[70px] bottom-0 z-10'>
          <div></div>
        </div>: null}
    </div>
      ):(
        <div className=' w-full h-[70px] flex justify-center items-center fixed bg-white shadow-md z-20'>
        <div className=' w-[95%] h-[90%] flex justify-between items-center relative'>
            <div className=' w-[150px] lg:w-[200px]'>
              <Link to='/'>
              <img src={logo} alt="" className=''/>
              </Link>
            </div>
            <div className=' w-[380px] hidden lg:flex justify-between items-center text-[18px] font-[400] cursor-pointer'>
              <nav>Features</nav>
              <nav>Pricing</nav>
              <nav>Blog</nav>
              <nav>Contact Us</nav>
            </div>
            <div className=' w-[220px] hidden lg:block text-[18px] font-[400]'>
              <Link to='/login'>
              <button className=' w-[80px] h-[40px]'>Login</button>
              </Link>
              <Link to='/register'>
              <button className=' w-[130px] h-[40px] bg-[#3b82f6] rounded-lg text-white'>Register</button>
              </Link>
            </div>
            <div className=' w-[50px] lg:hidden cursor-pointer'
            onClick={()=>{toggle()}}
            >
            {state?<MdOutlineCancel size={30}/> : <MdOutlineMenu size={30}/>}
            </div>
        </div>
        {drop? <div className=' w-full h-[92vh] bg-red-500 absolute top-[70px] bottom-0 z-10'>
          <div></div>
        </div>: null}
    </div>
      )}
    </div>
  )
};

export default LandingHeader;