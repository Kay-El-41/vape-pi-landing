// Swiper & Swiper Styles Import
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Custom Swiper Buttons
import SlideNext from '../components/SlideNext'
import SlidePrev from '../components/SlidePrev'

// Section Styles
import './styles/herosection.css'
import ViewBtn from '../components/ViewBtn'

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <Swiper
        slidesPerView={'1'}
        autoplay={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        loop={true}
      >
        {/* Cannot create a components for swiperSlider because it brokes!!*/}
        <SwiperSlide style={{ width: 'auto', height: '595px' }}>
          <div className="hero-slide-content">
            <div className="hero-headers">
              <p>The Best Look</p>
              <h1>Anytime Anywhere</h1>
              <p>Starts from 10,000 MMK</p>
              <ViewBtn />
            </div>
            <div className="hero-cover-overlay"></div>
            <img
              src="/hero-cover1.jpg"
              alt="hero-image"
              className="hero-cover-img"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto', height: '595px' }}>
          <div className="hero-cover-overlay"></div>
          <img
            src="/hero-cover1.jpg"
            alt="hero-image"
            className="hero-cover-img"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '595px' }}>
          <div className="hero-cover-overlay"></div>
          <img
            src="/hero-cover1.jpg"
            alt="hero-image"
            className="hero-cover-img"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '595px' }}>
          <div className="hero-cover-overlay"></div>
          <img
            src="/hero-cover1.jpg"
            alt="hero-image"
            className="hero-cover-img"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '595px' }}>
          <div className="hero-cover-overlay"></div>
          <img
            src="/hero-cover1.jpg"
            alt="hero-image"
            className="hero-cover-img"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '595px' }}>
          <div className="hero-cover-overlay"></div>
          <img
            src="/hero-cover1.jpg"
            alt="hero-image"
            className="hero-cover-img"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '595px' }}>
          <div className="hero-cover-overlay"></div>
          <img
            src="/hero-cover1.jpg"
            alt="hero-image"
            className="hero-cover-img"
          />
        </SwiperSlide>

        <SlideNext />
        <SlidePrev />
      </Swiper>
    </section>
  )
}

export default HeroSection
