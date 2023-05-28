import React from 'react'
import './Navbar.css'

function Navbar(props) {

	const pathName = props?.page;

	const changePage = (pathName) => {
		props.changePage(pathName);
	}

	return (

		<nav className="navbar">

        <ul className="navbar-list">

          <li className="navbar-item" >
            <button 
            className={pathName==='about' ? 'navbar-link active' : 'navbar-link'} data-nav-link onClick={() => changePage('about')}>
              About
            </button>
          </li>

          <li className="navbar-item">
          <button 
            className={pathName==='blog' ? 'navbar-link active' : 'navbar-link'} data-nav-link onClick={() => changePage('blog')}>
              Blog
            </button>
          </li>

        </ul>

      </nav>
	)
}

export default Navbar