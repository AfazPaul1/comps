import { useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({options, handleSelect, selected}) {

    const [isOpen, setIsOpen] = useState(false)
 
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleItemClick = (option) => {
        // console.log(option);
        handleSelect(option)
        setIsOpen(false)
    }

    const renderedOptions = isOpen && options.map((option) => {
        return <div onClick={() => handleItemClick(option)} key={option.value}>{option.label}</div>
    })

    return (
        <div>
            <div onClick = {handleClick}>{selected?.label || "Select.."}</div> 
            <div>{renderedOptions}</div>
        </div>
    )

}


Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object)
}

export default Dropdown;


