import React from "react";

function Area(props) {

    return <div className={ "col-sm" }>
        <h2>{props.name}</h2>
        <br />
        <p>{props.value}</p>
    </div>
}

export default Area;