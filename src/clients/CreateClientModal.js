import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {createTodayDate} from "../support";

function CreateClientModal(props) {
    const {createNewClient} = props
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const toggle = () => {
        setModal(!modal);
        setName('')
        setAddress('')
        setPhoneNumber('')
    }


    const addNewClient = () => {
        const newClient = {
            name,
            address, phoneNumber,
            createAt: createTodayDate()
        }
        createNewClient(newClient)
        toggle()
    }

    return (
        <div>
            <Button color="secondary" onClick={toggle}>
                Add new client
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create New Client</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Username</span>
                        <input value={name} onChange={e => setName(e.target.value)}
                               type="text" className="form-control" placeholder="username ..."
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Address</span>
                        <input value={address} onChange={e => setAddress(e.target.value)}
                               type="text" className="form-control" placeholder="address ..."
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Phone number</span>
                        <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                               type="text" className="form-control" placeholder="phone number ..."
                               aria-describedby="basic-addon1"/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" disabled={name === '' || address === '' || phoneNumber === ''}
                            onClick={addNewClient}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateClientModal;
