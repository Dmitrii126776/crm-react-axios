import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormGroup} from 'reactstrap';
import {createTodayDate} from "../support";

function CreateOrderModal(props) {
    const {services, clients, orders, createNewOrder} = props
    const servicesList = services.map(el => el.job)
    const clientsList = clients.map(el => el.name)
    const [selectedService, setSelectedService] = useState(servicesList[0]);
    const [selectedClient, setSelectedClient] = useState(clientsList[0])
    const [selectedPrice, setSelectedPrice] = useState('')
    const [selectedPrepaid, setSelectedPrepaid] = useState('')

    const [employeeJob, setEmployeeJob] = useState('')
    const [priceJob, setPriceJob] = useState('')
    const [primeCostJob, setPrimeCostJob] = useState('')

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
        setSelectedService(servicesList[0])
        setSelectedClient(clientsList[0])
        setSelectedPrice('')
        setSelectedPrepaid('')
    };
    const handleChangeService = (event) => {
        setSelectedService(event.target.value)
        const service = event.target.value
        const select = services.find(el => el.job === service)
        setSelectedPrice(select.price)
        setEmployeeJob(select.employee)
        setPriceJob(select.price)
        setPrimeCostJob(select.primeCost)
    }
    const createOrder = () => {
        const debt = priceJob - +selectedPrepaid
        if (debt <= 0) {

        }

        const newOrder = {
            service: {
                job: selectedService,
                employee: employeeJob,
                price: priceJob,
                primeCost: primeCostJob,
                createAt: createTodayDate()
            },
            sentToDo: {date: '', status: false},
            completed: {date: '', status: false},
            sayToClient: {date: '', status: false},
            clientReceived: {date: '', status: false},
            paid: {
                payment: +selectedPrepaid,
                debt: priceJob - +selectedPrepaid,
                primeCost: primeCostJob,
                date: (priceJob - +selectedPrepaid) <= 0 ? createTodayDate() : '',
                status: (priceJob - +selectedPrepaid) <= 0,
            },
            orderNumber: orders.length + 1,
            clientName: selectedClient,
        }
        createNewOrder(newOrder)
        toggle()
    }

    return (
        <div>
            <Button color="secondary" onClick={toggle}>
                Create new order
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create New Order</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Clients:</span>
                            <Input value={selectedClient} onChange={e => setSelectedClient(e.target.value)}
                                   id="exampleSelect" name="select" type="select">
                                {clientsList.map((el, i) => (<option key={i}>{el}</option>))}
                            </Input>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Services:</span>
                            <Input value={selectedService} onChange={handleChangeService}
                                   id="exampleSelect" name="select" type="select">
                                {servicesList.map((el, i) => (<option key={i}>{el}</option>))}
                            </Input>
                        </div>
                    </FormGroup>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Price:</span>
                        <input value={selectedPrice} onChange={e => setSelectedPrice(e.target.value)}
                               type="text" className="form-control" placeholder="price of service ..."
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Prepaid:</span>
                        <input value={selectedPrepaid} onChange={e => setSelectedPrepaid(e.target.value)}
                               type="number" className="form-control" placeholder="prepaid ..."
                               aria-describedby="basic-addon1"/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={createOrder}>
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

export default CreateOrderModal;
