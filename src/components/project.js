import pro1 from "../assets/p1.png";
import pro2 from "../assets/p2.png";
import pro3 from "../assets/p3.png";
import pro4 from "../assets/p4.png";
import pro5 from "../assets/p5.png";
import pro6 from "../assets/p6.png";

function Project (){
    return(
        <div class=" md:mt-10 md:mx-12 lg:px-20 lg:my-20">
            <div class=" grid grid-cols-4 md:grid-cols-8 md:px-4 lg:grid-cols-12 text-center my-2 ">
                <p class=" col-span-4 text-[30px] font-extrabold text-[#0B093B] md:text-[40px] md:text-left md:col-span-8 lg:col-span-12 lg:text-[40px]">Our Projects</p>
                <p class=" text-center text-[12px] mx-4 text-[#0B093B] col-span-4 md:text-[13px] md:text-left md:col-span-8 lg:col-span-12 lg:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit similique sint saepe reiciendis dolore, neque unde necessitatibus. Porro consequatur fugiat sequi culpa doloremque,</p>
            </div>
            <div class="grid grid-cols-4 md:flex lg:grid-cols-12">
                <div className=" col-span-4 md:w-1/3"><Card img={pro1} head="project1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/></div>
                <div className=" col-span-4 md:w-1/3"><Card img={pro2} head="project2" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/></div>
                <div className=" col-span-4 md:w-1/3"><Card img={pro3} head="project3" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/></div>
            </div>
            <div class="grid grid-cols-4 md:flex lg:grid-cols-12">
                <div className=" col-span-4 md:w-1/3"><Card img={pro4} head="project4" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/></div>
                <div className=" col-span-4 md:w-1/3"><Card img={pro5} head="project5" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/></div>
                <div className=" col-span-4 md:w-1/3"><Card img={pro6} head="project6" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab"/></div>
                </div>
            <div class="grid grid-cols-4 md:my-10">
                <button class="w-[200px] h-[48px] text-white bg-[#7620FF] hover:bg-violet-600 rounded-[10px] my-5 col-span-4 justify-self-center ">Load More</button>
            </div>
        </div>
    );
}
    function Card (props) {
        return(
        <div class="grid grid-cols-4 m-6 shadow-lg bg-white hover:scale-[105%] duration-300">
            <img src={props.img} alt="projects" class="col-span-4 rounded-[20px]  "></img>
            <p class="col-span-4 text-center my-3 text-[20px] font-bold md:text-[20px] md:mt-3 ">{props.head}</p>
            <p class="col-span-4 text-center mx-3 my-3 text-[14px] md:text-[13px] md:py-[-5px]">{props.description}</p>
        </div>
        );
    }
export default Project