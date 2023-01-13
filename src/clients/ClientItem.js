import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientDropDownModal from "./ClientDropDownModal";

const ClientItem = (props) => {
    const {client, deleteClient, updateClientInfo} = props

    return (
        <>
            <td><strong>{client.name}</strong></td>
            <td>{client.address}</td>
            <td>{client.phoneNumber}</td>
            <td>{client.createAt}</td>
            <td>
                <ClientDropDownModal
                    updateClientInfo={updateClientInfo}
                    deleteClient={deleteClient}
                    client={client}
                />
            </td>
        </>

    );
};

export default ClientItem;
