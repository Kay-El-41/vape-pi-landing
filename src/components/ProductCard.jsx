import { TiStarFullOutline } from 'react-icons/ti'
import PropTypes from 'prop-types'
import './styles/productcard.css'

const ProductCard = ({
  img,
  discounted,
  originalPrice,
  promotePercent,
  promotePrice,
  name,
}) => {
  return (
    <div className="product-card">
      <div className="card-image">
        {discounted ? (
          <div className="discount-red">{promotePercent}% Off</div>
        ) : (
          <div></div>
        )}
        <img src={img} alt="" />
      </div>
      <h5 className="product-card-title">{name}</h5>

      <p className="product-card-price">{promotePrice} MMK</p>

      {discounted && (
        <p className="product-card-discount">{originalPrice} MMK</p>
      )}
      <div className="product-card-star">
        <TiStarFullOutline />
        &nbsp;600 Points
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  img: PropTypes.string,
  discounted: PropTypes.bool,
  originalPrice: PropTypes.number,
  promotePercent: PropTypes.number,
  promotePrice: PropTypes.number,
  name: PropTypes.string,
}

export default ProductCard
