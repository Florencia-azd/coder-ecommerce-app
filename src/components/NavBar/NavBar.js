import React from 'react'
import logo from './../../img/logo.svg'
import './NavBar.css'

export const Navbar = () => {

	return (
		<div className="navbar container">
			<div className="logo">
				<img src={logo}/>
			</div>
			<ul className="menu">
				<li><a href="#">Home</a></li>
				<li><a href="#">Categoría 1</a></li>
				<li><a href="#">Categoría 2</a></li>
				<li><a href="#">Categoría 3</a></li>
			</ul>
		</div>
	)
}