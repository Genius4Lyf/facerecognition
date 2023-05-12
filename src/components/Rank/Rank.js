import React from "react";

class Rank extends React.Component {
    render() {
        // name and entries are passed down to SignIn Component after hte LoadUser function
        // updates the state values either from signing in or from Registering
        const {name, entries} = this.props;
        return (
            <div>
                <div className="f2 white">
                    {`${name}, your current rank is...`}
                </div>
                <div className="f1 white">
                    {`${entries}`}
                </div>
            </div>
        )
    }
};

export default Rank;