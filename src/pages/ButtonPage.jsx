import Button1 from "../components/Button";
import AddIcon from '@mui/icons-material/Add';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function ButtonPage() {

    const handleClick = () => {
        
    }

    return (
        <div>
            <Button1 primary onClick={handleClick} className="mb-5">
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

export default ButtonPage;