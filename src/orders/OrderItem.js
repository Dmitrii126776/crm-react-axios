import React, {useState} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import UpdateOrderModal from "./UpdateOrderModal";
import DeleteOrderModal from "./DeleteOrderModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faCheck)

const OrderItem = (props) => {
    const {order, updateExistOrder, deleteOrder, index} = props
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [updateModal, setUpdateModal] = useState(false);
    const updateToggle = () => setUpdateModal(!updateModal);

    const [deleteModal, setDeleteModal] = useState(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);
    const [isPaid, setIsPaid] = useState(order.paid.status);
    return (
        <>
            <td><strong>{index + 1}</strong></td>
            <td><strong>{order.clientName}</strong></td>
            <td>
                <div className='list-group'>
                    <a> <strong>{order.service.job}</strong> </a>
                    <a> ({order.service.employee}) </a>
                </div>
            </td>
            <td>{order.service.price}</td>
            <td>{order.paid.payment}</td>
            <td>{order.paid.debt}</td>
            <td>{order.service.createAt}</td>
            <td>
                <div className='list-group'>
                    <a>In progress: {order.sentToDo.status ? <FontAwesomeIcon icon={faCheck}/> : null}</a>
                    <a>Job completed: {order.completed.status ? <FontAwesomeIcon icon={faCheck}/> : null}</a>
                    <a>Say to client: {order.sayToClient.status ? <FontAwesomeIcon icon={faCheck}/> : null}</a>
                    <a>Client received: {order.clientReceived.status ? <FontAwesomeIcon icon={faCheck}/> : null}</a>
                </div>
                <div>
                    <a>Paid: {order.paid.status ? <FontAwesomeIcon icon={faCheck}/> : null}</a>
                </div>
            </td>
            <td>
                <div className='list-group'>
                    <a>{order.sentToDo.date} </a>
                    <a>{order.completed.date} </a>
                    <a>{order.sayToClient.date} </a>
                    <a>{order.clientReceived.date}</a>
                </div>
                <div>
                    {order.paid.status ? <a>{order.paid.date}</a> : null}
                </div>
            </td>
            <td>
                <div className="d-flex p-5">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Button color="primary" onClick={updateToggle}>
                                    Update
                                </Button>
                            </DropdownItem>
                            <UpdateOrderModal updateExistOrder={updateExistOrder}
                                              modal={updateModal}
                                              order={order} toggle={updateToggle}/>
                            <DropdownItem>
                                <Button color="danger" onClick={deleteToggle}>
                                    Delete
                                </Button>
                            </DropdownItem>
                            <DeleteOrderModal deleteOrder={deleteOrder}
                                              toggle={deleteToggle}
                                              modal={deleteModal} order={order}/>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </td>
        </>
    );
};

export default OrderItem;
