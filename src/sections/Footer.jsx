import { GrPowerReset, GrLocation } from 'react-icons/gr'
import { MdOutlinePolicy } from 'react-icons/md'
import { TbPhone } from 'react-icons/tb'
import './styles/footer.css'

const Footer = () => {
  const langOnChange = (e) => {
    console.log('Language changed to ' + e.target.value)
  }

  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-customers">
          <h5 className="footer-title">Customer Service</h5>
          <ul>
            <li>
              <MdOutlinePolicy />
              &nbsp;Terms & Privacy Policy
            </li>
            <li>
              <GrPowerReset />
              &nbsp;Return Policy
            </li>
          </ul>
        </div>

        <div className="footer-payment">
          <h5 className="footer-title">Payment</h5>
          <img src="/footer/kbzpay.png" alt="" />
          <img src="/footer/wavepay.png" alt="" />
        </div>

        <div className="footer-language">
          <h5 className="footer-title">Language</h5>
          <form action="">
            <label htmlFor="mmuni">
              <input
                type="radio"
                name="lang"
                id="mmuni"
                value="mm-unicode"
                onChange={langOnChange}
              />
              Myanmar (Unicode)
            </label>
            <label htmlFor="mmzaw">
              <input
                type="radio"
                name="lang"
                id="mmzaw"
                value="mm-zawgyi"
                onChange={langOnChange}
              />
              Myanmar (Zawgyi)
            </label>
            <label htmlFor="en">
              <input
                type="radio"
                name="lang"
                id="en"
                defaultChecked
                value="english"
                onChange={langOnChange}
              />
              English
            </label>
          </form>
        </div>

        <div className="footer-follow">
          <h5 className="footer-title">Follow Us On</h5>
          <img src="/footer/social1.png" alt="" />
          <img src="/footer/social2.png" alt="" />
          <img src="/footer/social3.png" alt="" />
          <img src="/footer/social4.png" alt="" />
          <img src="/footer/social5.png" alt="" />
        </div>

        <div className="footer-contact">
          <h5 className="footer-title">Contact Us</h5>
          <ul>
            <li className="address">
              <div className="address-icon">
                <GrLocation />
              </div>
              &nbsp;Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana,
              Thingangyun Tsp, Yangon
            </li>
            <li>
              <TbPhone />
              &nbsp;09458489458
            </li>
          </ul>
        </div>

        <div className="footer-download">
          <h5 className="footer-title">Download Our App</h5>
          <img src="/footer/qrcode.png" alt="" />
        </div>

        <div className="footer-copyright">
          @ Copyright 2023 C by D Co.,Ltd. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
