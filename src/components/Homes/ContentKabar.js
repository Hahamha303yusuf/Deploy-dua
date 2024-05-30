import React, {useState, useEffect} from 'react'
import './Content.css'
import DalamKabar1 from './Dalam/DalamKabar'
import DalamKabar2 from './Dalam/DalamKabar2'
import DalamKabar3 from './Dalam/DalamKabar3'


function ContentKabar() {

const [navbar, setNavbar] = useState(false)

const changeBackground = ()=> {
if (window.scrollY >= 200) {
setNavbar(true)
}else{
setNavbar(true)
}
}

	return(
<div className={navbar ? 'box-scroll box-scroll2' : 'box-scroll'} onScroll={changeBackground} >
	<div className="box1">
		<DalamKabar1 />
	</div>
	<div className="box1">
		<DalamKabar2 />
	</div>
	<div className="box2">
		<DalamKabar3 />
	</div>
</div>
)
}

export default ContentKabar;
