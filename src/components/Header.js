import { useState } from 'react'
const Header = () => {
  const [buttonName, setButtonName] = useState('Login')
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-elements'>
          <div className='logo'>
            {/* <img src='./images/logo.png' alt='logo' /> */}
            <span>Logo</span>
          </div>
          <div className='navigations'>
            <nav className='nav-links'>
              <ul className='nav-items'>
                <li className='nav-item'>home</li>
                <li className='nav-item'>About Us</li>
                <li className='nav-item'>Services</li>
                <li className='nav-item'>Locations</li>
                <li className='nav-item'>Top Seller</li>
              </ul>
            </nav>
            <div className='cart'>
              <span>Cart</span>
            </div>
            <div className='cta '>
              <a href='#'>Contact Us</a>
            </div>
            <div
              className='cart login'
              onClick={() => {
                buttonName === 'Login'
                  ? setButtonName('Logout')
                  : setButtonName('Login')
              }}
            >
              {buttonName}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
