import React, {useState} from 'react'
import './Home.css'
import ButtonHome from './Homes/ButtonHome'
import ContentKabar from './Homes/ContentKabar'
import ContentBerita from './Homes/ContenBerita'
import ContentInfo from './Homes/ContentInfo'
const Buttons = [
	"kabar", "berita", "info"
]

const RenderComponent = ({index})=>{
	switch (index) {
		case 0 : return <ContentKabar />
		break;
		case 1 : return <ContentBerita />
		break;
		case 2 : return <ContentInfo />
		default:
		break;
}
}

function Home() {
const [isSelected, setIsSelected] = useState(0)
	return(
	<div className="home">
		<ButtonHome Buttons={Buttons} isSelected={isSelected} setIsSelected={setIsSelected} />
		<RenderComponent index={isSelected}/>
	</div>
)
}

export default Home;
