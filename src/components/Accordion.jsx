import PropTypes from "prop-types";
import { useState } from "react";



function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(0)

    const renderedList = items.map((item, index) => {

        const isExpanded = index === expandedIndex

        const content = isExpanded && <div>{item.content}</div>
            
        return (
                <div key={index}>
                    <div onClick={() => setExpandedIndex(index)}>{item.label}</div> 
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