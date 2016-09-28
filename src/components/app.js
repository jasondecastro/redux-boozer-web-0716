import React from 'react';
import NavBar from './nav_bar';
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
        <NavBar title="Boozr" url="/" />
        <div className='container'>
        <Link to="/cocktails">See the Cocktails</Link>
          { props.children }
        </div>

      </div>
    )
};
