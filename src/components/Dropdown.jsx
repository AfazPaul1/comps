import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../main.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Panel from './Panel';

function Dropdown({options, onChange, value}) {

    const [isOpen, setIsOpen] = useState(false)

    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {

            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
               setIsOpen(false) 
            }
            
        }

        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler, true)
        }

    }, [])

    

    console.log(divEl.current);
    
 
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    window.timeTwo = performance.now()
    const handleItemClick = (option) => {
        // console.log(option);
        window.timeOne = performance.now()
        onChange(option)
        setIsOpen(false)
    }

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleItemClick(option)} key={option.value}>{option.label}</div>
    })

    return (
        <div ref={divEl} className='w-48 relative'>
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


