import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const Tables = ({ children, table }) => {
  return (
    <div className='mt-5 pt-10 pl-10 pr-10'>        
      <h2 className='w-max'>Table: {table}</h2>
     <div className="mt-2 w-max">
        <TableContainer component={Paper}>
            {children}
        </TableContainer>
      </div>
    </div>
  );
};

export default Tables;