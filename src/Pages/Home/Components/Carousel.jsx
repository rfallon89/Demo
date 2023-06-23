import { useEffect, useState } from "react";
import { bannerDetails } from "../../../Utils/API";
import {Swiper,SwiperSlide} from "swiper/react"
import {Navigation, Pagination} from "swiper"
import {Link} from "react-router-dom"
import 'swiper/swiper-bundle.css'
import default1 from '../../../Assets/shutter1.jpg'
import default2 from '../../../Assets/shutter2.jpg'
import '../Styles/Carousel.css'

function Carousel () {
    const [bannerContent, setBannerContent] = useState([])
   
    useEffect(()=>{
        bannerDetails().then((response)=>setBannerContent(response))
    },[])

    const slide1 = {
        ImageUrl:default1,
        Title:'Lorem ipsum dolor',
        Subtitle:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor'
    }

    const slide2 = {
        ImageUrl:default2,
        Title:'Lorem ipsum dolor',
        Subtitle:'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor'
    }

    const backUpSliderContent = [slide1,slide2]

    return (
        <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
                dynamicBullets:true
            }}
            slidesPerView={1}
            navigation={true}
        >
            {bannerContent.length
                ? bannerContent.map((slide,index)=>(
                    <SwiperSlide key={index} className="slide-container">
                        <img id={`carousel-image${index}`} src={slide.ImageUrl} alt={slide.Title}/>
                        <div className="text-container">
                            <h1 id='carousel-title'>{`${slide.Title}`}</h1>
                            <h2 id='carousel-subtitle'>{`${slide.Subtitle}`}</h2>
                            <Link id='link' to="/contact-us">Contact Us</Link>
                        </div>
                    </SwiperSlide>
                    )
                )
                : backUpSliderContent.map((slide,index)=>(
                    <SwiperSlide key={index} className="slide-container">
                        <img id={`carousel-image${index}`} src={slide.ImageUrl} alt={slide.Title}/>
                        <div className="text-container">
                            <h1 id='carousel-title'>{`${slide.Title}`}</h1>
                            <h2 id='carousel-subtitle'>{`${slide.Subtitle}`}</h2>
                            <Link id='link' to="/contact-us">Contact Us</Link>
                        </div>
                    </SwiperSlide>
                    )
                )}
        </Swiper>
        )
}

export default Carousel 