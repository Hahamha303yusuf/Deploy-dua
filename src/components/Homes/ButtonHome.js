import React from 'react'
import './Home-Head.css'

function ButtonHome({Buttons, isSelected, setIsSelected}) {
	return(
<div className="Home-head">
	<div className="Home-head-container">
{
	Buttons.map((Nama, index)=>{
	return(
		<button className={isSelected == index ? "Home-button2" : "Home-button"} onClick={()=>setIsSelected(index)}>{Nama}</button>
	      )
	})
}
	</div>
</div>
)
}

export default ButtonHome;
