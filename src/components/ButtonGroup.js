import React from 'react'
import './head.css'

function ButtonGroup({Buttons, isSelected, setIsSelected}) {
	return(
	<div className="head">
	<i><p>chanel<span>yusuf</span></p></i>
	<div className="container-home">
	{
		Buttons.map((nama, index)=>{
		return <button className={isSelected == index ? "button2" : "button"} onClick={()=>setIsSelected(index)}>{nama}</button>
		})
	}
	</div>
	</div>
)
}

export default ButtonGroup;
