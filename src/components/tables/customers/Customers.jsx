import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/api/customers')
            .then((response) => {
                setCustomers(response.data.slice(0, 10));
            })
    }, []);

    if (!customers) return null;

    return (
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><h4 className='text-base'>No.</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>CustomerID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>CompanyName</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>ContactName</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>ContactTitle</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>City</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>Country</h4></TableCell>
                </TableRow>
            </TableHead>
        
            <TableBody>
                {customers.map((row, index) => (
                    <TableRow key={row.CustomerID}>
                        <TableCell align="left">{index+1}</TableCell>
                        <TableCell align="left">{row.CustomerID}</TableCell>
                        <TableCell align="left">{row.CompanyName}</TableCell>
                        <TableCell align="left">{row.ContactName}</TableCell>
                        <TableCell align="left">{row.ContactTitle}</TableCell>
                        <TableCell align="left">{row.City}</TableCell>
                        <TableCell align="left">{row.Country}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Customers