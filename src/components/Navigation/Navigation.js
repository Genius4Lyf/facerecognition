import brainLogo3 from './brainLogo3.png';
import './Nav.css'

function Navigation ({onRouteChange, isSignedIn, handleClickWatch}) {
    if (isSignedIn) {
        return (
            <nav className='nav-m nav-bg shadow-2xl' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center' }}>
                <span className='font-semibold nav-h1-font' style={{ marginLeft: '10px'}}>SMARTBRAIN</span>
                <img style={{ height: 50, width: 50 }} src={brainLogo3} alt='logo' />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className='btn-home'>
                        <button onClick={() => onRouteChange('homepage')} className=" text font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ma2 cursor button-font-2">
                            Home
                        </button>
                    </div>
                    <div className='btn-out'>
                        <button onClick={() => onRouteChange('signout')} className="btn-out text font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ma2 cursor button-font-2 ">
                            Sign Out
                        </button>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (

            <nav className='nav-ms nav-bg shadow-2xl rounded-full' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center' }}>
                <span className='font-semibold' style={{ marginLeft: '10px'}}>SMARTBRAIN</span>
                <img style={{ height: 50, width: 50 }} src={brainLogo3} alt='logo' />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() =>handleClickWatch(true)} className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ma2 cursor">
                    Sign In
                </button>
                <button onClick={() =>handleClickWatch(false)} className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ma2 cursor">
                    Register
                </button>
                </div>
            </nav>
            // <nav style={{display: 'flex', justifyContent: 'center'}}>
            //    <p onClick={() =>handleClickWatch(true)} className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ma2 cursor">
            //         Sign In
            //     </p>
            //    <p onClick={() =>handleClickWatch(false)} className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ma2 cursor">
            //         Register
            //     </p>
            // </nav>
        )
    }
}

export default Navigation;