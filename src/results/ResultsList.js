import React from 'react';

const ResultsList = (props) => {
    const {orders} = props

    let services = orders.map(el => el.service.job)
    services = [...new Set(services)]
    console.log(orders)
    console.log(services)
    let results = []
    let orderGroup = {}
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
                orderGroup = {
                    jobOrder: orders[j].service.job,
                    employeeOrder: orders[j].service.employee,
                }
            }
            orderGroup = {
                ...orderGroup,
                totalPrice: priceOrder,
                totalPrimeCost: primeCostOrder,
                totalDebt: debtOrder,
                totalPayment: paymentOrder,
                totalCount: count
            }
        }
        results.push(orderGroup)
        debtOrder = 0;
        paymentOrder = 0;
        primeCostOrder = 0
        priceOrder = 0
        count = 0
        orderGroup = {}
    }
    console.log(results)

    const resultConfig = [
        {key: 'service', label: 'Service', render: (row) => <>{row.jobOrder}</>, footer: 'All Results'},
        {
            key: 'qty', label: 'Qty', render: (row) => <>{row.totalCount}</>,
            footer: <>{results.reduce((sum, el) => el.totalCount + sum, 0)}</>
        },
        {key: 'employee', label: 'Employee', render: (row) => <>{row.employeeOrder}</>, footer: 'Dream Team'},
        {
            key: 'price', label: 'Revenue', render: (row) => <>${row.totalPrice}</>,
            footer: <>${results.reduce((sum, el) => el.totalPrice + sum, 0)}</>
        },
        {
            key: 'primeCost', label: 'Prime Cost', render: (row) => <>${row.totalPrimeCost}</>,
            footer: <> ${results.reduce((sum, el) => el.totalPrimeCost + sum, 0)}</>
        },
        {
            key: 'profit', label: 'Net Profit', render: (row) => <>${row.totalPrice - row.totalPrimeCost}</>,
            footer: <> ${results.reduce((sum, el) => el.totalPrice + sum, 0) - results.reduce((sum, el) => el.totalPrimeCost + sum, 0)}</>
        },
        {
            key: 'debt', label: 'Client Debt', render: (row) => <>${row.totalDebt}</>,
            footer: <>${results.reduce((sum, el) => el.totalDebt + sum, 0)}</>
        },
        {
            key: 'paid', label: 'Paid', render: (row) => <>${row.totalPayment}</>,
            footer: <>${results.reduce((sum, el) => el.totalPayment + sum, 0)}</>
        },
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
                    {resultConfig.map((el, i) => (<td key={i}><strong>{el.footer}</strong></td>))}
                </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ResultsList;
