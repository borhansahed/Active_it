import Navbar from "./Navbar";
import { AiOutlineHome} from "react-icons/ai";
import {RiDashboardLine} from "react-icons/ri/";
import {FiLogIn} from 'react-icons/fi'
import {IoIosContract} from 'react-icons/io'
import {RiTeamLine} from "react-icons/ri";
import {VscAccount} from "react-icons/vsc";
import {FcAbout} from "react-icons/fc";
import {useSession} from 'next-auth/react'



const Header = () => {

    const {data: session} = useSession();

    const user = false;
    return (
        <header className="flex flex-col lg:flex-row justify-between items-center  m-8 h-auto relative">

            <div className="flex  justify-evenly max-w-2xl  lg:mb-0 mb-2">

      <Navbar  url={''} title={'Home'} icons={<AiOutlineHome/>}/>
      {
          session &&  <Navbar url={'dashboard'} title={'Dashboard'} icons={<RiDashboardLine/>}/>
      }
      
       <Navbar url={'ourTeam'}title={'OurTeam'} icons={<RiTeamLine/>}/>
       <Navbar url={'contract'}title={'Contract'} icons={<IoIosContract/>}/>
       {
        session ?    <Navbar url={'account'}title={'Account'} icons={<VscAccount/>}/>: <Navbar url={'signup'} title={'Login'} icons={<FiLogIn/>}/>
       }
      
            </div>
            
            <div className="mr-0 lg:mr-8">
                <h1 style={{color: '#79b158'}} className="lg:text-5xl text-4xl  font-black mb-0  ">
                Active <span className="text-gray-300 text-2xl lg:text-4xl">-IT</span> </h1>
        {/* <h3  className="lg:text-2xl text-base  font-black mt-0 lg:ml-12 ml-8 ">Agency</h3> */}
            </div>
       
          
     

        </header>
    );
};

export default Header;