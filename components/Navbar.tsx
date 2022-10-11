import Link from "next/link";
import style from "../styles/Nav.module.css"

interface Header{
   title: string,
   icons?: any,
   url: string 
}
const Navbar = (props:Header) => {
    const {title , icons, url} = props
    return (
      <Link href={`/${url}`}> 
      <div  className="flex flex-col items-center group w-12 lg:w-24 hover:text-white active:text-green-200">
       <p className="text-2xl h-8  mb-1 group-hover:animate-bounce">{icons}</p>  
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>

       </div>
       </Link>
    );
};

export default Navbar;