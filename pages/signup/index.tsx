
import Link from "next/link";
import style from '../../styles/Login.module.css'
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast';
import { useState } from "react";
import { useRouter } from "next/router";




const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        event?.preventDefault();

        const status:any = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
            callbackUrl: "/"
        })
        if (status?.ok) {
            setTimeout(() =>{
                router.push(status.url) 
            },2000)

            toast.success("Successfully Login")
         
        }else{
            toast.error("User and Password not matched")
        }

    }

    const handleEmail = (event: any) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: any) => {
        setPassword(event.target.value);
    }


    const handleGoogle = async () => {
        await signIn('google', { callbackUrl: '/' })

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
                        <form onClick={handleSubmit} className="flex flex-col gap-y-6 mt-10">

                            <input onChange={handleEmail} className="p-2 w-80 text-black outline-gray-200 rounded-md" type="email" placeholder="Your email address" name="email" id="email" required />
                            <input onChange={handlePassword} className="p-2 w-80 text-black outline-gray-200 rounded-md" type="text" placeholder="Password" name="password" id="" required />

                            {/* <input style={{ 
  height: '150px'}}  type="textarea" placeholder="Your message" required  /> */}
                            <input className={style.loginButton} type="button" value="Submit" />
                        </form>

                        <div className="flex justify-center items-center mt-8  gap-x-3">
                            <div className=" w-32 border border-gray-300">

                            </div>
                            <h1>OR</h1>
                            <div className=" w-32 border border-gray-300">

                            </div>
                        </div>
                        <div onClick={handleGoogle} className={style.icon}>
                            <div className="flex 
                  py-2 items-center gap-x-6 justify-center  ">
                                <button className="text-2xl " ><FcGoogle></FcGoogle></button>
                                {/* <h1 className="text-xl">Continue with Google</h1> */}
                            </div>

                        </div>

                        <div className="flex mt-5">
                            <h1 className="text-gray-300 hover:text-white">
                                Don`t have an account?
                            </h1>
                            <Link href='/signup/register'><h1 style={{ color: '#79b158' }} className=" ml-2 underline">Create an account</h1></Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Login;