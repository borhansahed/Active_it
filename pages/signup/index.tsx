
import Link from "next/link";
import style from '../../styles/Login.module.css'
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";


const login = () => {
       
    const handleSubmit = () =>{

    }
    return (
        <div className="flex justify-center items-center">
            <div className="mt-32">
                <Link href={'/'}>
                <div className="ml-48">     
                <h1 style={{ color: '#79b158' }} className="lg:text-5xl text-4xl  font-black mb-0  ">
                    Active <span className="text-gray-300 text-2xl lg:text-4xl">-IT</span> </h1>
            </div>
             </Link>

            <div className={style.login}>

                <div className={style.container}>
                   <h1 className="text-3xl font-bold lg:ml-28 mt-6 text-gray-300">Login</h1>  
                   <div className="flex flex-col gap-y-6 mt-10">
                    
        <input  className="p-2 w-80 text-black outline-gray-200 rounded-md" type="email" placeholder="Your email address" name="email" id="" required />
        <input className="p-2 w-80 text-black outline-gray-200 rounded-md" type="text" placeholder="Password" name="name" id="" required />
        
        {/* <input style={{ 
  height: '150px'}}  type="textarea" placeholder="Your message" required  /> */}
        <input onClick={handleSubmit} className={style.loginButton} type="button" value="Submit" />
        </div>

        <div className="flex justify-center items-center mt-8  gap-x-3">
            <div className=" w-32 border border-gray-300">

            </div>
            <h1>OR</h1>
            <div className=" w-32 border border-gray-300">

            </div>
        </div>
                   <div className={style.icon}>
                  <div className="flex 
                  py-2 items-center gap-x-6 justify-center  ">
                    <h2 className="text-2xl "><FcGoogle></FcGoogle></h2>
                    {/* <h1 className="text-xl">Continue with Google</h1> */}
                  </div>

                   </div>

                   <div className="flex mt-5">
                    <h1 className="text-gray-300 hover:text-white">
                        Don`t have an account?
                    </h1>
                    <Link href='/signup/register'><h1  style={{ color: '#79b158' }} className=" ml-2 underline">Create an account</h1></Link>
                   </div>
                </div>
               
            </div>
            </div>
            
        </div>
    );
};

export default login;