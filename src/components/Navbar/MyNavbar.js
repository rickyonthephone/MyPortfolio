import {Link} from "react-router-dom";
import './MyNavbar.css'


function MyNavbar(){

    return(
    <div className='navigation'>
        <div className="navigationBar">
            <ul> 
                <li className='navTab' id='aboutMe' >About Me</li>
                <li className='navTab' id='portfolio'>Portfolio</li>
                <li className='navTab' id='contact'>Contact</li>
                <li className='navTab' id='resume'>Resume</li>
            </ul>
        </div>
        
    </div>
    )
}

export default MyNavbar;