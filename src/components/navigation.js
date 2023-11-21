import LOGO from "../assets/logo.svg"
import Ham from "../assets/download.png"
import X from "../assets/close.png"
import { useState } from "react";
import { Link } from "react-router-dom";


function Nav() {
    const [sidebar,setSidebar] = useState(false)
    const handelClick = (e) => {
        (sidebar===false) ? setSidebar(true) : setSidebar(false)
    }
    return (
        <>
        <header class= "lg:h-24 grid lg:grid-cols-12 gap-x-5 px-10 content-center md:mx-[-12px] md:grid-cols-8 grid-cols-4 mx-[-0px] ">
            <img src={LOGO} alt="Logo" className="lg:justify-self-start lg:col-start-1 lg:my-10 lg:col-span-2 object-fill mt-3 md:col-start-1 md:col-span-1 justify-self-start col-span-2 col-start-1 "></img>
            <nav className="lg:col-start-3 lg:col-end-10  lg:order-2 md:col-start-2 md:order-1 md:block hidden lg:block">
            <ul className=" lg:flex md:flex md:p-4 hidden lg:items-center  ">
                    <li class=" font-Khula text-xl text-[#0B093B] hover:text-[#7620FF] md:hover:border-b-[2px] md:border-[#7620FF] md:h-[45px] md:px-3 lg:font-serif lg:mx-4 lg:mt-5 lg:text-[15px] lg:capitalize"><Link to={"./"}>home</Link></li>
                    <li class=" font-Khula text-xl text-[#0B093B] hover:text-[#7620FF] md:hover:border-b-[2px] md:border-[#7620FF] md:h-[45px] md:px-3 lg:font-serif lg:mx-4 lg:mt-5 lg:text-[15px] lg:capitalize"><Link to={'./service'}  >Services</Link></li>
                    <li class=" font-Khula text-xl text-[#0B093B] hover:text-[#7620FF] md:hover:border-b-[2px] md:border-[#7620FF] md:h-[45px] md:px-3 lg:font-serif lg:mx-4 lg:mt-5 lg:text-[15px] lg:capitalize"><Link to={'./portfolio'}  >Project</Link></li>
                    <li class=" font-Khula text-xl text-[#0B093B] hover:text-[#7620FF] md:hover:border-b-[2px] md:border-[#7620FF] md:h-[45px] md:px-3 lg:font-serif lg:mx-4 lg:mt-5 lg:text-[15px] lg:capitalize"><Link to={"./blog"}>Blog</Link></li>
                    <li class=" font-Khula text-xl text-[#0B093B] hover:text-[#7620FF] md:hover:border-b-[2px] md:border-[#7620FF] md:h-[45px] md:px-3 lg:font-serif lg:mx-4 lg:mt-5 lg:text-[15px] lg:capitalize"><Link to={"./pricing"}>Pricing</Link></li>
                    <li class=" font-Khula text-xl text-[#0B093B] hover:text-[#7620FF] md:hover:border-b-[2px] md:border-[#7620FF] md:h-[45px] md:px-3 lg:font-serif lg:mx-4 lg:mt-5 lg:text-[15px] lg:capitalize"><Link to={"./contact"}>Contact</Link></li>
                    <li class=" font-Khula hidden text-xl text-[#0B093B] hover:text-[#7620FF] md:block md:h-[45px] md:w-[70px] md:ml-12 lg:ml-36 lg:mt-5 lg:text-[20px] lg:capitalize"><Link to={"./login"}>Login</Link></li>
                    <li class=" font-Khula hidden text-xl text-[#0B093B] hover:text-[#7620FF] md:block md:h-[60px] md:w-[150px] md:ml-10 bg-slate-100 rounded-[10px] lg:mr-16 lg:mt-5 lg:text-[20px] lg:capitalize"><Link to={"./getstarted"}>Get Started</Link></li>
                </ul>
            </nav>
            {
                (!sidebar)&&<button onClick={handelClick} className="col-span-1 col-start-4 mt-1 w-[50px] md:hidden lg:hidden md:order-1 md:col-start-7 md:col-span-1 justify-self-center"><img alt="burger" src={Ham}/></button>
            }
        </header>
        {
            (sidebar) && <aside className="w-[100%] h-[100%] bg-[#0B093B] z-50 absolute top-0 md:bg-opacity-80"> 
                <button onClick={handelClick} className="lg:hidden md:hidden w-[30px] h-[30px] relative mx-10 mt-[40px] md:pl-[100px] md:pt-[50px]"><img alt="burger" src={X}/></button>
            <ul className=" md:hidden lg:hidden  flex flex-col items-center h-[100%] w-[100%] mt-[-50px]">
                    <li class=" font-sans text-xl font-bold mt-8 text-white hover:text-[#7620FF] hover:pl-6 md:hover:pl-[20px] lg:capitalize"><Link to='./home'>Home</Link></li>
                    <li class=" font-sans text-xl font-bold mt-8 text-white hover:text-[#7620FF] hover:pl-6 md:hover:pl-[20px] lg:capitalize "><Link to='./services' >Services</Link></li>
                    <li class=" font-sans text-xl font-bold mt-8 text-white hover:text-[#7620FF] hover:pl-6 md:hover:pl-[20px] lg:capitalize"><Link to='./portfolio'  >Project</Link></li>
                    <li class=" font-sans text-xl font-bold mt-8 text-white hover:text-[#7620FF] hover:pl-6 md:hover:pl-[20px] lg:capitalize"><Link to='./contact'>Blog</Link></li>
                    <li class=" font-sans text-xl font-bold mt-8 text-white hover:text-[#7620FF] hover:pl-6 md:hover:pl-[20px] lg:capitalize"><Link to='./contact'>Pricing</Link></li>
                    <li class=" font-sans text-xl font-bold mt-8 text-white hover:text-[#7620FF] hover:pl-6 md:hover:pl-[20px] lg:capitalize"><Link to='./contact'>Contact</Link></li>
                </ul>
            </aside>
        }
        </>
    );

}
export default Nav