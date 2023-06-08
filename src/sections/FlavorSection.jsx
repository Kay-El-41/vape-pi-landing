import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './styles/flavorsection.css'
import ViewBtn from '../components/ViewBtn'
import SlideNext from '../components/SlideNext'
import SlidePrev from '../components/SlidePrev'
import PropTypes from 'prop-types'

const SlideCard = ({ title, desc, img }) => {
  return (
    <div
      className="flavor-card-long"
      style={{
        background: `url(${img}) no-repeat left`,
      }}
    >
      <div>
        <h4 className="flavor-title">{title && title}</h4>
        <p className="flavor-desc">{desc && desc}</p>
        <ViewBtn />
      </div>
    </div>
  )
}

const FlavorSection = () => {
  const [isAtFirstSlide, setFirstSlide] = useState(true)
  const [isAtLastSlide, setLastSlide] = useState(false)

  const slideCheck = (swiper) => {
    swiper.isBeginning ? setFirstSlide(true) : setFirstSlide(false)
    swiper.isEnd ? setLastSlide(true) : setLastSlide(false)
  }

  return (
    <section className="flavor-section">
      <Swiper
        spaceBetween={'6px'}
        slidesPerView={'auto'}
        grabCursor={true}
        centeredSlides={true}
        onSlideChange={slideCheck}
      >
        <SwiperSlide style={{ width: 'auto', height: '240px' }}>
          <SlideCard
            title={'Try New Flavor'}
            desc={'Citrus Monster'}
            img={'/covers/v1.png'}
          />
        </SwiperSlide>

        {/* Placeholder Cards */}
        <SwiperSlide style={{ width: 'auto', height: '240px' }}>
          <SlideCard
            title={'Placeholder'}
            desc={'Placeholder'}
            img={'/covers/v2.png'}
          />
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto', height: '240px' }}>
          <SlideCard
            title={'Placeholder'}
            desc={'Placeholder'}
            img={'/covers/v3.png'}
          />
        </SwiperSlide>

        {!isAtFirstSlide > 0 && <SlidePrev />}
        {!isAtLastSlide > 0 && <SlideNext />}
      </Swiper>
    </section>
  )
}

// Prop validation
SlideCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  desc: PropTypes.string,
}
export default FlavorSection
