import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/">
        <h1 className="ui header" style={{ fontFamily: 'Titillium Web' }}>
          <img
            src="http://t0.gstatic.com/images?q=tbn:ANd9GcTxRmfGmozn5szS7lnaBIceJ9sweiO45WBJmnsRzTdcjFAlLFQ4"
            alt="f1 logo"
          />
          Calendar for 2019 season
        </h1>
      </Link>
    </div>
  );
};

export default Header;
