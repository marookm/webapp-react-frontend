import React from 'react';

import {
Tables,
Categories,
Customers,
Employees,
Products,
Orders,
OrderDetails,
Suppliers,
Shippers
} from '../../components/index';

function DataTableViews() {
    let label_row_data = '(10 rows)';

    return (
        <div className="max-w-xs mb-10">
            <Tables table={`Categories ${label_row_data}`}>
                <Categories />
            </Tables>

            <Tables table={`Employees ${label_row_data}`}>
                <Employees />
            </Tables>

            <Tables table={`Customers ${label_row_data}`}>
                <Customers />
            </Tables>

            <Tables table={`Products ${label_row_data}`}>
                <Products />
            </Tables>

            <Tables table={`Orders ${label_row_data}`}>
                <Orders />
            </Tables>

            <Tables table={`OrderDetails ${label_row_data}`}>
                <OrderDetails />
            </Tables>

            <Tables table={`Suppliers ${label_row_data}`}>
                <Suppliers />
            </Tables>

            <Tables table={`Shippers ${label_row_data}`}>
                <Shippers />
            </Tables>
        </div>
    );
};

export default DataTableViews;