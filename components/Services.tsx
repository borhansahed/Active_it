import Image from "next/image";
import logo from '../assets/images/icons/service1.png'
import logo1 from '../assets/images/icons/service2.png'
import logo2 from '../assets/images/icons/service3.png'

const Services = () => {
    return (
        <>
        <div className='lg:mt-40 mb-8 text-center'>
           <h1 className='text-3xl  '>Provide awesome <span className='text-white font-bold'>Services</span> </h1>
         <div className="flex justify-center items-center lg:gap-x-14 mt-20  ">
           <div className="  shadow-2xl  lg:w-96 hover:shadow-xl  group p-6  rounded-md border hover:opacity-50 border-gray-300">
            <Image className=" group-hover:animate-pulse " src={logo} width={74} height={74} alt={'web&mobile design'}/>
            <h3 className="text-xl lg:mt-3 mb-3 font-bold text-white ">Web & Mobile Design</h3>
            <p className="w-3/4 mx-auto ">
            We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
            </p>
           </div>
           <div className="w-96  shadow-2xl  hover:shadow-lg  group p-6 rounded-md border border-gray-300 hover:opacity-50">
           <Image className="group-hover:animate-pulse " src={logo1}  width={74} height={74} alt={'graphic design'}/>
           <h3 className="text-xl lg:mt-3 mb-3 font-bold text-white">
            Graphic Design
           </h3>
           <p className="w-3/4 mx-auto">
           Amazing flyers, social media posts and brand representations that would make your brand stand out.
           </p>
           </div>
           <div className="w-96  shadow-2xl hover:shadow-lg  group p-6 rounded-md border border-gray-300 hover:opacity-50">
           <Image className="group-hover:animate-pulse " src={logo2}  width={74} height={74} alt={'web development'}/>
           <h3 className="text-xl lg:mt-3 mb-3 font-bold text-white">Web Development</h3>
           <p className="w-3/4 mx-auto">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
           </div>
         </div>
        </div>
        
        </>
    );
};

export default Services;