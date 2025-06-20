import { useState } from 'react'

const HooksUseState = () => {
    console.log('render HooksUseState');
    const [counter, setCounter] = useState(1);
    const handleIncrease = () => {
        setCounter(counter + 1);
    }
    return (
        <article className="wrapper">
            <h2>{counter}</h2>
            <button className="reset" onClick={handleIncrease}>Increase</button>
        </article>
    );
};

export default HooksUseState;