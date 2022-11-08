
import Link from "next/link";

import { MdDashboard }    from "react-icons/md";
import { FaServicestack }         from "react-icons/fa";
import { RiAdminFill }            from "react-icons/ri";
import { GoListOrdered }          from "react-icons/go";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router';



const url = [
    {
        link: '/dashboard',
        icon: <MdDashboard></MdDashboard>,
        name: 'Dashboard'
    },
    {
        link: '/dashboard/order',
        icon: <GoListOrdered></GoListOrdered>,
        name: 'Order'
    },
    {
        link: '/dashboard/myservice',
        icon: <FaServicestack></FaServicestack>,
        name: 'Service'
    },

    {
        link: '/dashboard/makeAdmin',
        icon: <RiAdminFill></RiAdminFill>,
        name: 'Admin'
    },


]







const Sidebar = () => {

    const router = useRouter();


    const handleSignOut = () => {

        signOut();
        setTimeout(() => {
            router.push('http:localhost:3000')
        }, 1000)




    }

    const { data: session } = useSession();

    return (
        <div className="flex flex-col gap-y-10 px-14 py-5  ">

            <h1>{session?.user?.name}</h1>
            <h1>{session?.user?.email}</h1>
            <button onClick={handleSignOut}>signOut</button>

            {/* <Image className="w-40 rounded-full" src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} width={74} height={74} alt={'profile'}/> */}

            {
                url.map((item, index) => {
                    return (

                        <div key={index}>



                            <Link href={item.link} >
                                <div className='text-xl  hover:animate-pulse' >


                                    <div className="flex items-center gap-x-2">
                                        <h2 className="text-xl text-white">{item.icon}</h2>

                                        <h2 className="text-xl">{item.name}</h2>

                                    </div>

                                </div>
                            </Link>
                        </div>


                    )
                })
            }

            <div className="mt-40 ml-6">
                <Link href={'/'}>
                    <h1 className="text-4xl text-white animate-pulse"><RiArrowRightCircleFill></RiArrowRightCircleFill></h1>
                </Link>
            </div>

            {/* /* <div onClick={()=> setSeleted(0)} className="flex items-center gap-x-2">
                <h2  className="text-xl"><MdDashboard></MdDashboard></h2>
              <Link href={'/dashboard'}><h1  className = {seleted === 0 ?'text-xl font-bold' : 'text-orange-500'}  >Dashboard</h1></Link>  
            </div>
             <Link href={'/dashboard/order'}><h1 className = 'text-xl' >Order</h1></Link>
            <Link href={'/dashboard/makeAdmin'}><h1  className ='text-xl'  >Admin</h1></Link>
           
           <div className="flex items-center gap-x-2">
            <h2><FaServicestack></FaServicestack></h2>
            <Link href={'/dashboard/myservice'}><h1 className = 'text-xl' >Service</h1></Link>
           </div>
            
           
             */}

        </div>

    );
};

export default Sidebar;