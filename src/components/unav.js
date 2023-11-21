import head from "../assets/head.png"
import Marquee from "react-fast-marquee";
import logo1 from "../assets/logo01.svg"
import logo2 from "../assets/logo02.svg"
import logo3 from "../assets/logo03.svg"
import logo4 from "../assets/logo04.svg"
import logo5 from "../assets/logo05.svg"
import logo6 from "../assets/logo06.svg"

function Unav () {
    return (
        <div >
            <div class= " lg:flex md:mx-12">
            <div class= "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 lg:order-2 lg:w-1/2">
            <img alt="" src={head} class=" col-span-4 w-[260px] justify-self-center rounded-[10px] my-4 mx-2 md:w-[426px] md:h-[600px] md:col-span-8 lg:w-[426px] lg:col-start-3 "></img>
            <div class=" col-span-4 bg-[#0B093B] mt-[-110px] rounded-[25px] mx-5 md:col-span-4 md:h-[150px]  lg:col-span-8 lg:col-start-1 lg:mt-[-220px] ">
            <p class=" font-sans text-[13px] font-bold text-white py-[20px] text-center col-span-4 md:text-[15px] md:p-6 lg:text-[15px] lg:text-left">Friends, such as we desired, are dreams of fables. Friendship demands the ability to do without it. </p>
            <p class=" font-serif text-[11px] font-bold text-[#FFC107] pb-[20px] md:text-[13px] text-center pl-32 lg:text-[13px]	">Ralph Waldo Emerson</p>
            <p class=" font-mono text-[#FFC107] text-[100px] rotate-[-20deg] mt-[-210px] ml-[-20px] md:mt-[-210px] md:text-[120px] md:rotate-[-5deg] lg:mt-[-230px]">"</p>
            </div>
            </div>
            <div class="grid grid-cols-4 md:grid-cols-8 lg:order-1 lg:w-1/2 lg:my-52 lg:mx-16">
                <p class=" font-serif font-khula font-semibold text-center col-span-4 text-[#0B093B] text-[44px] md:text-[60px] md:col-span-8 lg:text-left lg:text-[60px]">We Are Digital Agency.</p>
                <p class=" col-span-4 font-serif font-khula text-center text-[#0B093B] text-[12px] m-4 md:text-[13px] md:px-10 md:col-span-8 lg:text-left lg:mx-[-40px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque enim nihil adipisci ut totam id consectetur eveniet, provident modi vero ab voluptas accusantium placeat quae. Fugit nam excepturi maxime.</p>
                <button class="w-[190px] h-[48px] text-white bg-[#7620FF] rounded-[10px] my-8 justify-self-center col-span-4 hover:bg-violet-600 md:col-span-8 lg:justify-self-start ">Get started</button>
            </div>
            </div>
            <div class=" w-full h-[250px] bg-[#F5F5F5]">
            <Marquee>
                <img src={logo1} class="py-16 px-6 w-[150px] lg:w-[190px] lg:mx-10" alt=""></img>
                <img src={logo2} class="py-16 px-6 w-[150px] lg:w-[190px] lg:mx-10" alt=""></img>
                <img src={logo3} class="py-16 px-6 w-[150px] lg:w-[190px] lg:mx-10" alt=""></img>
                <img src={logo4} class="py-16 px-6 w-[150px] lg:w-[190px] lg:mx-10" alt=""></img>
                <img src={logo5} class="py-16 px-6 w-[150px] lg:w-[190px] lg:mx-10" alt=""></img>
                <img src={logo6} class="py-16 px-6 w-[150px] lg:w-[190px] lg:mx-10" alt=""></img>
            </Marquee>
            </div>
        </div>
    );
}
export default Unav