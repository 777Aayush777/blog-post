import React, { useState } from 'react';
import './Navbar.css';
import { menuItems } from './navData';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo-wrapper">
            <img 
              src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/6270fa6368d39cdf2366f5e7_logo-grey.svg" 
              alt="Nova Benefits" 
              className="logo-image"
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="nav-content">
          <div className="menu-items">
            {menuItems.map((menu) => (
              <div key={menu.title} className="menu-item">
                <button
                  className="menu-trigger"
                  onClick={() => setActiveMenu(activeMenu === menu.title ? null : menu.title)}
                >
                  {menu.title}
                </button>
                
                {activeMenu === menu.title && (
                  <div className="dropdown-menu">
                    {menu.items.map((item) => (
                      <button
                        key={item}
                        className="dropdown-item"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="sign-in-button">
              Sign in →
            </button>
            <button className="contact-button">
              Get in touch →
            </button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;