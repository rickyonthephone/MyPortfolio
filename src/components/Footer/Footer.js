import "./Footer.css"
import githubLogo from "../../images/githubLogo.png"
import linkedInLogo from "../../images/linkedInLogo.png"
import codepenLogo from "../../images/codepenLogo.png"

const Footer =() => {
    return (
        <div className='footerContainer'>
            <div className='section' id='github'>
                <a href='https://github.com/rickyonthephone'><img src= {githubLogo} alt='github' className='image-responsive' id='githubLogo' onClick='https://github.com/rickyonthephone' /></a>
            </div>
            <div className='section' id='linkedin'>
                <a href='https://www.linkedin.com/in/richardcrippen/'><img src= {linkedInLogo} alt='linkedin' className='image-responsive' id='githubLogo' onClick='https://www.linkedin.com/in/richard-crippen-2b134a2/' /></a>
            </div>
            <div className='section' id='codepen'>
                <a href='https://codepen.io/rickyonthephone'><img src= {codepenLogo} alt='codepen'className='image-responsive' id='githubLogo' onClick='https://codepen.io/rickyonthephone' /></a>
            </div>
        </div>
    )
}

export default Footer;