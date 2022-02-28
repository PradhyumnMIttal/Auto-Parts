import React from 'react'
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
 import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header_logo"
          src="https://www.vhv.rs/dpng/d/212-2129174_car-png-download-auto-spare-parts-logo-transparent.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
      <div className="header_optionBasket">
        <ShoppingCartIcon />
        <span className="header_optionLineTwo header_basketCount"> 0</span>
      </div>
    </div>
  );
}

export default Header