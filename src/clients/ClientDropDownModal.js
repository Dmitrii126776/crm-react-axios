import React, {useState} from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Button,
} from 'reactstrap';
import DeleteClientModal from "./DeleteClientModal";
import UpdateClientModal from "./UpdateClientModal";

function ClientDropDownModal(props) {
    const {client, deleteClient, updateClientInfo} = props
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [deleteModal, setDeleteModal] = useState(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);
    const [updateModal, setUpdateModal] = useState(false);
    const updateToggle = () => setUpdateModal(!updateModal);

    return (
        <div className="d-flex p-15">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret></DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        <Button color="primary" onClick={updateToggle}>
                            Update
                        </Button>
                    </DropdownItem>
                    <UpdateClientModal
                        client={client} updateClientInfo={updateClientInfo}
                        modal={updateModal} toggle={updateToggle}/>
                    <DropdownItem>
                        <Button color="danger" onClick={deleteToggle}>
                            Remove
                        </Button>
                    </DropdownItem>
                    <DeleteClientModal
                        client={client} deleteClient={deleteClient}
                        modal={deleteModal} toggle={deleteToggle}/>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default ClientDropDownModal;
