
const Navbar = (props:any) => {
    const {title , icons} = props
    return (
       <div className="flex flex-col items-center group w-12 lg:w-24 hover:text-white active:text-red-700">
        <p className="text-2xl h-8  mb-1 group-hover:animate-bounce">{icons}</p>
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>

       </div>
    );
};

export default Navbar;