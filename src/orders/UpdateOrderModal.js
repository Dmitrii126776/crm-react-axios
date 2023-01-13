import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label} from 'reactstrap';
import {createTodayDate} from "../support";

function UpdateOrderModal(props) {
    const {modal, order, toggle, updateExistOrder} = props
    const client = 'Client Name:   ' + order.clientName
    const service = 'Service:   ' + order.service.job
    const price = 'Price:   $' + order.service.price
    const debit = 'Debit:   $' + order.paid.debt

    const [newPayment, setNewPayment] = useState('')
    const [checkedInProgress, setCheckedInProgress] = useState(order.sentToDo.status)
    const [dateInProgress, setDateInProgress] = useState(order.sentToDo.date)
    const [checkedJobCompleted, setCheckedJobCompleted] = useState(order.completed.status)
    const [dateJobCompleted, setDateJobCompleted] = useState(order.completed.date)
    const [checkedSayToClient, setCheckedSayToClient] = useState(order.sayToClient.status)
    const [dateSayToClient, setDateSayToClient] = useState(order.sayToClient.date)
    const [checkedClientReceived, setCheckedClientReceived] = useState(order.clientReceived.status)
    const [dateClientReceived, setDateClientReceived] = useState(order.clientReceived.date)
    // const [isChecked, setIsChecked] = useState(false);
    //const handleChange = (event) => {
    //   setIsChecked(event.target.checked);
    //};
    // <input
    //    type="checkbox"
    //    checked={isChecked}
    //     onChange={handleChange}
    ///>

    const handleChangeInProgress = (event) => {
        setCheckedInProgress(event.target.checked)
        setDateInProgress(createTodayDate())
    }
    const handleChangeJobCompleted = (event) => {
        setCheckedJobCompleted(event.target.checked)
        setDateJobCompleted(createTodayDate())
    }
    const handleChangeSayToClient = (event) => {
        setCheckedSayToClient(event.target.checked)
        setDateSayToClient(createTodayDate())
    }
    const handleChangeClientReceived = (event) => {
        setCheckedClientReceived(event.target.checked)
        setDateClientReceived(createTodayDate())
        setDateClientReceived(createTodayDate())
    }
    const saveUpdate = () => {
        const updatedOrder = {
            sentToDo: {status: checkedInProgress, date: dateInProgress},
            completed: {status: checkedJobCompleted, date: dateJobCompleted},
            sayToClient: {status: checkedSayToClient, date: dateSayToClient},
            clientReceived: {status: checkedClientReceived, date: dateClientReceived},
            paid: {
                payment: order.paid.payment + Number(newPayment),
                debt: order.paid.debt - Number(newPayment),
                primeCost: order.paid.primeCost,
                date: order.paid.debt - Number(newPayment) <= 0 ? createTodayDate() : '',
                status: order.paid.debt - Number(newPayment) <= 0,
            }
        }
        updateExistOrder(order._id, updatedOrder)
        toggle()
    }
    const cancelUpdate = () => {
        toggle()
        setCheckedInProgress(order.sentToDo.status)
        setCheckedJobCompleted(order.completed.status)
        setCheckedSayToClient(order.sayToClient.status)
        setCheckedClientReceived(order.clientReceived.status)
    }

    return (
        <div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Order Information</ModalHeader>
                <ModalBody>
                    <div className="input-group mb-3">
                        <input value={client}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input value={service}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input value={price}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">New Payment</span>
                        <input value={newPayment} onChange={e => setNewPayment(e.target.value)}
                               type="number" className="form-control" placeholder="0"
                               aria-describedby="basic-addon1"/>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            In progress
                        </label>
                        <input onChange={handleChangeInProgress}
                               className="form-check-input" type="checkbox" checked={checkedInProgress}
                               id="flexCheckDefault"/>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Job completed
                        </label>
                        <input onChange={handleChangeJobCompleted}
                               className="form-check-input" type="checkbox" checked={checkedJobCompleted}
                               id="flexCheckDefault"/>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Say to client
                        </label>
                        <input onChange={handleChangeSayToClient}
                               className="form-check-input" type="checkbox" checked={checkedSayToClient}
                               id="flexCheckDefault"/>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Client received
                        </label>
                        <input onChange={handleChangeClientReceived}
                               className="form-check-input" type="checkbox" checked={checkedClientReceived}
                               id="flexCheckDefault"/>
                    </div>
                    <div className="input-group mb-3">
                        <input value={debit}
                               type="text" className="form-control"
                               aria-describedby="basic-addon1"/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveUpdate}>
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

export default UpdateOrderModal;
