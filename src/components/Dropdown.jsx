import { useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({options}) {

    const [isOpen, setIsOpen] = useState(true)


    const renderedOptions = isOpen && options.map((option) => {
        return <div key={option.value}>{option.label}</div>
    })



    return (
        <div>
            <div>Selected..</div> 
            <div>{renderedOptions}</div>
        </div>
    )

}


Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object)
}

export default Dropdown;


