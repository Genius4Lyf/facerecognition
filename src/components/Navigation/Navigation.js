function Navigation ({onRouteChange, isSignedIn}) {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
               <button onClick={() =>onRouteChange('signout')} className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ma2 cursor">Sign Out</button> 
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
               <p onClick={() =>onRouteChange('signIn')} className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ma2 cursor">Sign In</p>
               <p onClick={() =>onRouteChange('register')} className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ma2 cursor">Register</p>
            </nav>
        )
    }
}

export default Navigation;