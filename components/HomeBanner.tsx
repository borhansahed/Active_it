import logo from '../assets/images/logos/Frame.png'
import Image from 'next/image';
import style from '../styles/Home.module.css'

import WorkingCompany from './WorkingCompany';
import Link from 'next/link';
const HomeBanner = () => {
    return (
       <>
       <div className='flex flex-col justify-center lg:gap-x-60 lg:flex-row lg:mt-28 mt-14'>
        <div className='lg:mt-8'>
            <div className='lg:ml-0 ml-20'>
            <h1 className='text-white font-bold lg:text-5xl text-3xl tracking-widest '>Let`s Grow Your  </h1>
            <h2 className='text-white font-bold lg:text-5xl text-3xl lg:mt-4 lg:mb-4 mt-2 mb-2 tracking-widest '>Brand To The </h2>
            <h2 className='text-white font-bold lg:text-5xl text-3xl tracking-widest'>Next Level </h2>
            </div>
            <p className='lg:mt-10 mt-5 lg:text-xl text-white lg:w-96 w-80 lg:mx-0 mx-auto'>
            Your Satisfaction is our Goal. We believe in Quality and never compromise on it. So, Our Relation will Grow together. Be Connected And Growing Together.
            </p>
            <Link href={'/dashboard'}>
            <button  className={style.homeButton}>HIRE US</button>
            </Link>
            
        </div>
        <div>
     <Image className='' src={logo} width='
650px' height={'450px'} alt={'homeBanner'} />
        </div>
       </div>
       <WorkingCompany/>
       </>
    );
};

export default HomeBanner;