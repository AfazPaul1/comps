import PropTypes from "prop-types";
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../main.css'


function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (nextIndex) => {
        console.log(expandedIndex);
        
        if(expandedIndex === nextIndex) {
            setExpandedIndex(-1)
        }
        else {
            setExpandedIndex(nextIndex)
        }
    }

    const renderedList = items.map((item, index) => {

        const isExpanded = index === expandedIndex

        const content = isExpanded && <div className="border-b p-3">{item.content}</div>

        const icon = <span>{isExpanded? <ArrowDropDownIcon /> : <ArrowRightIcon/>}</span>
            
        return (
                <div key={index}>
                    <div onClick={() => handleClick(index)} className="flex items-center bg-gray-50 border-b p-3">
                        {icon}
                        <div>{item.label}</div> 
                    </div>
                    <div >
                        { content }
                    </div>
                    
                </div> 
            ) 
    })

    return (
        <div className="border-x border-t rounded ">
            {renderedList}
        </div>
    )
    
    

    
}

Accordion.propTypes = {
    items: PropTypes.array,
}

export default Accordion;