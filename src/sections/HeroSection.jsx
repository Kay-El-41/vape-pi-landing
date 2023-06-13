// Swiper & Swiper Styles Import
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import PropTypes from 'prop-types'


// Custom Swiper Buttons
import SlideNext from '../components/SlideNext'
import SlidePrev from '../components/SlidePrev'

// Section Styles
import './styles/herosection.css'

// Redux Query TEST
// import { useGetHeroBannerQuery } from '../services/banner'

const HeroSection = ({ data }) => {
  // const { data } = useGetHeroBannerQuery()

  // if (isBannerLoading) return <h1>Loading</h1>

  return (
    <section id="hero" className="hero">
      <div className="webView">
        <Swiper
          slidesPerView={'1'}
          autoplay={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          loop={true}
        >
          {data?.map((banner) => {
            return (
              banner.isWeb === 1 && (
                <SwiperSlide
                  style={{ width: 'auto', height: '595px' }}
                  key={banner.id}
                >
                  <div className="hero-cover-overlay"></div>
                  <img
                    src={banner.url}
                    alt="hero-image"
                    className="hero-cover-img"
                  />
                </SwiperSlide>
              )
            )
          })}
          {/* Slide Control Buttons */}
          <SlideNext />
          <SlidePrev />
        </Swiper>
      </div>

      <div className="mobileView">
        <Swiper
          slidesPerView={'1'}
          autoplay={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          loop={true}
        >
          {data?.map((banner) => {
            return (
              banner.isWeb === 0 && (
                <SwiperSlide
                  style={{ width: 'auto', height: '595px' }}
                  key={banner.id}
                >
                  <div className="hero-cover-overlay"></div>
                  <img
                    src={banner.url}
                    alt="hero-image"
                    className="hero-cover-img"
                  />
                </SwiperSlide>
              )
            )
          })}
          {/* Slide Control Buttons */}
          <SlideNext />
          <SlidePrev />
        </Swiper>
      </div>
    </section>
  )
}

HeroSection.propTypes = {
  data: PropTypes.array,
}

export default HeroSection
