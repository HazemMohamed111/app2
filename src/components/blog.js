

function Blog () {
    return(
        <>
        <div class="md:mx-12 lg:mx-16 ">
            <p class=" text-center text-[30px] font-serif font-extrabold text-[#0B093B] md:text-left md:text-[40px] lg:text-[40px]">Our Blog Story</p>
            <p class=" text-[12px] text-[#0B093B] mx-6 text-center font-serif md:text-left md:text-[13px] lg:my-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit similique sint saepe reiciendis dolore, neque unde necessitatibus. Porro consequatur fugiat sequi culpa doloremque,</p>
        </div>
        <div class="grid grid-cols-4 md:flex md:mx-10 lg:grid-cols-12 lg:mx-20">
        <div class=" col-span-4 md:w-1/3 md:mx-4"><Cards head='New Office!' company="Company" name="Luke Skywalker, 2 days ago " description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/></div>
        <div class=" col-span-4 md:w-1/3 md:mx-4"><Cards head='New Office!' company="Company" name="Luke Skywalker, 2 days ago " description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/></div>
        <div class=" col-span-4 md:w-1/3 md:mx-4"><Cards head='New Office!' company="Company" name="Luke Skywalker, 2 days ago " description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/></div>
        </div>
        <div class="grid grid-cols-4 md:flex md:mx-10 lg:grid-cols-12 lg:mx-20">
        <div class=" col-span-4 md:w-1/3 mx-4"><Cards head='New Office!' company="Company" name="Luke Skywalker, 2 days ago " description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/></div>
        <div class=" col-span-4 md:w-1/3 mx-4"><Cards head='New Office!' company="Company" name="Luke Skywalker, 2 days ago " description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/></div>
        <div class=" col-span-4 md:w-1/3 mx-4"><Cards head='New Office!' company="Company" name="Luke Skywalker, 2 days ago " description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incident ut lab'/></div>
        </div>
        <div class="grid grid-cols-4 md:my-10 lg:mb-20">
            <button class="w-[200px] h-[48px] text-white bg-[#7620FF] hover:bg-violet-600 rounded-[10px] my-5 col-span-4 justify-self-center ">Load More</button>
        </div>
        </>
    );
}

function Cards (props) {
    return (
        <div class= "grid grid-cols-4 shadow-md duration-300 md:grid-cols-4 bg-white rounded-[10px] hover:bg-slate-100 m-6 md:mx-2 md:col-span-4 lg:grid-cols-4 lg:mx-4 ">
                <p className=" col-span-4 p-6 font-semibold text-black text-[18px] my-1 font-serif text-left md:text-[20px] md:order-1 md:col-span-4 lg:order-2 lg:col-span-4 lg:text-[20px] lg:text-left lg:font-bold">{props.head}</p>
                <p class="text-[14px] font-Inika text-left  px-4 md:text-[13px] md:order-2 md:col-span-4 col-span-4 lg:order-3 lg:text-[13px] lg:py-3 ">{props.description}</p>
                <p class=" col-span-4 px-4 py-2 font-semibold font-sans md:order-3 md:text-[13px] lg:font-bold">{props.name}</p>
                <p class=" col-span-4 px-4 py-2 mx-4 my-2 w-[100px] h-[42px] bg-[#C4FFFF] rounded-[20px] md:text-[13px] md:w-[88px] md:h-[38px] md:order-4 lg:font-bold ">{props.company}</p>
        </div>
    );
}
export default Blog