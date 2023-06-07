import ViewmoreBtn from '../components/ViewmoreBtn'
import './styles/newreleasedsection.css'
import { flavorData } from '../product'

const FlavorCard = ({ title, img }) => {
  return (
    <div
      className="flavor-card"
      style={{
        background: `url(${img})`,
      }}
    >
      <h4>{title}</h4>
      <p>30,000 MMK</p>
    </div>
  )
}

const NewReleasedSection = () => {
  return (
    <section className="new-section">
      <h2 className="section-title">
        <span>New</span> Released
      </h2>
      <p className="section-desc">Try Our Latest Flavors Here</p>
      <div className="new-flavor-section"></div>
      <ViewmoreBtn />
    </section>
  )
}

export default NewReleasedSection
