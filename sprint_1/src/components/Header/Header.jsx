import React from 'react';
import './Header.scss';
import Logo from '../../assets/logo/Logo-brainflix.svg';
import UserPhoto from '../../assets/images/Mohan-muruge.jpg'
import SearchIcon from '../../assets/icons/Icon-search.svg'

const Header = () => {
  return(
    <header className="header">
        <div className="header__section container">
          <div className="header__section-left">
            <img className="header__section-left-logo" src={Logo} alt='BrainFlix Logo'/>
          </div>
          <div className="header__section-right">
            <div className="header__section-right-search">
              <input className="header__section-right-search-field" type="search" placeholder="Search"/>
              <img className="header__section-right-search-icon" src={SearchIcon} alt="Search icon" aria-hidden="true"/>
            </div>
            <div className="header__section-right-user">
              <button className="header__section-right-user-upload">Upload</button>
              <div className="header__section-right-user-avatar">
                <img className="header__section-right-user-avatar-img" src={UserPhoto} alt='User'/>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header;