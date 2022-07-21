import { SiNetflix } from "@react-icons/all-files/si/SiNetFlix";
import { SiUber } from "@react-icons/all-files/si/SiUber";
import { SiSlack } from "@react-icons/all-files/si/SiSlack";
import { SiAirbnb } from "@react-icons/all-files/si/SiAirbnb";
import { SiGoogle } from "@react-icons/all-files/si/SiGoogle";
import { SiAmazon } from "@react-icons/all-files/si/SiAmazon";
import { FaUber } from "@react-icons/all-files/fa/FaUber";

const WorkingCompany = () => {
    return (
        <>
        <div className=" flex justify-center items-center gap-x-28 lg:mt-32 x">
            <SiNetflix className="text-6xl hover:animate-spin"/>
            <SiAmazon className="text-6xl hover:animate-spin"/>
            <SiSlack className="text-6xl hover:animate-spin"/>
            <SiAirbnb className="text-6xl hover:animate-spin"/>
            <SiGoogle className="text-6xl hover:animate-spin"/>
            <FaUber className="text-6xl hover:animate-spin"/>
          
        </div>
        </>
    );
};

export default WorkingCompany;