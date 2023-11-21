
import f1 from "../assets/1.png"
import f2 from "../assets/2.png"
import f3 from "../assets/3.png"
import f4 from "../assets/4.png"

function G1 () {
    return(
        <>
        <div class="bg-[#F5F5F5] md:mt-28 md:flex md:flex-row-reverse md:px-12 md:justify-evenly lg:px-16">
        <div class=" grid grid-cols-4 w-[382px] h-[250px] my-6 md:w-1/2 md:my-[-20px] ">
            <img alt="" src={f1} class=" rounded-[10px] w-[128px] col-span-2 ml-4 mt-[-30px] justify-self-center md:w-[210px] "></img>
            <img alt="" src={f2} class=" rounded-[10px] w-[80px] col-span-2 ml-[-20px] mt-[-20px] justify-self-center md:w-[130px] "></img>
            <img alt="" src={f4} class=" rounded-[10px] w-[54px] col-span-2 ml-[60px] justify-self-center md:w-[88px] "></img>
            <img alt="" src={f3} class=" rounded-[10px] w-[80px] col-span-2 ml-[-10px] mt-[-10px] justify-self-center md:w-[130px] "></img>
        </div>
        <div class="grid grid-cols-4 px-5 mt-[-25px] md:mt-5 md:py-16 md:w-1/2">
            <p class=" col-span-4 text-center text-[13px] font-serif text-[#0B093B] md:text-[15px] md:text-left">A few words about company</p>
            <p class=" col-span-4 text-center text-[30px] font-serif py-4 font-extrabold text-[#0B093B] md:text-left md:text-[40px]">A Study Of Creativity</p>
            <p class=" col-span-4 text-center text-[11px] font-serif text-[#0B093B] md:text-left md:text-[12px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sed repellat eum dignissimos itaque possimus accusantium eius hic temporibus distinctio, excepturi, nesciunt, quam magni deserunt!</p>
            <button class="col-span-2 text-center h-[40px] m-[20px] text-white bg-[#7620FF] rounded-[10px] hover:bg-violet-600 md:w-[140px] md:h-[50px] md:col-span-1 md:justify-self-start">Get Started</button>
            <button class="col-span-2 text-center m-[20px] bg-gray-300 rounded-[10px] stroke-2 hover:bg-gray-600 md:w-[140px] md:h-[50px] md:col-start-2 md:col-span-3 md:justify-self-center">Contact Us</button>
        </div>
        </div>
        </>
    );
}
export default G1