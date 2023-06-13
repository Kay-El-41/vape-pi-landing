import { RiArrowRightSLine } from 'react-icons/ri'
import PropTypes from 'prop-types'

// components
import ViewBtn from '../components/ViewBtn'
import ViewmoreBtn from '../components/ViewmoreBtn'
import ProductCard from '../components/ProductCard'

import './styles/bestdealsection.css'

// Redux Query TEST
// import { useGetPromotionBannerQuery } from '../services/banner'

const BestDealSection = ({ data }) => {
  // const { data } = useGetPromotionBannerQuery()

  return (
    <section className="best-deal-section">
      <div className="best-deal-section-1">
        <h2 className="section-title">Best Deals</h2>
        <p className="section-desc">Just For You</p>

        {/* Deals Products */}
        <div className="best-deal-products">
          {/* mapping - products card */}
          {data?.slice(0, 6).map((product) => {
            return (
              <ProductCard
                key={product.productId}
                img={product.url}
                discounted={true}
                {...product}
              />
            )
          })}
        </div>
        <ViewmoreBtn />
      </div>

      {/* Deals Cards */}
      <div className="best-deal-section-2">
        <div className="d-card deal-card-1">
          <div>
            <h3>Membership Program</h3>
            <p>
              Be a Vape Pi member and get our <br />
              special exclusive offers
            </p>
            <ViewBtn />
          </div>
        </div>

        <div className="d-card deal-card-2">
          <h4>Devices</h4>
          <p>
            Find the best for <br />
            you here!
          </p>
          <RiArrowRightSLine className="deal-card-arrow" />
        </div>

        <div className="d-card deal-card-3">
          <h4>Pods</h4>
          <p>
            Variety of choices <br />
            available
          </p>
          <RiArrowRightSLine className="deal-card-arrow" />
        </div>

        <div className="d-card deal-card-4">
          <h4>Disposable</h4>
          <p>
            Easy, clean & <br />
            superb flavor
          </p>
          <RiArrowRightSLine className="deal-card-arrow" />
        </div>
      </div>
    </section>
  )
}

BestDealSection.propTypes = {
  data: PropTypes.array,
}

export default BestDealSection
