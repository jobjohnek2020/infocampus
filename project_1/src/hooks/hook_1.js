import { useState } from "react";

const HookOne = () => {
    //console.log(useState());
    let cities = ['pune', 'kochi'];
    const [x, y] = useState(100);
    /*
        x is state variable.
        y is state function.
        both are destructured from useState.

    */
    const [a, b] = cities;

    const [message, setMessage] = useState("");

    const one = () => {
        y(x + 1);
        setMessage('+ button is clicked');
    };

    const two = () => {
        y(x - 1);
        setMessage('- button is clicked');
    };

    

    return (
        <div className="container">
            <h1>How to use useState()</h1>
            <p>{x}</p>
            <p>{a}</p>
            <p>{b}</p>
            <button type="submit" onClick={one}>Click to + By 1</button>
            <button type="submit" onClick={two}>Click to - By 1</button>

            

            <p>{message}</p>
            
        </div>
    );
};

export default HookOne;