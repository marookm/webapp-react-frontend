import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const OrderDetails = () => {
    const [orderdetails, setOrderDetails] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5050/api/orderdetails')
        .then((response) => {
            setOrderDetails(response.data.slice(0, 10));
      })
    }, []);

    if (!orderdetails) return null;
    
    return (
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><h4 className='text-base'>No.</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>OrderID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>ProductID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>UnitPrice</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>Quantity</h4></TableCell>
                </TableRow>
            </TableHead>
           
            <TableBody>
                {orderdetails.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell align="left">{index+1}</TableCell>
                        <TableCell align="left">{row.OrderID}</TableCell>
                        <TableCell align="left">{row.ProductID}</TableCell>
                        <TableCell align="left">{row.UnitPrice}</TableCell>
                        <TableCell align="left">{row.Quantity}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default OrderDetails;