import { useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({options}) {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        //we learnt that if the new state is dependent on the old state we use a updater function
        //but since it is only required is a user click at a very rapid pace it is ususally not required
        //setIsOpen((currentIsOpen) => !currentIsOpen)
        setIsOpen(!isOpen)
    }


    const renderedOptions = isOpen && options.map((option) => {
        return <div key={option.value}>{option.label}</div>
    })



    return (
        <div>
            <div onClick = {handleClick}>Selected..</div> 
            <div>{renderedOptions}</div>
        </div>
    )

}


Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object)
}

export default Dropdown;


