import React from 'react';
import {Table} from "reactstrap";
import ServiceItem from "./ServiceItem";
import CreateServiceModal from "./CreateServiceModal";

const ServicesList = (props) => {
    const {services, createNewService, updateExistService, deleteService} = props
    const headers = ['#', 'Name of service', 'Price', 'Prime cost', 'Employee', 'Actions']
    return (
        <div>
            <h2 style={{maxWidth: 500}}>Services List</h2>
            <CreateServiceModal createNewService={createNewService}/>
            <Table bordered>
                <thead>
                <tr>
                    {headers.map((el, i) => (<th key={i}>{el}</th>))}
                </tr>
                </thead>
                <tbody>
                {services.map((el, i) =>
                    (<tr key={i}>
                        <ServiceItem
                            deleteService={deleteService}
                            updateExistService={updateExistService}
                            service={el} index={i}/>
                    </tr>))}


                </tbody>
            </Table>
        </div>
    );
};

export default ServicesList;
