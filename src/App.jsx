import { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {

    const [selected, setSelected] = useState(null)

    const handleSelect = (option) => {     
        setSelected(option)
        console.log(selected)
    }

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'},
    ]

    return (
        <Dropdown onChange = {handleSelect} value={selected} options={options}></Dropdown>
    )
}

export default App;