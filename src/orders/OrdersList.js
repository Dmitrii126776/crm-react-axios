import React from 'react';
import {Table} from "reactstrap";
import OrderItem from "./OrderItem";
import CreateOrderModal from "./CreateOrderModal";

const OrdersList = (props) => {
    const {orders, services, clients, updateExistOrder, createNewOrder, deleteOrder} = props
    const headers = ['#', 'Client', 'Service', 'Price', 'Payments', 'Debt', 'Create at', 'Statuses', 'Dates', 'Actions']
    return (
        <div>
            <h2 style={{maxWidth: 500}}>Orders List</h2>
            <CreateOrderModal createNewOrder={createNewOrder}
                              services={services} clients={clients} orders={orders}/>

            <Table striped bordered hover>
                <thead>
                <tr>
                    {headers.map((el, i) => (<th key={i}>{el}</th>))}
                </tr>
                </thead>
                <tbody>
                {orders.map((el, i) =>
                    (<tr key={i}>
                        <OrderItem deleteOrder={deleteOrder}
                                   updateExistOrder={updateExistOrder}
                                   index={i} order={el}/>
                    </tr>))}

                </tbody>
            </Table>
        </div>
    );
};

export default OrdersList;
