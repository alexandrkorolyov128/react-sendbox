import React, {useContext, useState} from 'react'
import {InputMilageContext} from '../App'

function MilageInput() {
    const milage = useContext(InputMilageContext)

    //const [newMilage, setNewMilage] = useState(0)

    function manualMilageHandler(event) {
        event.preventDefault();
        //setMilage(milage + newMilage);
        document.getElementById("milage_input").value = ''
    }

    return
    <div>
    <form >
        <label>
            Enter daily distance manualy:
        </label>
        <input type={"text" } id={"milage_input"} value={milage} />
        <input type={"button"} className={"btn btn-warning"} value={"Add"} onClick={ manualMilageHandler }/>
    </form>
    </div>
}
export default MilageInput

//onChange={ (event) => {setNewMilage(parseInt(event.target.value, 10))}}