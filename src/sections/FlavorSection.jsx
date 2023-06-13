import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './styles/flavorsection.css'
import SlideNext from '../components/SlideNext'
import SlidePrev from '../components/SlidePrev'
import PropTypes from 'prop-types'

// Redux Query TEST
// import { useGetAdsBannerQuery } from '../services/banner'

const SlideCard = ({ img }) => {
  return (
    <div
      className="flavor-card-long"
      style={{
        background: `url(${img}) no-repeat`,
        backgroundPosition: '30% 10%',
        backgroundSize: 'cover',
      }}
    ></div>
  )
}

const FlavorSection = ({ data }) => {
  const [isAtFirstSlide, setFirstSlide] = useState(true)
  const [isAtLastSlide, setLastSlide] = useState(false)

  const slideCheck = (swiper) => {
    swiper.isBeginning ? setFirstSlide(true) : setFirstSlide(false)
    swiper.isEnd ? setLastSlide(true) : setLastSlide(false)
  }

  // const { data } = useGetAdsBannerQuery()

  return (
    <section className="flavor-section">
      <div className="webView">
        <Swiper
          spaceBetween={'6px'}
          slidesPerView={'auto'}
          grabCursor={true}
          centeredSlides={true}
          onSlideChange={slideCheck}
        >
          {data?.map((card) => {
            return (
              card.isWeb === 1 && (
                <SwiperSlide
                  style={{ width: 'auto', height: '240px' }}
                  key={card.productId}
                >
                  <SlideCard
                    title={'Try New Flavor'}
                    desc={'Citrus Monster'}
                    img={card.url}
                  />
                </SwiperSlide>
              )
            )
          })}

          {!isAtFirstSlide > 0 && <SlidePrev />}
          {!isAtLastSlide > 0 && <SlideNext />}
        </Swiper>
      </div>

      <div className="mobileView">
        <Swiper
          spaceBetween={'6px'}
          slidesPerView={'auto'}
          grabCursor={true}
          centeredSlides={true}
          onSlideChange={slideCheck}
        >
          {data?.map((card) => {
            return (
              card.isWeb === 0 && (
                <SwiperSlide
                  style={{ width: 'auto', height: '240px' }}
                  key={card.productId}
                >
                  <SlideCard img={card.url} />
                </SwiperSlide>
              )
            )
          })}

          {!isAtFirstSlide > 0 && <SlidePrev />}
          {!isAtLastSlide > 0 && <SlideNext />}
        </Swiper>
      </div>
    </section>
  )
}

// Prop validation
SlideCard.propTypes = {
  img: PropTypes.string,
}

FlavorSection.propTypes = {
  data: PropTypes.array,
}
export default FlavorSection
