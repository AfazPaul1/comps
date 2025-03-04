import { useState } from 'react';
import PropTypes from 'prop-types';
import '../main.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Panel from './Panel';

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
            <Panel 
                className='flex justify-between items-center cursor-pointer' 
                onClick = {handleClick}
            >
                {value?.label || "Select.."}
                <ExpandMoreIcon />
            </Panel> 
            { isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    )

}


Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object)
}

export default Dropdown;


