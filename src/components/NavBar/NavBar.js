import React from 'react'
import logo from './../../img/logo.svg'
import './NavBar.css'
import { Cart } from './../Cart/Cart'

export const Navbar = () => {

	return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					<img src={logo}/>
				</div>
				<ul className="menu">
					<li><a href="#">Home</a></li>
					<li><a href="#">Categoría 1</a></li>
					<li><a href="#">Categoría 2</a></li>
					<li><a href="#">Categoría 3</a></li>
				</ul>
				<Cart />
			</div>
		</div>
	)
}