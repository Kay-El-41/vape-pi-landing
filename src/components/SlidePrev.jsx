import { useSwiper } from 'swiper/react'
import { BsArrowLeft } from 'react-icons/bs'
import './styles/sliderBtn.css'

const SlidePrev = () => {
  const swiper = useSwiper()
  return (
    <button type="button" onClick={() => swiper.slidePrev()} className='sliderBtn prev'>
      <BsArrowLeft className='slider-icon'/>
    </button>
  )
}

export default SlidePrev
