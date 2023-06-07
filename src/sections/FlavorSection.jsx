import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ViewBtn from '../components/ViewBtn'
import './styles/flavorsection.css'
import SlideNext from '../components/SlideNext'
import SlidePrev from '../components/SlidePrev'
import { useState } from 'react'

const SlideCard = ({ title, desc, img }) => {
  return (
    <div
      className="flavor_card_long"
      style={{
        background: `url(${img}) no-repeat left`,
      }}
    >
      <div>
        <h4 className="flavor-title">{title && title}</h4>
        <p className="flavor-desc">{desc && desc}</p>
        {title && <ViewBtn />}
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
    <section className="flavor_section">
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

        <SwiperSlide style={{ width: 'auto', height: '240px' }}>
          <SlideCard img={'/covers/v2.png'} />
        </SwiperSlide>

        <SwiperSlide style={{ width: 'auto', height: '240px' }}>
          <SlideCard img={'/covers/v3.png'} />
        </SwiperSlide>

        {!isAtFirstSlide > 0 && <SlidePrev />}
        {!isAtLastSlide > 0 && <SlideNext />}
      </Swiper>
    </section>
  )
}

export default FlavorSection
