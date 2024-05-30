import React from 'react'
import './wow.css'
import Satu from './img-cara/4.jpg'
import SatuCara from './img-cara/44.jpg'
import SatuCaraTiga from './img-cara/444.jpg'
import SatuCaraEmpat from './img-cara/4444.jpg'
function Comp4Info() {

	const toggleFullScreen = () =>{

		const element = document.querySelector(".container")
			const isFullScreen = document.fullscreenElement
			console.log(isFullScreen)
				if (isFullScreen) { 
document.exitFullscreen(); 
}else{
element.requestFullscreen()
}		
}

const Lol = () => {
  const element = document.querySelector('.container2')
  const isLol = document.fullscreenElement
	if(isLol) { document.exitFullscreen()
}else{element.requestFullscreen()
}
}
const Lol3 = () => {
	const element = document.querySelector('.container3')
	const isLol3 = document.fullscreenElement
	if (isLol3) {document.exitFullscreen()}
	else {element.requestFullscreen()}
}
const Lol4 = () => {
	const element = document.querySelector('.container4')
	const isLol4 = document.fullscreenElement
	if (isLol4) {document.exitFullscreen()}
	else {element.requestFullscreen()}
}
	return(
	<div>
<nav className="navbar">
    <a className="navbar-logo">MahjonG<span>-ways</span>.</a>

    <div classNavbar="navbar-nav">
      <a>Idn-Slot</a>
    </div>
  </nav>	

<section  className="about">
    <h2><span>Cara</span> Bermain</h2>
  </section>
<div className="cara-img"  >
	<img className="lol container" src={Satu} onClick={toggleFullScreen}/>
	<img className="lol container2" src={SatuCara} onClick={Lol}/>
	<img className="lol container3" src={SatuCaraTiga} onClick={Lol3}/>
	<img className="lol container4" src={SatuCaraEmpat} onClick={Lol4}/>
</div>
</div>
)
}

export default Comp4Info
