// import { useState } from "react";
import Register from "../Register/Register";
import SignIn from "../Sign-In/SignIn";

function SignInRegisterDisplay ({ loadUser, onRouteChange, watch, handleClickWatch}) {
    if (watch) {
        return (
            <SignIn loadUser={loadUser} onRouteChange={onRouteChange} handleClickWatch={handleClickWatch}/>
        )
    } else {
        return (
            <Register loadUser={loadUser} onRouteChange={onRouteChange} handleClickWatch={handleClickWatch}/>
        )
    }

   
}

export default SignInRegisterDisplay;

// <div>
        //     { route = 'signin'
        //     ? <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
        //     : <Register loadUser={loadUser} onRouteChange={onRouteChange} />
        //     }
        // </div>