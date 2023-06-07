import { RiArrowRightSLine } from 'react-icons/ri'
import './styles/viewmoreBtn.css'

const ViewmoreBtn = () => {
  return (
    <button
      type="button"
      className='viewmore-btn'
      
    >
      View More
      <RiArrowRightSLine />
    </button>
  )
}

export default ViewmoreBtn
