import React, {useState, useEffect  } from 'react';
import Area from './Components/Area';

function App() {


    const [milage, setMilage] = useState(45350)
    const [newMilage, setNewMilage] = useState(0)
    const [mbco, setMbco] = useState( 10000)
    const [mbctb, setMbctb] = useState(60000)
    const [theme, setTheme] = useState('light')


    function manualMilageHandler(event) {
        event.preventDefault();
        setMilage(milage + newMilage);
        document.getElementById("milage_input").value = ''
    }

    function changeTheme() {
        document.body.classList.toggle('dark')
        theme === 'light' ? setTheme('dark') : setTheme('light')
        console.log('Changed')
        }



    useEffect( () => {
        setMbco(10000 - (milage % 10000))
        setMbctb(60000 - (milage % 60000))
    }, [milage])


    return (
        <div className={"container p-5"}>
            <h2>Current milage: {milage}</h2>
            <div className={"row py-2"}>
                <div className={"col-sm"}>
                    <form >
                    <label>
                        Enter daily distance manualy:
                    </label>
                    <input type={"text" } id={"milage_input"} onChange={ (event) => {setNewMilage(parseInt(event.target.value, 10))}} />
                    <input type={"button"} className={"btn btn-warning"} value={"Add"} onClick={ manualMilageHandler }/>
                    </form>
                </div>
                <div className={"col-sm"}>
                    <p>
                        Get milage from car IOT
                    </p>
                    <div >
                        <input type={"button"} className={"btn btn-success btn-block"} value={"Get"} id={"get_from_iot"}/>
                    </div>
                </div>
                <div className={"col-sm"}>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onChange={ changeTheme}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
                                Dark theme
                            </label>
                    </div>
                </div>
            </div>
            <p className={"text-center"}>Milage before:</p>
            <div className={"row py-2"}>
                <Area name="refueling" value={0}/>
                <Area name="change motor oil" value={mbco}/>
                <Area name="changing the timing belt" value={mbctb}/>
            </div>

        </div>
    )
    
}

export default App;
