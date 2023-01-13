import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function DeleteClientModal(props) {
    const {modal, toggle, client, deleteClient} = props
    const removeClient = () => {
        deleteClient(client._id)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Removing Client: {client.name}</ModalHeader>
                <ModalBody>
                    Do you want to remove <strong>{client.name}</strong>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={removeClient}>
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

export default DeleteClientModal;
