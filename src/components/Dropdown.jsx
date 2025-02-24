import { useState } from 'react';
import PropTypes from 'prop-types';
import '../main.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Dropdown({options, onChange, value}) {

    const [isOpen, setIsOpen] = useState(false)
 
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleItemClick = (option) => {
        // console.log(option);
        onChange(option)
        setIsOpen(false)
    }

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleItemClick(option)} key={option.value}>{option.label}</div>
    })

    return (
        <div className='w-48 relative'>
            <div 
                className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-ful' 
                onClick = {handleClick}
            >
                {value?.label || "Select.."}
                <ExpandMoreIcon />
            </div> 
            { isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
        </div>
    )

}


Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object)
}

export default Dropdown;


