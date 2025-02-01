import Button1 from "./Button";
import AddIcon from '@mui/icons-material/Add';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function App() {

    

    return (
        <div>
            <Button1 primary>
                <AddIcon></AddIcon>
                click me
                </Button1>
            <Button1 secondary>
                <AccessTimeFilledIcon></AccessTimeFilledIcon>
                Buy now
                </Button1>
            <Button1 success>
            <AddCircleOutlineIcon></AddCircleOutlineIcon>
                see deals
                </Button1>
            <Button1 warning outline>hide ads</Button1>
            <Button1 danger rounded>something</Button1>
        </div>
    )
}

export default App;