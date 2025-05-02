import useCounter from "../hooks/use-counter";
import Button1 from "../components/Button";

function CounterPage( {initialCounter} ) {
    
    const {increment, counter} = useCounter(initialCounter);

    return (
        <div>
            {counter}
            <Button1 onClick={increment} primary >Increment</Button1>
        </div>
    )
}

export default CounterPage;