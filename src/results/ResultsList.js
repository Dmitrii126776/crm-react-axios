import React from 'react';

const ResultsList = (props) => {
    const {orders} = props
    const headers = ['QTY', 'Service', 'Employee', 'Income', 'Prime Cost', 'Net Profit', 'Client Debt', 'Paid sum']

    let services = orders.map(el => el.service.job)
    services = [...new Set(services)]
    console.log(services)
    console.log(orders)
    let results = []
    let order = {}
    let debtOrder = 0;
    let paymentOrder = 0;
    let primeCostOrder = 0
    let priceOrder = 0
    let count = 0
    for (let i = 0; i < services.length; i++) {
        for (let j = 0; j < orders.length; j++) {
            if (orders[j].service.job === services[i]) {
                priceOrder += orders[j].service.price
                debtOrder += orders[j].paid.debt
                paymentOrder += orders[j].paid.payment
                primeCostOrder += orders[j].service.primeCost
                count++
                order = {
                    jobOrder: orders[j].service.job,
                    employeeOrder: orders[j].service.employee,
                }
            }
            order = {
                ...order,
                totalPrice: priceOrder,
                totalPrimeCost: primeCostOrder,
                totalDebt: debtOrder,
                totalPayment: paymentOrder,
                totalCount: count
            }
        }
        results.push(order)
        debtOrder = 0;
        paymentOrder = 0;
        primeCostOrder = 0
        priceOrder = 0
        count = 0
        order = {}
    }
    console.log(results)

    return (
        <div>
            <h2 style={{maxWidth: 500}}>Company Results</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                <tr>
                    {headers.map((el, i) => (<th key={i}>{el}</th>))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Translation</td>
                    <td>Greg</td>
                    <td>$100</td>
                    <td>$25</td>
                    <td>$75</td>
                    <td>$70</td>
                    <td>$30</td>
                </tr>

                </tbody>
            </table>

        </div>
    );
};

export default ResultsList;
