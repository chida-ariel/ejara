import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top-footer">
        <img src="/assets/img/logo.svg" alt="" />
        <div className="resource">
          <h3>Resource</h3>
          <div className="list">
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Blog Post</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Data Protection</p>
          </div>
        </div>
        <div className="products">
          <h3>Products</h3>
          <div className="list">
            <p>Ejara Wallet</p>
            <p>Savings box</p>
            <p>Project savings</p>
            <p>Invest</p>
            <p>Ejara For Business</p>
          </div>
        </div>
        <div className='footer-downloads'>
          <img src="/assets/img/play-store.png" alt="" />
          <img src="/assets/img/app-store.png" alt="" />
        </div>
      </div>
      <div className="bottom-footer">
        <p>Copyright &copy; 2025 EJARA</p>
      </div>
      
    </div>
  )
}

export default Footer;
