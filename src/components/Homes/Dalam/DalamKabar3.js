import React from 'react'
import './Dalam.css'
import Satu from './img/1.jpg'
import Lima from './img/5.jpg'

const Lol = [Lima]
function DalamKabar3() {
	return(
	<div className="kabar3">
		<img src={Satu} />
			<div className="kabar2-dalam">
			<h1>jacpot gacor</h1>
			</div>
		<div>
		{
			Lol.map((image) => {
				return <img src={image} />
			})
		}
		</div>
	</div>
)
}

export default DalamKabar3
