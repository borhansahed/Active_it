import { SiNetflix } from "@react-icons/all-files/si/SiNetFlix";
import { SiSlack } from "@react-icons/all-files/si/SiSlack";
import { SiAirbnb } from "@react-icons/all-files/si/SiAirbnb";
import { SiGoogle } from "@react-icons/all-files/si/SiGoogle";
import { SiAmazon } from "@react-icons/all-files/si/SiAmazon";
import { FaUber } from "@react-icons/all-files/fa/FaUber";

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