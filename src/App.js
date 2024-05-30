import React, {useState} from 'react'
import ButtonGroup from './components/ButtonGroup'
import './App.css'
import Home from './components/Home'

const Buttons = ["Home", "Profile", "promo"]

const Lol = ({index}) => {
	switch (index) {
		case 0 : return <Home />
		break;
		default:
		break
}
} 

function App() {

const Lil = () => {
  const element = document.querySelector('.container')
  const isLol = document.fullscreenElement
	if(isLol){}
	else {element.requestFullscreen()}
}
const [isSelected, setIsSelected] = useState(0)
	return(
<div>
		<div>
			<ButtonGroup Buttons={Buttons} isSelected={isSelected} setIsSelected={setIsSelected} />
		</div>
	<div className="content">
		<div className="content-kiri">
		</div>
		<div className="content-kanan">
			<Lol index={isSelected} />
		</div>
	</div>
</div>
)
}

export default App;
