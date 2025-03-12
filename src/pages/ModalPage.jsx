import Modal from "../components/Modal"
import Button from '../components/Button'
import { useState } from "react"

function ModalPage() {

    const [showModal, setShowModal] = useState(false)
    const handleClick = (event) => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <div>
            
            <Button onClick={handleClick} primary rounded>Open Modal</Button>
            {showModal && <Modal onClose={handleClose}/>}
            
        </div>
    )
}

export default ModalPage