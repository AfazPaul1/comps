import PropTypes from "prop-types";
import { useState } from "react";



function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(0)

    const renderedList = items.map((item, index) => {

        const contentRender = (item) => {
            if (index == expandedIndex) {
            return <div>{item.content}</div>   
            }
        }
            
        return (
                <div key={index}>
                    <div>{item.label}</div>
                    {contentRender(item)}
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