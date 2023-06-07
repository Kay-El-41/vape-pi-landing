import ProductSlider from '../components/ProductSlider'
import './styles/devicesection.css'

const DeviceSection = () => {
  return (
    <section className="devices-section">
      <ProductSlider
        bgImg="/covers/pv1.png"
        img="/vapes/ve1.png"
        title="Devices"
        desc="Find the best for you here"
      />

      <ProductSlider
        bgImg="/covers/pv2.png"
        img="/vapes/ve2.png"
        title="Pods"
        desc="Variety of choices available"
      />

      <ProductSlider
        bgImg="/covers/pv3.png"
        img="/vapes/ve3.png"
        title="Disposable"
        desc="Easy, clean & superb flavor"
      />
    </section>
  )
}

export default DeviceSection
