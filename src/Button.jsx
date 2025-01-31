import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import './main.css'
function Button1({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
    }){
    
    return(
        <div>
            <p className='px-6 bg-black italic shadow-2xs border-red-950 rounded-xs'>hello</p>
            {/* <Button className='!px-3 py'>{children}</Button> */}
            <button className='px-3 py-1.5 border border-blue-500 bg-blue-600 text-white'>{children}</button>
        </div>
    )
}
     
    Button1.propTypes = {
        checkVariationValue: ({primary,secondary,success,warning,danger}) => {
            const count = Number(!!primary) 
            + Number(!!secondary) 
            + Number(!!warning) 
            + Number(!!success)
            + Number(!!danger)

            if (count > 1) {
                return new Error("only one of the variations can be true")
            }
        },
    }


export default Button1