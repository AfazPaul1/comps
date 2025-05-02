import { useState, useEffect } from "react";
import Button1 from "../components/Button";

function CounterPage( {initialCounter} ) {
    const [counter, setCounter] = useState(initialCounter)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        console.log(counter);
    }, [counter])

    return (
        <div>
            {counter}
            <Button1 onClick={handleClick} primary >Increment</Button1>
        </div>
    )
}

export default CounterPage;