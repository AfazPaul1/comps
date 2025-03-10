import Dropdown from "../components/Dropdown";
import { useState } from "react";
function DropdownPage() {
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
            <div>
                <Dropdown onChange = {handleSelect} value={selected} options={options}></Dropdown>
            </div>
            
        )
}

export default DropdownPage