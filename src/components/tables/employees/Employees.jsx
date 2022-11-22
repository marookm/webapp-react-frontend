import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/api/employees')
            .then((response) => {
                setEmployees(response.data.slice(0, 10));
            })
    }, []);

    if (!employees) return null;

    return (
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><h4 className='text-base'>No.</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>EmployeeID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>Title</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>FirstName</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>LastName</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>BithDate</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>Country</h4></TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {employees.map((row, index) => (
                    <TableRow key={row.EmployeeID}>
                        <TableCell align="left">{index + 1}</TableCell>
                        <TableCell align="left">{row.EmployeeID}</TableCell>
                        <TableCell align="left">{row.Title}</TableCell>
                        <TableCell align="left">{row.FirstName}</TableCell>
                        <TableCell align="left">{row.LastName}</TableCell>
                        <TableCell align="left">{row.BirthDate}</TableCell>
                        <TableCell align="left">{row.Country}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Employees;