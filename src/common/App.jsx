import React, { useState } from 'react';


const App = () => {

    const [i, setCount] = useState(0); // Hooks

    const BtnOnClick = () => {
        setCount(i + 1);
        console.log('Click ' + i);
    };

    return (
        <>
            <div className="hooks">
                <h1>{i}</h1>
                <button onClick={BtnOnClick}>Click Me</button>
            </div>
        </>
    );
};


const TimeApp = () => {

    let time = new Date().toLocaleTimeString();

    const [newTime, setTime] = useState(time);

    const UpdateTime = () => {
        setTime(new Date().toLocaleTimeString());
    };

    return (
        <>
            <div className="hooks">
                <h1>{newTime}</h1>
                <button onClick={UpdateTime}> Get Time</button>
            </div>
        </>

    );
}


const RunningTime = () => {

    let time = new Date().toLocaleTimeString();

    const [newTime, setTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime(time);
    };

    setInterval(UpdateTime, 1000);

    return (
        <>
            <div className="hooks">
                <h1> {newTime} </h1>
            </div>
        </>
    );
};

export default App;

export { TimeApp, RunningTime };