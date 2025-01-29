import React from 'react';
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
        return null
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Like</button>
            <button onClick={handleDecrement}>Dislike</button>
        </div>
    );
};
        



export default Counter;