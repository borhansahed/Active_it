import Link from "next/link";
import style from '../../styles/Login.module.css'
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signIn} from 'next-auth/react'
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Register = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState(0);

    const handleEmail = (event:any) =>{
        if(event.target.value === 'number'){
            alert('sorry')
        }else{
           setEmail(event.target.value); 
        }
        
    }
    const handleName = (event:any) =>{
        setName(event.target.value);
    }
    const handleMobile = (event:any) =>{
        setNumber(event.target.value);
    }
    const handlePassword = (event:any) =>{
        setPassword(event.target.value);
    }

    const handleSubmit = async () =>{
        
        
        event?.preventDefault();
        const user:{
            name:string,
            email:string,
            password:string,
            number: number
        } = {
            name:name,
            email: email,
            password: password,
            number: number
        }
        const options ={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)

        }
       
        await fetch('http://localhost:3000/api/auth/signup',options)
              .then(res => res.json())
              .then(data =>{
                console.log(data.message)
               

                if(data.message === 'Already Exits'){
                    return toast.error('Already Exits')
                }
                if(data){
                    toast.success("Successfully Register");
                    setTimeout(() => {
                        router.push('/signup')
                    }, 1000);
                }else{
                    toast.error("User validation failed")
                }
              })

       
    }
    const handleGoogle = async () =>{
        await signIn('google', {callbackUrl:'/'})
     
         }
    return (
        <div className="flex justify-center items-center">
        <div className="mt-32">
            <Link href={'/'}>
            <div className="ml-52">
            <h1 style={{ color: '#79b158' }} className="lg:text-5xl text-4xl  font-black mb-0  ">
                Active <span className="text-gray-300 text-2xl lg:text-4xl">-IT</span> </h1>
        </div>
          </Link>
        <div className={style.register}>

            <div className={style.container}>
               <h1 className="text-3xl font-bold lg:ml-24 mt-6 text-gray-300">Register</h1>  
               <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 mt-10">
    <input  onChange={handleName} className="p-2 w-80 text-black outline-gray-200 rounded-md" type="text" placeholder="Name" name="name" id="" required />
    <input  onChange={handleEmail} className="p-2 w-80 text-black outline-gray-200 rounded-md" type="email" placeholder="Your email address" name="email" id="" required />
    <input onChange={handlePassword} className="p-2 w-80 text-black outline-gray-200 rounded-md" type="text" placeholder="Password" name="password" id="" required />
    <input  onChange={handleMobile} className="p-2 w-80 text-black outline-gray-200 rounded-md" type="number" id={style.Number} placeholder="Mobile Number" name="number"required />
    
   
    <input   className={style.loginButton} type="submit" value="Submit"  />
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
                <h2 className="text-2xl "><FcGoogle></FcGoogle></h2>
                {/* <h1 className="text-xl">Continue with Google</h1> */}
              </div>

               </div>

               <div className="flex mt-5 ml-9 ">
                <h1 className="text-gray-300 hover:text-white">
                    Already have an account?
                </h1>
                <Link href='/signup'><h1  style={{ color: '#79b158' }} className=" ml-2 underline">Login</h1></Link>
               </div>
            </div>
           
        </div>
        </div>
        
    </div>
    );
};

export default Register;