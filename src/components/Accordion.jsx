import PropTypes from "prop-types";

function Accordion({ items }) {

    const renderedList = items.map((item, index) => {
        console.log(index);
        
        return (
            <p key={index}>label: {item.label} content: {item.content}</p>
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