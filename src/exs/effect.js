import logo from './logo.svg';
import React, {useState, useEffect  } from 'react';
import './App.css';

function App() {

    const [type, setType] = useState('users')
    const [pos, setPos] = useState({
        x:0, y:0
    })

    const mouseMoveHandler = event => {
        setPos( {
                x: event.clientX,
                y: event.clientY
            }

        )
    }
    useEffect( () => {
        console.log('ComponentDdMount')

        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    },[])


    return (
        <div>
            <h1>Source: {type}</h1>

            <button onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>Posts</button>
            <pre>{JSON.stringify(pos, null, 2)}</pre>

        </div>
    );
}

export default App;
