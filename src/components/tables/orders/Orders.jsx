import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5050/api/orders')
        .then((response) => {
            setOrders(response.data.slice(0, 10));
      })
    }, []);

    if (!orders) return null;
    
    return (
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><h4 className='text-base'>No.</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>OrderID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>CustomerID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>EmployeeID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>OrderDate</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>ShipCity</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>ShipCountry</h4></TableCell>
                </TableRow>
            </TableHead>
           
            <TableBody>
                {orders.map((row, index) => (
                    <TableRow key={row.OrderID}>
                        <TableCell align="left">{index+1}</TableCell>
                        <TableCell align="left">{row.OrderID}</TableCell>
                        <TableCell align="left">{row.CustomerID}</TableCell>
                        <TableCell align="left">{row.EmployeeID}</TableCell>
                        <TableCell align="left">{row.OrderDate}</TableCell>
                        <TableCell align="left">{row.ShipCity}</TableCell>
                        <TableCell align="left">{row.ShipCountry}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Orders;