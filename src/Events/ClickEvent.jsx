import React from 'react';

import { useState } from 'react';

const ClickEvent = () =>{
    const[number,setNumber] = useState(0)
    const[message,setMessage] = useState('Hover or click to see the change in events')

    const increment = () =>{
        setNumber(number + 1)
    }

    const decrement = () =>{
        setNumber(number - 1)
    }
    
    const handleDoubleClick = () => setNumber(number+25);
    const handleMouseOver = () => setNumber(number+1);
    const handleMouseOut = () => setNumber(number-1);
    const handleMouseEnter = () => setNumber(number+3);
    const handleMouseLeave = () => setNumber(number-3);
    const handleMouseUp = () => setNumber(number+5);
    const handleMouseDown = () => setNumber(number-5);
    return <div>
        <h1>Hello I am ClickEvent</h1>
        <h1>
            {message}
            <br />
            {number}
        </h1>
        <button onClick={increment}>Increment</button>
        <button onDoubleClick={handleDoubleClick}>DoubleClick</button>
        <button onMouseOver={handleMouseOver}>Mouse Over</button>
        <button onMouseOut={handleMouseOut}>Mouse Out</button>
        <button onMouseEnter={handleMouseEnter}>Mouse Enter</button>
        <button onMouseLeave={handleMouseLeave}>Mouse Leave</button>
        <button onMouseUp={handleMouseUp}>Mouse Up</button>
        <button onMouseDown={handleMouseDown}>Mouse Down</button>

        <button onClick={decrement}>decrement</button>

    </div>
}

export default ClickEvent;