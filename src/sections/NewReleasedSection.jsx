import PropTypes from 'prop-types'
import './styles/newreleasedsection.css'
import ViewmoreBtn from '../components/ViewmoreBtn'

// Redux Query TEST
// import { useGetNewArrivalBannerQuery } from '../services/banner'

const FlavorCard = ({ title, img, price }) => {
  return (
    <div
      className="flavor-card"
      style={{
        background: `url(${img}) no-repeat`,
        backgroundPosition: ' 10%',
        backgroundSize: 'cover',
      }}
    >
      <h4>{title}</h4>
      <p>{price} MMK</p>
    </div>
  )
}

const NewReleasedSection = ({ data }) => {
  // FROM REDUX
  // const { data } = useGetNewArrivalBannerQuery()

  return (
    <section className="new-section">
      <h2 className="section-title">
        <span>New</span> Released
      </h2>
      <p className="section-desc">Try Our Latest Flavors Here</p>
      <div className="new-flavor-section">
        {data?.slice(0, 4).map((flavor) => {
          return (
            <FlavorCard
              key={flavor.productId}
              img={flavor.url}
              title={flavor.name}
              price={flavor.promotePrice}
            />
          )
        })}
      </div>
      <ViewmoreBtn />
    </section>
  )
}

// Props Validation
FlavorCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
}

NewReleasedSection.propTypes = {
  data: PropTypes.array,
}

export default NewReleasedSection
