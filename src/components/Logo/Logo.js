import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brainLogo from './brain.png'

function Logo () {
    return (
        <div className="ma4 mt0">
            <Tilt className='br2 shadow-2 tilt' style={{ height: 70, width: 70}}>
                <div>
                    <img style={{padding: '5px'}} src={brainLogo} alt='logo' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;