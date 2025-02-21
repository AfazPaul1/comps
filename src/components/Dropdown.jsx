import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dropdown({options}) {

    const menuItems = options.map((option, index) => {
        console.log(option);
        
        return <MenuItem key={index} value = {option.value}>{option.label}</MenuItem>
    })

    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Color"
            >
                {menuItems}
            </Select>
          </FormControl>
        </Box>
      );

}
export default Dropdown;


//console error
// MUI: You have provided an out-of-range value `undefined` for the select component.
// Consider providing a value that matches one of the available options or ''.
// The available values are `red`, `green`, `blue`. Error Component Stack
//     at SelectInput2 (@mui_material_Select.js?v=ed5cd5ad:3661:25)
// hook.js:608 Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components Error Component Stack
//     at input (<anonymous>)
   