import React, {useState} from 'react'
import './Content.css'
import ButtonInfo from './DalamIn/ButtonInfo'
import Satu from './img-slot/satu.jpg'
import Dua from './img-slot/dua.jpg'
import Tiga from './img-slot/tiga.jpg'
import Empat from './img-slot/empat.jpg'
import Lima from './img-slot/lima.jpg'
import Comp1Info from './DalamIn/Comp1Info'
import Comp2Info from './DalamIn/Comp2Info'
import Comp3Info from './DalamIn/Comp3Info'
import Comp4Info from './DalamIn/Comp4Info'
import Comp5Info from './DalamIn/Comp5Info'
const Ket = ["Info"]
const Imgs = [Satu, Dua, Tiga, Empat, Lima]

const RenderComponent = ({index})=> {
	switch(index){
	case 0 : return <Comp1Info /> 
	case 1 : return <Comp2Info /> 
	case 2 : return <Comp3Info /> 
	case 3 : return <Comp4Info /> 
	case 4 : return <Comp5Info /> 
	break;
	default:
	break;
}
}

function ContentInfo() {
const [isSelected, setIsSelected] = useState(2)
        return(
<div className="box-scroll">
        <div className="box1-info">
		<ButtonInfo Imgs={Imgs} Ket={Ket} isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
        <div className="box3">
		<RenderComponent index={isSelected} />
        </div>
</div>
)
}

export default ContentInfo;
