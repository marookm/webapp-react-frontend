import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Categories.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5050/api/categories')
        .then((response) => {
          setCategories(response.data);
      })
    }, []);

    if (!categories) return null;
    
    return (
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><h4 className='text-base'>No.</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>CategoryID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>CategoryName</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>Description</h4></TableCell>
                </TableRow>
            </TableHead>
           
            <TableBody>
                {categories.map((row, index) => (
                    <TableRow key={row.CategoryID}>
                        <TableCell align="left">{index+1}</TableCell>
                        <TableCell align="left">{row.CategoryID}</TableCell>
                        <TableCell align="left">{row.CategoryName}</TableCell>
                        <TableCell align="left">{row.Description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Categories;