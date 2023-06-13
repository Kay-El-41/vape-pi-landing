import ProductSlider from '../components/ProductSlider'
import './styles/devicesection.css'
import PropTypes from 'prop-types'

// Redux Query TEST
// import { useGetProductCategoriesQuery } from '../services/banner'

const DeviceSection = ({ data }) => {
  // const { data } = useGetProductCategoriesQuery()

  const devices = data?.mainCategory[0]
  const pods = data?.mainCategory[1]
  const disposables = data?.mainCategory[2]

  return (
    <section className="devices-section">
      <ProductSlider
        bgImg="/covers/pv1.png"
        img="/vapes/ve1.png"
        title="Devices"
        desc="Find the best for you here"
        products={devices?.productListBuyers}
      />

      <ProductSlider
        bgImg="/covers/pv2.png"
        img="/vapes/ve2.png"
        title="Pods"
        desc="Variety of choices available"
        products={pods?.productListBuyers}
      />

      <ProductSlider
        bgImg="/covers/pv3.png"
        img="/vapes/ve3.png"
        title="Disposable"
        desc="Easy, clean & superb flavor"
        products={disposables?.productListBuyers}
      />
    </section>
  )
}

DeviceSection.propTypes = {
  data: PropTypes.object,
}

export default DeviceSection
