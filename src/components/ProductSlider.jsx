import { productData } from '../product'
import ProductCard from '../components/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'
import SlideNext from '../components/SlideNext'
import SlidePrev from '../components/SlidePrev'
import './styles/productslider.css'

const ProductSlider = ({ bgImg, img, title, desc }) => {
  const [isAtFirstSlide, setFirstSlide] = useState(true)
  const [isAtLastSlide, setLastSlide] = useState(false)

  const slideCheck = (swiper) => {
    swiper.isBeginning ? setFirstSlide(true) : setFirstSlide(false)
    swiper.isEnd ? setLastSlide(true) : setLastSlide(false)
  }

  return (
    <div
      className="device-card-long"
      style={{
        background: `url(${bgImg}) no-repeat left`,
        backgroundSize: 'cover',
      }}
    >
      <img src={img} alt="" className="device-detail-img" />
      <div className="device-detail-desc">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className="device-swiper-container">
        <Swiper
          spaceBetween={'6px'}
          slidesPerView={'auto'}
          grabCursor={true}
          centeredSlides={true}
          onSlideChange={slideCheck}
          breakpoints={{
            992: {
              centeredSlides: false,
            },
          }}
        >
          {!isAtFirstSlide > 0 && <SlidePrev />}
          {!isAtLastSlide > 0 && <SlideNext />}
          {productData.map((product) => {
            return (
              <SwiperSlide
                style={{ width: 'auto', height: 'auto' }}
                key={product.cardId}
              >
                <ProductCard img={product.img} color={'var(--color-gray)'} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default ProductSlider
