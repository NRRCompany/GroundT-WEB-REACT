import React from 'react';
import { Link } from 'react-router-dom';

const SideNavigation = () => {
  return (
    <div className="sideNavigation">
      <div>
        <ul>
          <li>
            <Link to="/menu1">menu1</Link>
          </li>
          <li>
            <Link to="/menu2">menu2</Link>
          </li>
          <li>
            <Link to="/menu3">menu3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
