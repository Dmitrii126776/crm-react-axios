import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function DeleteServiceModal(props) {
    const {modal, toggle, service, deleteService} = props

    const removeService = () => {
        deleteService(service._id)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Removing Service: {service.job}</ModalHeader>
                <ModalBody>
                    Do you want to remove service <strong>{service.job}?</strong>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={removeService}>
                        Remove
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteServiceModal;
