import React, {useContext} from "react";
import {ThemeContext} from "../App"

export default function ThemeToggler({toggle}) {

    const alert = useContext(ThemeContext)

    return(
    <div className={"col-sm"}>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onChange={toggle}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
                Dark theme
            </label>
        </div>
    </div>
    )
}