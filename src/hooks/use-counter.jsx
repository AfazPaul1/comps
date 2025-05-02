import { useState, useEffect } from "react";

function useCounter(initialCounter) {
    const [counter, setCounter] = useState(initialCounter)

    const increment = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        console.log(counter);
    }, [counter])

    return {increment, counter}
}

export default useCounter;