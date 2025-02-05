import PropTypes from "prop-types";
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';



function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(0)

    const handleClick = (nextIndex) => setExpandedIndex(nextIndex)

    const renderedList = items.map((item, index) => {

        const isExpanded = index === expandedIndex

        const content = isExpanded && <div>{item.content}</div>

        const icon = <span>{isExpanded? <ArrowDropDownIcon /> : <ArrowRightIcon/>}</span>
            
        return (
                <div key={index}>
                    {icon}
                    <div onClick={() => handleClick(index)}>{item.label}</div> 
                    { content }
                </div> 
            ) 
    })

    return (
        <div>
            {renderedList}
        </div>
    )
    
    

    
}

Accordion.propTypes = {
    items: PropTypes.array,
}

export default Accordion;