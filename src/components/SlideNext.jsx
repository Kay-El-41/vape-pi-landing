import { useSwiper } from 'swiper/react'
import { BsArrowRight } from 'react-icons/bs'
import './styles/sliderBtn.css'

const SlideNext = () => {
  const swiper = useSwiper()
  return (
    <button type="button" onClick={() => swiper.slideNext()} className='sliderBtn next'>
      <BsArrowRight className='slider-icon'/>
    </button>
  )
}

export default SlideNext
