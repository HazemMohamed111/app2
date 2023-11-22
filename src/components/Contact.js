import con1 from "../assets/contact-1.png";
import con2 from "../assets/contact-2.png";
import con3 from "../assets/contact-3.png";
import logo from "../assets/logo00.svg";

function Contact () {
    return(
        <>
        <div class="bg-[#F5F5F5] lg:px-16 lg:py-20">
        <div class="">
            <p class="font-serif font-extrabold text-center text-[30px] p-6 md:text-left md:pt-4 md:pb-0 lg:text-[40p]" >Let's get in Touch</p>
            <p class="font-serif font-normal px-6 text-center md:text-left md:text-[13px] md:py-[12px] lg:text-[13px]">Lorom ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit similique sint saepe reiciendis dolore, neque unde necessitatibus.</p>
        </div>
        <div class=" lg:flex">
        <form class="p-4 px-6 lg:order-1 lg:w-1/2">
        <div>
        <label class=" font-sans text-left text-[13px]">First Name:</label>
        <input type="text" id="Fna" name="Fna" class=" text-[20px] font-extrabold bg-[#F5F5F5] border-b-[1px] border-gray-400 stroke-1 w-full my-2"></input>
        </div>
        <div>
        <label class=" font-sans  text-left text-[13px] ">Email:</label>
        <input type="text" id="email1" name="email" class=" text-[20px] font-extrabold stroke-black stroke-1 bg-[#F5F5F5] border-b-[1px] border-gray-400 w-full my-2"></input>
        </div>
        <div>
        <label class=" font-sans text-left text-[13px]">Subject:</label>
        <input type="text" id="Sub" name="Sub" class=" text-[20px] font-extrabold stroke-black bg-[#F5F5F5] border-b-[1px] border-gray-400 stroke-1 w-full my-2"></input>
        </div>
        <textarea rows="4" cols="40" class="my-5 bg-[#F5F5F5] border-b-[1px] border-gray-400 stroke-1 w-full "></textarea>
        <div class="grid grid-cols-4">
                <button class="w-[200px] h-[48px] text-white bg-[#7620FF] hover:bg-violet-600 rounded-[10px] my-5 col-span-4 justify-self-center ">Send message</button>
        </div> 
        </form>
        <div class="flex md:mx-10 lg:order-2 lg:w-1/2">
        <div class="flex-col w-1/2 md:pl-52 lg:pl-10">
            <img alt="" src={con1} class=" w-[180px] h-[200] my-4 rounded-[10px] md:mx-2 md:my-5 md:justify-self-end lg:w-[180px] lg:my-6 lg:h-[205px] lg:p-0 "></img>
            <img alt="" src={con2} class=" w-[180px] h-[290] my-4 rounded-[10px] md:mx-2 md:my-5 md:justify-self-end lg:w-[180px] lg:my-6 lg:h-[295px] lg:p-0 "></img>
        </div>
        <div class="w-1/2">
            <img alt="" src={con3} class=" my-24 w-[280px] h-[330px] rounded-[20px] md:px-2 md:my-24 lg:mt-32 "></img>
        </div>
        </div>
        </div>
        </div>
        <div class="grid grid-cols-4 bg-[#0B093B] py-2">
            <img alt="" src={logo} class=" col-span-4 justify-self-center"></img>
        </div>
        </>
    );
}
export default Contact
