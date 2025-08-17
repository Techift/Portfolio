import { Link } from "react-router-dom";

function Discover(){
    return(
      <div className="pb-[6rem] px-2">
        <div className="text-white flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left m-auto mx-auto max-w-4xl gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">DISCOVER THE <br /> PROFFESIONAL <br/> JOURNEY OF A <br /> FOUNDER.</h1>

            <Link to="/about" className="text-white hover:text-blue-200 transition-colors">
            <button className="hover:bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hover:border-none hover:text-black font-bold bg-transparent border-white border text-white rounded-[20px] py-2 px-6 mt-3 w-max transition-colors">About Me</button>
            </Link>
          </div>
          <p className="w-full md:w-1/2 sm:text-base md:text-xl text-center md:text-left mt-6 md:mt-0">Lorem ipsum dolor sit amet consectetur adipisicing <br/>
            elit. Animi cum saepe eaque cumque sit harum,<br/>
            ipsum at accusamus obcaecati ratione tenetur <br/> reiciendis fugiat quasi aliquid, dolorum, <br/>
            et quibusdam adipisci debitis.</p>
        </div>
      </div>
    )
}
export default Discover;