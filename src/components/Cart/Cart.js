import React from 'react'
import cart from './../../img/cart.svg'
import './Cart.css'

export const Cart = () => {
	return (
		<div className="cart">
			<img src={cart} className="cart-logo"/>
		</div>
	)
}