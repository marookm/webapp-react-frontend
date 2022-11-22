import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Shippers = () => {
    const [shippers, setShippers] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5050/api/shippers')
        .then((response) => {
            setShippers(response.data.slice(0, 10));
      })
    }, []);

    if (!shippers) return null;
    
    return (
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><h4 className='text-base'>No.</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>ShipperID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>CompanyName</h4></TableCell>
                </TableRow>
            </TableHead>
           
            <TableBody>
                {shippers.map((row, index) => (
                    <TableRow key={row.ShipperID}>
                        <TableCell align="left">{index+1}</TableCell>
                        <TableCell align="left">{row.ShipperID}</TableCell>
                        <TableCell align="left">{row.CompanyName}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Shippers;