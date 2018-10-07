
import React from "react";

const Avengers = props => {
    return (
        <div className="card">
            <h4>{props.Avenger.character}</h4>
            <p>{props.Avenger.description}</p>
        </div>
    )
}

export default Avengers;