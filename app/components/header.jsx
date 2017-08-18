import React from 'react'
import { Link } from 'react-router-dom';

  
const Header = () => (
  <div>
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">NYT-React</Link>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Search</Link></li>
            <li><Link to="/saved">Saved Articles</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="jumbotron jumbotron-fluid">
      <h1 className="display-3 text-center">(ReactJS) New York Times Article Scraper</h1>
      <h3 className='text-center'>Search and save your favorite articles!</h3>
    </div>

  </div>
)

export default Header; 