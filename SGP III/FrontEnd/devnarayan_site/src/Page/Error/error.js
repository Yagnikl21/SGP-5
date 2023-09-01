import React from 'react'
import { Link } from 'react-router-dom'

function error() {
    return (
        <div class="container">
            {/* <img class="ops" src="./assets/images/e430101033efff9a294eaafecbac846a.gif" /> */}
            <br />
                <h1>Page Not Found!!</h1>
            <br />
            <Link to="/"/>
        </div>
    )
}

export default error