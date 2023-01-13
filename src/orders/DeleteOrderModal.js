import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function DeleteOrderModal(props) {
    const {modal, toggle, order, deleteOrder} = props

    const removeOrder = () => {
        deleteOrder(order._id)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Remove Order Modal</ModalHeader>
                <ModalBody>
                    <div className='list-group'>
                        <a><strong>Do you want to remove ?</strong></a>
                        <a><strong>Order: # {order.orderNumber}</strong> </a>
                        <a><strong>Client: {order.clientName}</strong> </a>
                        <a><strong>Service: {order.service.job}</strong></a>
                        <a><strong>Employee: {order.service.employee}</strong></a>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={removeOrder}>
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

export default DeleteOrderModal;
