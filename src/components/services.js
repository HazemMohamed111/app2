import graph from "../assets/web-design.png";
import web from "../assets/browser.png";
import ui from "../assets/printing.png";
import webdesign from "../assets/graphic-design.png";
function Serving() {
    return (
        <>
        <div class= "">
        <div class=" grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 lg:mx-16 ">
        <p class=" text-[30px] font-serif font-black col-span-4 my-4 text-center text-[#0B093B] font-Khula md:col-span-8 md:text-[40px] lg:text-[40px] lg:col-span-12 lg:text-left ">Our Services</p>
        <p class=" col-span-4 text-center text-[12px] font-serif text-[#0B093B] mx-6 my-4 md:col-span-8 md:text-[13px] md:my-[5px] lg:text-[13px] lg:mx-[-22px] lg:col-span-12 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit similique sint saepe reiciendis dolore, neque unde necessitatibus. Porro consequatur fugiat sequi culpa doloremque,</p>
        </div>
        <div class=" grid grid-cols-4 md:flex lg:grid-cols-12 mx-16">
        <div class=" col-span-4 mx-3 md:mx-0 md:w-1/4 "><Card img={graph} head="Graphic Design" description="Graphic design is the process of visual,communication and problem-solving using one or more of typography, photography and illustration."/></div>
        <div class=" col-span-4 mx-3 md:mx-0 md:w-1/4 "><Card img={webdesign} head="Web Design" description="Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design."/></div>
        <div class=" col-span-4 mx-3 md:mx-0 md:w-1/4 "><Card img={ui} head="Print" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit similique sint saepe reiciendis dolore, neque unde necessitatibus. Porro consequatur fugiat sequi culpa doloremque,"/></div>
        <div class=" col-span-4 mx-3 md:mx-0 md:w-1/4 "><Card img={web} head="Development" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit similique sint saepe reiciendis dolore, neque unde necessitatibus. Porro consequatur fugiat sequi culpa doloremque,"/></div>
        </div>
        </div>
        </>
    );
}
    function Card (props) {
        return (
            <div class=" grid grid-cols-4 my-6 md:grid-cols-3 ">
                <img src={props.img} alt="01" class=" col-span-4 justify-self-center w-[50px] md:col-span-3 md:justify-self-start md:mx-10 "/>
                <p class="col-span-4 text-center text-[#0B093B] text-[18px] my-4 font-bold md:text-[20px] md:mx-8 md:pt-[10px] md:order-2 md:col-span-3 md:justify-self-start lg:text-[24px] lg:my-[40px]">{props.head}</p>
                <p class=" col-span-4 text-center mx-4 text-[12px] text-[#0B093B] md:text-[13px] md:mx-10 md:text-start md:col-span-3 md:order-3 lg:text-[13px]">{props.description}</p>
            </div>
        );
    }

export default Serving