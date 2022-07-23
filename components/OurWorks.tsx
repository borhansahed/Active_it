import Image from 'next/image';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import logo from '../assets/images/icons/carousel-1.png'
import logo1 from '../assets/images/icons/carousel-2.png'
import logo2 from '../assets/images/icons/carousel-3.png'
import logo3 from '../assets/images/icons/carousel-4.png'
import logo4 from '../assets/images/icons/carousel-5.png'
import logo5 from '../assets/images/icons/computerMart.png'
import logo6 from '../assets/images/icons/sunnah.png'
const OurWorks = () => {
    return (
       <>

       <div style={{backgroundColor: '#6d9853'}} className='  py-24 mt-36'>

        <h1 className='text-center text-4xl text-white font-medium'>Here are some of our <span className='font-bold'>Works</span> </h1>
       <div className=" mt-28 w-3/4 mx-auto">
      
      <Swiper
       slidesPerView ={3}
       spaceBetween={25}
       freeMode={true}
       pagination={{
         clickable: true,
       }}
       modules={[FreeMode, Pagination]}
       className="mySwiper"
     >
       <SwiperSlide><Image className='  transition duration-100 transform hover:scale-125' src={logo} width={500} height={300} alt={'carousel'}/></SwiperSlide>
       <SwiperSlide><Image  className='  transition duration-100 transform hover:scale-125' src={logo1} width={500} height={300} alt={'carousel'}/></SwiperSlide>
       <SwiperSlide><Image className='  transition duration-100 transform hover:scale-125' src={logo2} width={500} height={300} alt={'carousel'}/></SwiperSlide>
       <SwiperSlide><Image className='  transition duration-100 transform hover:scale-125' src={logo3} width={500} height={300} alt={'carousel'}/></SwiperSlide>
       <SwiperSlide><Image className='  transition duration-100 transform hover:scale-125' src={logo4} width={500} height={300} alt={'carousel'}/></SwiperSlide>
       <SwiperSlide><Image className='  transition duration-100 transform hover:scale-125' src={logo4} width={500} height={300} alt={'carousel'}/></SwiperSlide>
       <SwiperSlide><Image className='  transition duration-100 transform hover:scale-125' src={logo5} width={500} height={300} alt={'carousel'}/></SwiperSlide>
       <SwiperSlide><Image className='  transition duration-100 transform hover:scale-125' src={logo6} width={500} height={300} alt={'carousel'}/></SwiperSlide>
     
     </Swiper>

      </div>
       </div>
      
       
       </>
    );
};

export default OurWorks;