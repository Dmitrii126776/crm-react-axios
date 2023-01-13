import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function UpdateServiceModal(props) {
    const {modal, toggle, service, updateExistService} = props

    const [job, setJob] = useState(service.job)
    const [price, setPrice] = useState(service.price)
    const [primeCost, setPrimeCost] = useState(service.primeCost)
    const [employee, setEmployee] = useState(service.employee)

    const saveUpdatedService = () => {
        const updatedService = {
            job, price, primeCost, employee
        }
        updateExistService(service._id, updatedService)
        toggle()
    }

    const cancelUpdatedService = () => {
        toggle()
        setJob(service.job)
        setPrice(service.price)
        setPrimeCost(service.primeCost)
        setEmployee(service.employee)
    }


    return (
        <div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Service Information</ModalHeader>
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
                    <Button color="primary" onClick={saveUpdatedService}>
                        Update
                    </Button>{' '}
                    <Button color="secondary" onClick={cancelUpdatedService}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default UpdateServiceModal;
