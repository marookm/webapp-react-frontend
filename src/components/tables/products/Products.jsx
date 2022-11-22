import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5050/api/products')
        .then((response) => {
          setProducts(response.data.slice(0, 10));
      })
    }, []);

    if (!products) return null;
    
    return (
        <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><h4 className='text-base'>No.</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>ProductID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>ProductName</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>SupplierID</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>UnitPrice</h4></TableCell>
                    <TableCell align="left"><h4 className='text-base'>CategoryID</h4></TableCell>
                </TableRow>
            </TableHead>
           
            <TableBody>
                {products.map((row, index) => (
                    <TableRow key={row.ProductID}>
                        <TableCell align="left">{index+1}</TableCell>
                        <TableCell align="left">{row.ProductID}</TableCell>
                        <TableCell align="left">{row.ProductName}</TableCell>
                        <TableCell align="left">{row.SupplierID}</TableCell>
                        <TableCell align="left">{row.UnitPrice}</TableCell>
                        <TableCell align="left">{row.CategoryID}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Products;