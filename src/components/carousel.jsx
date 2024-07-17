import '../styles/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules'; // Correct import path for Navigation module
//CAROUSEL FOTOS
import RayoMcQueen from '../image/rayomcqueen.jpg';
import Soul from '../image/soul.jpg';
import DoctorStrange from '../image/doctor-strange.jpg';
import JimCarrey from '../image/JimCarrey.jpg';
import SoulTitle  from '../image/soul-title.png';
import DoctorStrangeTitle from '../image/doctor-strange-title.jpg';
import RayoMcQueenTitle from '../image/rayomcqueen-title.png';
import JimCarreyTitle from '../image/JimCarrey-title.png';

function Carousel(){
    return(
        <div className='carousel'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='slide'>
          <div className='images-carousel'>
          <img src={DoctorStrangeTitle} className='images-carousel-title'/>
          <img src={DoctorStrange} className='images-carousel-image'/>
          </div>  
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='images-carousel'>
          <img src={RayoMcQueenTitle} className='images-carousel-title'/>
          <img src={RayoMcQueen} className='images-carousel-image'/>
          </div>  
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='images-carousel'>
          <img src={SoulTitle} className='images-carousel-title'/>
          <img src={Soul} className='images-carousel-image'/>
          </div>  
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className='images-carousel'>
          <img src={JimCarreyTitle} className='images-carousel-title'/>
          <img src={JimCarrey} className='images-carousel-image'/>
          </div>  
        </SwiperSlide>
      </Swiper>
        </div>
    );
}
export default Carousel;