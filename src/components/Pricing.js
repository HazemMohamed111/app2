import img1 from "../assets/graphic-design.png"
import img2 from "../assets/web-design.png"
import img3 from "../assets/browser.png"
import img41 from "../assets/check-mark.png"

function Price () {
    return (
        <>
        <div class="bg-[#F5F5F5] h-[450px] md:px-12 lg:px-16 lg:my-20">
        <div class="grid grid-cols-4">
        <p class="font-serif text-[30px] col-span-4 text-center py-6 font-extrabold md:text-[40px] md:text-left lg:text-[40px] " >What They Say?</p>
        <p class="font-serif text-[13px] col-span-4 mx-3 pb-6 px-4 text-center md:text-left md:my-[-10px] lg:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit similique sint saepe reiciendis dolore, neque unde necessitatibus. Porro consequatur fugiat sequi culpa doloremque,</p>
        </div>
        <div class="md:flex">
        <div class=" grid grid-cols-4 bg-[#0B093B] mt-[10px] rounded-[25px] my-5 mx-5 md:col-span-8 lg:col-span-12 lg:w-1/3 ">
            <p class=" font-sans text-[13px] font-bold col-span-4 text-white py-[40px] text-center md:text-[13px] md:px-3 md: md:text-left lg:text-[13px]	">Friends, such as we desired, are dreams of fables. Friendship demands the ability to do without it. </p>
            <p class=" font-serif text-[11px] col-span-2 col-start-3 py-6 font-bold text-[#FFC107] md:col-span-4 md:px-4 md:text-[13px] md:text-right text-center lg:text-[13px] ">Ralph Waldo Emerson</p>
            <p class=" col-span-4 font-mono text-[#FFC107] rotate-[10deg] text-[150px] text-center mt-[-260px] md:rotate-0 md:mt-[-300px] lg:mt-[-260px]">"</p>
        </div>
        <div class=" hidden bg-[#0B093B] mt-[10px] rounded-[25px] my-5 mx-5 md:block md:col-span-8 lg:col-span-12 lg:w-1/3 ">
            <p class=" font-sans text-[13px] font-bold col-span-4 text-white py-[40px] text-center md:text-[13px] md:px-4 md:text-left lg:text-[13px]	">Friends, such as we desired, are dreams of fables. Friendship demands the ability to do without it. </p>
            <p class=" font-serif text-[11px] col-span-2 col-start-3 py-6 font-bold text-[#FFC107] md:col-span-4 md:px-4 md:text-[13px] md:text-right text-center lg:text-[13px] ">Ralph Waldo Emerson</p>
            <p class=" col-span-4 font-mono text-[#FFC107] rotate-[10deg] text-[150px] text-center mt-[-260px] md:rotate-0 md:mt-[-300px] lg:mt-[-260px]">"</p>
        </div>
        <div class=" hidden bg-[#0B093B] mt-[10px] rounded-[25px] my-5 mx-5 md:block md:col-span-8 lg:col-span-12 lg:w-1/3 ">
            <p class=" font-sans text-[13px] font-bold col-span-4 text-white py-[40px] text-center md:text-[13px] md:px-4 md:text-left lg:text-[13px]	">Friends, such as we desired, are dreams of fables. Friendship demands the ability to do without it. </p>
            <p class=" font-serif text-[11px] col-span-2 col-start-3 py-6 font-bold text-[#FFC107] md:col-span-4 md:px-4 md:text-[13px] md:text-right text-center lg:text-[13px] ">Ralph Waldo Emerson</p>
            <p class=" col-span-4 font-mono text-[#FFC107] rotate-[10deg] text-[150px] text-center mt-[-260px] md:rotate-0 md:mt-[-305px] lg:mt-[-260px]">"</p>
        </div>
        </div>
        </div>
        <div class=" grid grid-cols-4 py-8 px-4 md:mx-8 lg:mx-16 ">
            <p class="col-span-4 text-center text-[30px] font-serif text-[#0B093] font-extrabold md:text-left lg:text-[40px] ">Check Our Pricing</p>
            <p class="col-span-4 text-center text-[14px] mx-2 text-[#0B093] font-serif md:text-left lg:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit similique sint saepe reiciendis dolore, neque unde necessitatibus. Porro consequatur fugiat sequi culpa doloremque,</p>
        </div>
        <div class="my-10 md:flex md:mx-8 lg:mx-16 lg:my-20">
            <div><Card img={img1} img1={img41} img2={img41} Price="$29.99/mo" name="Starter" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis delectus hic labore laboriosam quis ipsa." /></div>
            <div><Card img={img2} img1={img41} img2={img41} img3={img41} img4={img41} Price="$49.99/mo" name="Basic" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis delectus hic labore laboriosam quis ipsa." /></div>
            <div><Card img={img3} img1={img41} img2={img41} img3={img41} img4={img41} img5={img41} Price="$59.99/mo" name="Golden" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis delectus hic labore laboriosam quis ipsa." /></div>
        </div>
        </>
    );
}
function Card (props) {
    return(
        <>
    <div class="shadow-lg bg-white m-6">
    <div class="grid grid-cols-4 m-6  duration-300">
        <img src={props.img} alt="projects" class="col-span-2 px-10 py-2 rounded-[20px] md:px-0 md:col-span-1 "></img>
        <p class="col-span-2 text-right my-3 p-2 text-[20px] font-bold md:text-[24px] md:text-right md:col-span-3 ">{props.Price}</p>
        <p class="col-span-3 text-center py-2 text-[20px] font-extrabold md:text-left md:text-[30px] ">{props.name}</p>
        <p class="col-span-4 text-left m-3 text-[14px] md:text-[13px]">{props.description}</p>
    </div>
    <div class="grid grid-cols-4">
    <div class="col-span-1">
        <img alt="" src={props.img1} class="w-[30px] m-[15px] p-1 "></img>
        <img alt="" src={props.img2} class="w-[30px] m-[15px] p-1 "></img>
        <img alt="" src={props.img3} class="w-[30px] m-[15px] p-1 "></img>
        <img alt="" src={props.img4} class="w-[30px] m-[15px] p-1 "></img>
        <img alt="" src={props.img5} class="w-[30px] m-[15px] p-1 "></img>
    </div>
    <div class="col-span-3">
    <p class="col-span-3 col-start-2 text-left py-2 text-[20px] font-bold ">Product Offer</p>
    <p class="col-span-3 col-start-2 text-left py-2 text-[20px] font-bold ">Offer</p>
    <p class="col-span-3 col-start-2 text-left py-2 text-[20px] font-bold ">Product Offer #2</p>
    <p class="col-span-3 col-start-2 text-left py-2 text-[20px] font-bold ">Product</p>
    <p class="col-span-3 col-start-2 text-left py-2 text-[20px] font-bold ">Product Offer</p>
    </div>
    </div>
    <div class="grid grid-cols4">
    <button class="w-[120px] h-[48px] text-white bg-[#7620FF] hover:bg-violet-600 rounded-[10px] my-5 col-span-4 justify-self-center ">Buy</button>
    </div>
    </div>
    </>
    );
}
export default Price 