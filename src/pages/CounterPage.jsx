import { useState, useEffect, useReducer } from "react";
import Button1 from "../components/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Panel from '../components/Panel'

const INCREMENT_COUNT = 'incrementCount'
const DECREMENT_COUNT = 'decrementCount'
const CHANGE_INCREMENT_BY = "changeIncrementBy"


const reducer = (state, action) => {

    if(action.type === INCREMENT_COUNT)
    return {
        ...state,
        count: state.count+1
    }
    if(action.type === DECREMENT_COUNT)
        return {
            ...state,
            count: state.count-1
        }
        if(action.type === CHANGE_INCREMENT_BY)
            return {
                ...state,
                count: state.count + state.incrementBy,
                incrementBy: action.payload
            }
    return state;
}

function CounterPage( {initialCount} ) {
    // const [count, setCounter] = useState(initialCounter)
    // const [incrementBy, setIncrementBy] = useState(0)

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        incrementBy:0
    })
    const handleChange = (event) => {  
        dispatch({
            type: CHANGE_INCREMENT_BY,
            payload: Number(event.target.value)
        })
        // setIncrementBy(Number(event.target.value))
    }

    const increment = () => {
        // setCounter(count + 1)
        dispatch({
            type: INCREMENT_COUNT
        })
    }
    const decrement = () => {
        // setCounter(count - 1)
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const add = (event) => {
        event.preventDefault()
        dispatch({
            type: CHANGE_INCREMENT_BY,
            payload: 0
        })
        // setCounter(count + incrementBy)
        // setIncrementBy(0)
    }

    useEffect(() => {
        console.log(state.count);
    }, [state.count])

    return (
        <div>
            {state.count}
            <Button1 onClick={increment} primary >Increment</Button1>
            <Button1 onClick={decrement} primary >Deccrement</Button1>
            <Box onSubmit={add} sx = {{display: 'flex', alignItems:'center', gap:'2', }}          component="form">
                <TextField onChange={handleChange}  sx={{m:1}} id="outlined-number" label="Add a lot" variant="outlined" type="number" value={state.incrementBy || ""} />
                <Button  sx={{m:1}} variant="outlined" type="submit">ADD</Button>
            </Box>
        </div>
    )
}

export default CounterPage;