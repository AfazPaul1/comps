import Modal from "../components/Modal"
import Button from '../components/Button'
import { useState } from "react"

function ModalPage() {

    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <Button onClick={handleClose} primary rounded>I accept</Button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
                    <p>Something important for you to accept</p>
                  </Modal>

    return (
        <div>
            
            <Button onClick={handleClick} primary rounded>Open Modal</Button>
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris nunc, accumsan nec neque vitae, volutpat scelerisque nunc. Pellentesque non risus turpis. Aenean mattis nulla at lobortis feugiat. Aenean consequat iaculis justo, tincidunt aliquam nunc faucibus quis. Curabitur bibendum risus sit amet erat varius egestas. Cras sit amet sodales leo. Duis ex dui, tristique eu condimentum quis, sodales in orci.

            Morbi porta a ante quis hendrerit. Etiam porta felis velit, vitae tincidunt dui condimentum id. Fusce quam enim, consequat nec dictum vel, varius at tortor. Mauris laoreet velit in pretium maximus. Nunc dictum feugiat lorem at imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sit amet imperdiet nunc, a laoreet nulla. Proin purus massa, laoreet eget est vel, faucibus finibus eros. Pellentesque pharetra lectus dolor. Duis ornare ex in porttitor tempus. Aliquam ut congue nisi. Duis in metus eget diam egestas luctus.

            Aliquam sit amet laoreet mi. Vestibulum accumsan tincidunt purus, nec facilisis ligula mollis non. Sed augue mauris, cursus quis felis ac, commodo ornare nisi. Sed maximus eleifend magna, vel ultrices dolor laoreet id. Integer id nisi at libero egestas fermentum. Proin blandit nisi in risus condimentum auctor. Nunc vel eros suscipit turpis mollis bibendum sit amet nec neque. Duis velit odio, accumsan vel ultrices in, feugiat ut elit. Integer consequat tempus odio sit amet elementum. Suspendisse vel lacus ut sem luctus semper et sed risus. Quisque et est nec nulla semper commodo. Duis cursus rhoncus ex, sed mattis neque pellentesque sit amet. Aenean imperdiet eros elit, id pharetra augue lacinia ut.

            Nulla urna lacus, euismod eu dictum eget, tempus et lorem. Vivamus luctus molestie lectus quis semper. Donec justo metus, auctor in cursus ut, lobortis at risus. Nulla facilisi. Integer tempor arcu nec purus euismod, non sollicitudin magna facilisis. Ut sit amet urna finibus, bibendum nibh nec, luctus metus. Vivamus vulputate a purus ut ultrices. Mauris non ornare magna.

            Donec arcu est, viverra sed placerat vel, cursus vitae ante. Fusce faucibus viverra neque eget porttitor. Maecenas finibus iaculis felis, eu ullamcorper turpis lobortis nec. Etiam consectetur leo a nisi aliquam aliquet. Cras porttitor libero risus, a hendrerit velit feugiat nec. Phasellus a ultricies nisl, vel rhoncus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris nunc, accumsan nec neque vitae, volutpat scelerisque nunc. Pellentesque non risus turpis. Aenean mattis nulla at lobortis feugiat. Aenean consequat iaculis justo, tincidunt aliquam nunc faucibus quis. Curabitur bibendum risus sit amet erat varius egestas. Cras sit amet sodales leo. Duis ex dui, tristique eu condimentum quis, sodales in orci.

            Morbi porta a ante quis hendrerit. Etiam porta felis velit, vitae tincidunt dui condimentum id. Fusce quam enim, consequat nec dictum vel, varius at tortor. Mauris laoreet velit in pretium maximus. Nunc dictum feugiat lorem at imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sit amet imperdiet nunc, a laoreet nulla. Proin purus massa, laoreet eget est vel, faucibus finibus eros. Pellentesque pharetra lectus dolor. Duis ornare ex in porttitor tempus. Aliquam ut congue nisi. Duis in metus eget diam egestas luctus.

            Aliquam sit amet laoreet mi. Vestibulum accumsan tincidunt purus, nec facilisis ligula mollis non. Sed augue mauris, cursus quis felis ac, commodo ornare nisi. Sed maximus eleifend magna, vel ultrices dolor laoreet id. Integer id nisi at libero egestas fermentum. Proin blandit nisi in risus condimentum auctor. Nunc vel eros suscipit turpis mollis bibendum sit amet nec neque. Duis velit odio, accumsan vel ultrices in, feugiat ut elit. Integer consequat tempus odio sit amet elementum. Suspendisse vel lacus ut sem luctus semper et sed risus. Quisque et est nec nulla semper commodo. Duis cursus rhoncus ex, sed mattis neque pellentesque sit amet. Aenean imperdiet eros elit, id pharetra augue lacinia ut.

            Nulla urna lacus, euismod eu dictum eget, tempus et lorem. Vivamus luctus molestie lectus quis semper. Donec justo metus, auctor in cursus ut, lobortis at risus. Nulla facilisi. Integer tempor arcu nec purus euismod, non sollicitudin magna facilisis. Ut sit amet urna finibus, bibendum nibh nec, luctus metus. Vivamus vulputate a purus ut ultrices. Mauris non ornare magna.

            Donec arcu est, viverra sed placerat vel, cursus vitae ante. Fusce faucibus viverra neque eget porttitor. Maecenas finibus iaculis felis, eu ullamcorper turpis lobortis nec. Etiam consectetur leo a nisi aliquam aliquet. Cras porttitor libero risus, a hendrerit velit feugiat nec. Phasellus a ultricies nisl, vel rhoncus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
             
        </div>
    )
}

export default ModalPage