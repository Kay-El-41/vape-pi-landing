import { TiStarFullOutline } from 'react-icons/ti'
import './styles/productcard.css'

const ProductCard = ({ img, color, discounted }) => {
  return (
    <div className="product-card">
      <div style={{ backgroundColor: color }} className="card-image">
        {discounted ? <div className="discount-red">25% Off</div> : <div></div>}
        <img src={img} alt="" />
      </div>
      <h5 className="product-card-title">Refreshing Mint</h5>
      <p className="product-card-price">30,000 MMK</p>
      {discounted && <p className="product-card-discount">30,000 MMK</p>}
      <div className="product-card-star">
        <TiStarFullOutline />
        &nbsp;600 Points
      </div>
    </div>
  )
}

export default ProductCard
