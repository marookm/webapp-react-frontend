import React from 'react';

import { NavBar, Footer } from '../components/index';
import { DataTableView } from '../containers/index';

function DataSet() {
    return (
        <div>
            <NavBar />
            
            <div className="max-w-xs p-10">
                <div>
                <h1>Data Set: Nortwind</h1>
                <p>source(Github):
                    {' '}  
                    <a href='https://github.com/jpwhite3/northwind-SQLite3' target='_blank'>
                        nortwind-SQLite3
                    </a>
                </p>
                </div>
            </div>

            <DataTableView />
        </div>
    );
};

export default DataSet;