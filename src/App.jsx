import './App.css'
import Navbar from './components/Navbar'
import BestDealSection from './sections/BestDealSection'
import DeviceSection from './sections/DeviceSection'
import FlavorSection from './sections/FlavorSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import NewReleasedSection from './sections/NewReleasedSection'

import useFetchImages from './hooks/hooks'

function App() {
  const { data: heroBanners, isFetching: heroLoading } = useFetchImages(
    'Miscellaneous/GetBannerList?bannerType=1'
  )
  const { data: adsBanner, isFetching: adsLoading } = useFetchImages(
    'Miscellaneous/GetBannerList?bannerType=2'
  )
  const { data: newArrivalBanners, isFetching: newArrivalLoading } =
    useFetchImages('Product/GetLandingProductLatest')

  const { data: promoBanners, isFetching: promoLoading } = useFetchImages(
    'Product/GetLandingProductPromotion'
  )
  const { data: productLists, isFetching: productListLoading } = useFetchImages(
    'Product/GetAllProductListBuyer'
  )

  if (
    heroLoading ||
    promoLoading ||
    adsLoading ||
    newArrivalLoading ||
    productListLoading
  ) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          color: '#333',
        }}
      >
        LOADING ....
      </div>
    )
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection data={heroBanners} />
        <BestDealSection data={promoBanners} />
        <NewReleasedSection data={newArrivalBanners} />
        <FlavorSection data={adsBanner} />
        <DeviceSection data={productLists} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
