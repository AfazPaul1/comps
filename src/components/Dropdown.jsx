import { useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({options, handleChange, selected}) {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleItemClick = (option) => {
        // console.log(option);
        handleChange(option)
        setIsOpen(false)
    }

    const renderedOptions = isOpen && options.map((option) => {
        return <div onClick={() => handleItemClick(option.value)} key={option.value}>{option.label}</div>
    })

    return (
        <div>
            <div onClick = {handleClick}>{selected? selected : "Selected.."}</div> 
            <div>{renderedOptions}</div>
        </div>
    )

}


Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object)
}

export default Dropdown;


