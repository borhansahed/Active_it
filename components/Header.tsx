import Navbar from "./Navbar";
import { AiOutlineHome} from "@react-icons/all-files/ai/AiOutlineHome";
import {RiDashboardLine} from "@react-icons/all-files/ri/RiDashboardLine";
import {FiLogIn} from '@react-icons/all-files/fi/FiLogIn'
import {IoIosContract} from '@react-icons/all-files/io/IoIosContract'
import {RiTeamLine} from "@react-icons/all-files/ri/RiTeamLine";
import {VscAccount} from "@react-icons/all-files/vsc/VscAccount";
import {FcAbout} from "@react-icons/all-files/fc/FcAbout";



const Header = () => {

    const user = true;
    return (
        <header className="flex flex-col lg:flex-row justify-between items-center  m-8 h-auto relative">

            <div className="flex  justify-evenly max-w-2xl  lg:mb-0">

      <Navbar title={'Home'} icons={<AiOutlineHome/>}/>
       <Navbar title={'Dashboard'} icons={<RiDashboardLine/>}/>
       <Navbar title={'OurTeam'} icons={<RiTeamLine/>}/>
       <Navbar title={'Contract'} icons={<IoIosContract/>}/>
       {
        user ?    <Navbar title={'Account'} icons={<VscAccount/>}/>: <Navbar title={'Login'} icons={<FiLogIn/>}/>
       }
      
            </div>
            
            <div className="mr-0 lg:mr-8">
                <h1 className="lg:text-5xl text-3xl text-white font-black mb-0  ">
                Active <span className="text-gray-300 text-2xl lg:text-4xl">-IT</span> </h1>
        {/* <h3  className="lg:text-2xl text-base  font-black mt-0 lg:ml-12 ml-8 ">Agency</h3> */}
            </div>
       
          
     

        </header>
    );
};

export default Header;