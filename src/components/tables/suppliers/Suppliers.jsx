import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Suppliers = () => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5050/api/suppliers')
        .then((response) => {
            setSuppliers(response.data.slice(0, 10));
      })
    }, []);

    if (!suppliers) return null;
    
    return (
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><h4 className='text-base'>No.</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>SupplierID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>CompanyName</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>ContactTitle</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>City</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>Country</h4></TableCell>
                </TableRow>
            </TableHead>
           
            <TableBody>
                {suppliers.map((row, index) => (
                    <TableRow key={row.SupplierID}>
                        <TableCell align="left">{index+1}</TableCell>
                        <TableCell align="left">{row.SupplierID}</TableCell>
                        <TableCell align="left">{row.CompanyName}</TableCell>
                        <TableCell align="left">{row.ContactTitle}</TableCell>
                        <TableCell align="left">{row.City}</TableCell>
                        <TableCell align="left">{row.Country}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Suppliers;