import logo from '../assets/images/logos/Frame.png'
import Image from 'next/image';
import { Button } from '@mui/material';
const HomeBanner = () => {
    return (
       <>
       <div className='flex flex-col justify-center lg:gap-x-60 lg:flex-row lg:mt-24 mt-12'>
        <div>
            <h1 className='text-white font-bold lg:text-5xl text-2xl tracking-widest '>Let`s Grow Your  </h1>
            <h2 className='text-white font-bold lg:text-5xl text-2xl lg:mt-4 lg:mb-4 mt-2 mb-2 tracking-widest '>Brand To The </h2>
            <h2 className='text-white font-bold lg:text-5xl text-2xl tracking-widest'>Next Level </h2>
            <p className='lg:mt-10 mt-5 lg:text-xl text-white'>
             We believe in Quality and never compromise<br /> on it.   Your Satisfaction is our Goal.  So,<br /> Our Relation will Grow together. <br /> Not Fast but Furious.
            </p>
            <Button variant="outlined" color={'inherit'} className='lg:mt-10 mt-5 px-9  '>Hire Us</Button>
        </div>
        <div>
     <Image className='' src={logo} width='
624px' height={'420px'} alt={'homeBanner'} />
        </div>
       </div>
       </>
    );
};

export default HomeBanner;