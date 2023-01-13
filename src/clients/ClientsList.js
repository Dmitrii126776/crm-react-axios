import React from 'react';
import {Table} from "reactstrap";
import ClientItem from "./ClientItem";
import CreateClientModal from "./CreateClientModal";

const ClientsList = (props) => {
    const {clients, createNewClient, deleteClient, updateClientInfo} = props

    const headers = ['Name', 'Address', 'Phone number', 'Create at', 'Actions']
    return (
        <div>
            <h2 style={{maxWidth: 500}}>Clients List</h2>
            <CreateClientModal createNewClient={createNewClient}/>          

            <Table striped bordered hover>
                <thead>
                <tr>
                    {headers.map((el, i) => (<th key={i}>{el}</th>))}
                </tr>
                </thead>
                <tbody>
                {clients.map((el, i) => (<tr key={i}>
                    <ClientItem key={el.id} client={el}
                                updateClientInfo={updateClientInfo}
                                deleteClient={deleteClient}
                                createNewClient={createNewClient}/>
                </tr>))}
                </tbody>
            </Table>
            <footer>

            </footer>
        </div>
    );
};

export default ClientsList;
