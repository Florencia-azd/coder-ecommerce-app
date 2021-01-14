import React from 'react'
import './Home.css'
import { ItemListContainer } from './../ItemListContainer/ItemListContainer'

export const Home = (props) => {
	return (
		<div className="home">
			<h1>{props.greeting}</h1>
			<ItemListContainer />
		</div>
	)
}