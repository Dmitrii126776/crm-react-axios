import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import OrdersList from "./orders/OrdersList";
import ClientsList from "./clients/ClientsList";
import ServicesList from "./servises/ServicesList";
import {Nav, NavItem, NavLink} from "reactstrap";
import axios from 'axios';
import {useEffect, useState} from "react";
import ResultsList from "./results/ResultsList";

function App() {

    const [clients, setClients] = useState([])
    const [services, setServices] = useState([])
    const [orders, setOrders] = useState([])
    const getClients = () => {
        axios.get('https://expressjs-server.up.railway.app/clients')
            .then(res => {
                console.log(res.data)
                setClients(res.data)
            }).catch(err => {
            console.log(err)
        })
    }
    const createNewClient = (newClient) => {
        axios.post('https://expressjs-server.up.railway.app/clients', newClient)
            .then(res => {
                getClients()
            }).catch(err => {
            console.log(err)
        })
    }
    const updateClientInfo = (id, updatedClient) => {
        axios.patch(`https://expressjs-server.up.railway.app/clients/${id}`, updatedClient)
            .then(res => {
                getClients()
            }).catch(err => {
            console.log(err)
        })
    }
    const deleteClient = (id) => {
        axios.delete(`https://expressjs-server.up.railway.app/clients/${id}`)
            .then(res => {
                getClients()
            }).catch(err => {
            console.log(err)
        })
    }
    const getServices = () => {
        axios.get('https://expressjs-server.up.railway.app/services')
            .then(res => {
                console.log(res.data)
                setServices(res.data)
            }).catch(err => {
            console.log(err)
        })
    }
    const createNewService = (newService) => {
        axios.post('https://expressjs-server.up.railway.app/services', newService)
            .then(res => {
                getServices()
            }).catch(err => {
            console.log(err)
        })
    }
    const updateExistService = (id, updatedService) => {
        axios.patch(`https://expressjs-server.up.railway.app/services/${id}`, updatedService)
            .then(res => {
                getServices()
            }).catch(err => {
            console.log(err)
        })
    }
    const deleteService = (id) => {
        axios.delete(`https://expressjs-server.up.railway.app/services/${id}`)
            .then(res => {
                getServices()
            }).catch(err => {
            console.log(err)
        })
    }
    const getOrders = () => {
        axios.get('https://expressjs-server.up.railway.app/orders')
            .then(res => {
                console.log(res.data)
                setOrders(res.data)
            }).catch(err => {
            console.log(err)
        })
    }

    const createNewOrder = (newOrder) => {
        axios.post('https://expressjs-server.up.railway.app/orders', newOrder)
            .then(res => {
                getOrders()
            }).catch(err => {
            console.log(err)
        })
    }
    const updateExistOrder = (id, updatedOrder) => {
        axios.patch(`https://expressjs-server.up.railway.app/orders/${id}`, updatedOrder)
            .then(res => {
                getOrders()
            }).catch(err => {
            console.log(err)
        })
    }
    const deleteOrder = (id) => {
        axios.delete(`https://expressjs-server.up.railway.app/orders/${id}`)
            .then(res => {
                getOrders()
            }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getClients()
        getServices()
        getOrders()
    }, [])

    return (
        <div className="App">
            <h1>Clients & Services</h1>
            <Nav>
                <NavItem>
                    <NavLink active>
                        <Link to='/'>Home</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to='/services'>Services</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to='/clients'>Clients</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to='/orders'>Orders</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to='/results'>Results</Link>
                    </NavLink>
                </NavItem>
            </Nav>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='orders' element={<OrdersList
                    deleteOrder={deleteOrder}
                    createNewOrder={createNewOrder}
                    updateExistOrder={updateExistOrder}
                    clients={clients}
                    services={services}
                    orders={orders}/>}/>
                <Route path='clients' element={<ClientsList
                    deleteClient={deleteClient}
                    updateClientInfo={updateClientInfo}
                    clients={clients}
                    createNewClient={createNewClient}/>}/>
                <Route path='services' element={<ServicesList
                    deleteService={deleteService}
                    updateExistService={updateExistService}
                    createNewService={createNewService}
                    services={services}/>}/>
                <Route path='results' element={<ResultsList
                    orders={orders}/>}/>
            </Routes>

        </div>
    );
}

export default App;
