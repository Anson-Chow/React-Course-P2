import React from 'react';

const Counter = () => {

    const [counter, setCounter] = React.useState(0)

    return (
        <div>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            {counter}
            <button onClick={() => {setCounter((prevCounter) => prevCounter - 1)}}>-</button>
        </div>
    );
}

export default Counter;
