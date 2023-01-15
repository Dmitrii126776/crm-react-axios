import React from 'react';

const ResultsList = (props) => {
    const {orders} = props

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

    const resultConfig = [
        {key: 'service', label: 'Service', render: (row) => <>{row.jobOrder}</>},
        {key: 'qty', label: 'Qty', render: (row) => <>{row.totalCount}</>},
        {key: 'employee', label: 'Employee', render: (row) => <>{row.employeeOrder}</>},
        {key: 'price', label: 'Revenue', render: (row) => <>${row.totalPrice}</>},
        {key: 'primeCost', label: 'Prime Cost', render: (row) => <>${row.totalPrimeCost}</>},
        {key: 'profit', label: 'Net Profit', render: (row) => <>${row.totalPrice - row.totalPrimeCost}</>},
        {key: 'debt', label: 'Client Debt', render: (row) => <>${row.totalDebt}</>},
        {key: 'paid', label: 'Paid', render: (row) => <>${row.totalPayment}</>},
    ]

    return (
        <div>
            <h2 style={{maxWidth: 500}}>Company Results</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                <tr>
                    {resultConfig.map((el, i) => (<th key={i}>{el.label}</th>))}
                </tr>
                </thead>
                <tbody>
                {results.map(el => (<tr key={el.id}>
                    {resultConfig.map((conf, i) => (<td key={i}>{conf.render(el)}</td>))}
                </tr>))}
                </tbody>
                <tfoot>
                <tr>
                    <td>
                        <strong>
                            All Results
                        </strong>
                    </td>
                    <td>
                        <strong>
                            {results.reduce((sum, el) => el.totalCount + sum, 0)}
                        </strong>
                    </td>
                    <td>
                        <strong>
                            Dream Team
                        </strong>
                    </td>
                    <td>
                        <strong>
                            ${results.reduce((sum, el) => el.totalPrice + sum, 0)}
                        </strong>
                    </td>
                    <td>
                        <strong>
                            ${results.reduce((sum, el) => el.totalPrimeCost + sum, 0)}
                        </strong>
                    </td>
                    <td>
                        <strong>
                            ${results.reduce((sum, el) => el.totalPrice + sum, 0) - results.reduce((sum, el) => el.totalPrimeCost + sum, 0)}
                        </strong>
                    </td>
                    <td>
                        <strong>
                            ${results.reduce((sum, el) => el.totalDebt + sum, 0)}
                        </strong>
                    </td>
                    <td>
                        <strong>
                            ${results.reduce((sum, el) => el.totalPayment + sum, 0)}
                        </strong>
                    </td>
                </tr>
                </tfoot>
            </table>

        </div>
    );
};

export default ResultsList;
