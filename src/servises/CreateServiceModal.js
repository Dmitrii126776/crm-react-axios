import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function CreateServiceModal(props) {
    const {createNewService} = props
    const [modal, setModal] = useState(false);
    const [job, setJob] = useState('')
    const [price, setPrice] = useState('')
    const [primeCost, setPrimeCost] = useState('')
    const [employee, setEmployee] = useState('')

    const addNewService = () => {
        const newService = {
            job, price, primeCost, employee
        }
        createNewService(newService)
        toggle()
    }

    const toggle = () => {
        setModal(!modal);
        setJob('')
        setPrice('')
        setPrimeCost('')
        setEmployee('')
    }

    return (
        <div>
            <Button color="secondary" onClick={toggle}>
                Add new service
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create New Service</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name of service</span>
                        <input value={job} onChange={e => setJob(e.target.value)}
                               type="text" className="form-control" placeholder="new service ..."
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Price</span>
                        <input value={price} onChange={e => setPrice(e.target.value)}
                               type="number" className="form-control" placeholder="price ..."
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Prime cost</span>
                        <input value={primeCost} onChange={e => setPrimeCost(e.target.value)}
                               type="number" className="form-control" placeholder="prime cost ..."
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Employee</span>
                        <input value={employee} onChange={e => setEmployee(e.target.value)}
                               type="text" className="form-control" placeholder="employee ..."
                               aria-describedby="basic-addon1"/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button disabled={job === '' || price === '' || primeCost === '' || employee === ''}
                            color="primary" onClick={addNewService}>
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

export default CreateServiceModal;
