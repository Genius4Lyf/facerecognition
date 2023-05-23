import React from "react";

function Rank  ({name, entries}) {
        // TASK:
        //TOGGLE THE RANK NUMBER TO CHANGE FROM RED TO GREEN
        // IF ZERO... RANK NUMBER SHOULD BE RED
        // IF GREATER THAN ZERO RANK NUMBER SHOULD BE GREEN 

        // name and entries are passed down to SignIn Component after hte LoadUser function
        // updates the state values either from signing in or from Registering
    if(entries > 0){
        return (
            <div className="txt-font">
                <div className="f2">
                    {`${name}, your current rank is...`}
                </div>
                <div className="f1 text-green-500">
                    {`${entries}`}
                </div>
            </div>
        )
    } else {
        return (
            <div className="txt-font">
                <div className="f2">
                    {`${name}, your current rank is...`}
                </div>
                <div className="f1 text-red-500">
                    {`${entries}`}
                </div>
            </div>
        )
    }
};

export default Rank;