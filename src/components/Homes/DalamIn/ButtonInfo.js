import React from 'react'
import Satu from '../Dalam/img/1.jpg'
import Tiga from '../Dalam/img/2.jpg'
import Dua from '../Dalam/img/3.jpg'
import './ButtonInfo.css'

function ButtonInfo({Imgs, Ket, isSelected, setIsSelected}){
	return(
	<div className="atas">
		<div className="img-atas">
		{
		Imgs.map((nama, index)=>{
		return (<div className={isSelected == index ? "box-button-img2" : "box-button-img"} onClick={()=>setIsSelected(index)}><img src={nama} />
			<h1>{Ket}</h1>
			</div>
			)
		})
		}
		</div>
	</div>
)
}

export default ButtonInfo;
