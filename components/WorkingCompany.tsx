import { SiNetflix } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiGoogle } from "react-icons/si";
import { SiAmazon } from "react-icons/si";
import { SiAirbnb } from "react-icons/si";
import { FaUber } from   "react-icons/fa";

const WorkingCompany = () => {
    return (
        <>
        <div className=" flex justify-center items-center gap-x-28 lg:mt-32 x">
            <SiNetflix className="lg:text-6xl text-2xl hover:animate-spin hover:text-white"/>
            <SiAmazon className="text-6xl hover:animate-spin  hover:text-white"/>
            <SiSlack className="text-6xl hover:animate-spin  hover:text-white"/>
            <SiAirbnb className="text-6xl hover:animate-spin  hover:text-white"/>
            <SiGoogle className="text-6xl hover:animate-spin  hover:text-white"/>
            <FaUber className="text-6xl hover:animate-spin  hover:text-white"/>
          
        </div>
        </>
    );
};

export default WorkingCompany;