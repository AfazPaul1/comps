import { useState, useEffect, useReducer } from "react";
import Button1 from "../components/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Panel from '../components/Panel'
import { produce } from "immer";

const INCREMENT_COUNT = 'incrementCount'
const DECREMENT_COUNT = 'decrementCount'
const SET_INCREMENT_BY = "changeIncrementBy"
const ADD_VALUE_TO_COUNT = "addValueToCount"


const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count+1
            return;
        case DECREMENT_COUNT:  
            state.count =  state.count-1     
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.incrementBy,
            state.incrementBy = 0
            return;
        case SET_INCREMENT_BY:
            state.incrementBy = action.payload
            return;
        default:
            throw new Error('unexpected action type:' + action.type)
    }
}

function CounterPage( {initialCount} ) {
    // const [count, setCounter] = useState(initialCounter)
    // const [incrementBy, setIncrementBy] = useState(0)

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        incrementBy:0
    })
    
    const handleChange = (event) => {  
        dispatch({
            type: SET_INCREMENT_BY,
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
            type: ADD_VALUE_TO_COUNT,
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