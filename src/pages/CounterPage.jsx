import { useState, useEffect } from "react";
import Button1 from "../components/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Panel from '../components/Panel'
function CounterPage( {initialCounter} ) {
    const [count, setCounter] = useState(initialCounter)
    const [incrementBy, setIncrementBy] = useState()

    const handleChange = (event) => {
        console.log(typeof(event.target.value));
        
        setIncrementBy(Number(event.target.value))
    }

    const increment = () => {
        setCounter(count + 1)
    }
    const decrement = () => {
        setCounter(count - 1)
    }

    const add = () => {
        setCounter(count + incrementBy)
    }

    useEffect(() => {
        console.log(count);
    }, [count])

    return (
        <div>
            {count}
            <Button1 onClick={increment} primary >Increment</Button1>
            <Button1 onClick={decrement} primary >Deccrement</Button1>
            <Box sx = {{display: 'flex', alignItems:'center', gap:'2', }}          component="form">
                <TextField onChange={handleChange}  sx={{m:1}} id="outlined-number" label="Add a lot" variant="outlined" type="number" value={incrementBy} />
                <Button onClick={add}  sx={{m:1}} variant="outlined">ADD</Button>
            </Box>
        </div>
    )
}

export default CounterPage;