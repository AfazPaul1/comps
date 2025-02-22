import { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {

    const [selected, setSelected] = useState("")

    const handleItemClick = (option) => {     
        setSelected(option)
        console.log(selected)
    }

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'},
    ]

    return (
        <Dropdown handleChange = {handleItemClick} selected={selected} options={options}></Dropdown>
    )
}

export default App;