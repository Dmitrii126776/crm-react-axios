import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function UpdateClientModal(props) {
    const {toggle, modal, client, updateClientInfo} = props

    const [name, setName] = useState(client.name)
    const [address, setAddress] = useState(client.address)
    const [phoneNumber, setPhoneNumber] = useState(client.phoneNumber)

    const saveUpdatedInfo = () => {
        const updatedClient = {
            name, address, phoneNumber
        }
        updateClientInfo(client._id, updatedClient)
        toggle()
    }
    const cancelUpdate = () => {
        toggle()
        setName(client.name)
        setAddress(client.address)
        setPhoneNumber(client.phoneNumber)
    }


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Client Information</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                        <input value={name} onChange={e => setName(e.target.value)}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Address</span>
                        <input value={address} onChange={e => setAddress(e.target.value)}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Phone number</span>
                        <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveUpdatedInfo}>
                        Update
                    </Button>{' '}
                    <Button color="secondary" onClick={cancelUpdate}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UpdateClientModal;
