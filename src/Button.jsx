import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

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
            <Button>{children}</Button>
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