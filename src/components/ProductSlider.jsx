import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'

import 'swiper/css'
import './styles/productslider.css'

import ProductCard from '../components/ProductCard'
import SlideNext from '../components/SlideNext'
import SlidePrev from '../components/SlidePrev'

const ProductSlider = ({ bgImg, img, title, desc, products }) => {
  const [isAtFirstSlide, setFirstSlide] = useState(true)
  const [isAtLastSlide, setLastSlide] = useState(false)

  // Show and Hide Buttons Based on Slide number
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
          {products?.map((product) => {
            return (
              <SwiperSlide
                style={{ width: 'auto', height: 'auto' }}
                key={product.productId}
              >
                <ProductCard key={product.productId}
                img={product.url}
                discounted={true}
                {...product} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

ProductSlider.propTypes = {
  bgImg: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  products: PropTypes.array,
}
export default ProductSlider
