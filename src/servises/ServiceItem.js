import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import UpdateServiceModal from "./UpdateServiceModal";
import DeleteServiceModal from "./DeleteServiceModal";

const ServiceItem = (props) => {
    const {service, index, updateExistService, deleteService} = props
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [updateModal, setUpdateModal] = useState(false);
    const updateToggle = () => setUpdateModal(!updateModal);
    const [deleteModal, setDeleteModal] = useState(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);
    return (
        <>
            <th scope='row'>{index + 1}</th>
            <td>{service.job}</td>
            <td>${service.price}</td>
            <td>${service.primeCost}</td>
            <td><strong>{service.employee}</strong></td>
            <td>
                <div className="d-flex p-15">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <Button color="primary" onClick={updateToggle}>
                                    Update
                                </Button>
                            </DropdownItem>
                            <UpdateServiceModal
                                updateExistService={updateExistService}
                                service={service}
                                modal={updateModal} toggle={updateToggle}/>
                            <DropdownItem>
                                <Button color="danger" onClick={deleteToggle}>
                                    Delete
                                </Button>
                            </DropdownItem>
                            <DeleteServiceModal
                                toggle={deleteToggle}
                                modal={deleteModal} deleteService={deleteService}
                                service={service}/>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </td>
        </>
    );
};

export default ServiceItem;
