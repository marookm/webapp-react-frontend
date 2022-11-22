import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CustomerBarchart from './customer/CustomerBarchart';
import EmployeePie from './employee/EmployeePie';
import SuppierPie from './supplier/SupplierPie';
import ProductBarchart from './product/ProductBarchar';

const Charts = () => {
    const [custData, setCustData] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);
    const [supplierData, setSupplierData] = useState([]);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5050/api/customers`)
            .then((response) => {
                setCustData(response.data.slice(0, 100));
            })
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5050/api/employees`)
            .then((response) => {
                setEmployeeData(response.data.slice(0, 100));
            })
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5050/api/suppliers`)
            .then((response) => {
                setSupplierData(response.data.slice(0, 100));
            })
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5050/api/products`)
            .then((response) => {
                setProductData(response.data.slice(0, 100));
            })
    }, []);

    return (
        <div>
            <div className="p-10">
                <CustomerBarchart dataset={custData} />
            </div>

            <div className="p-10 grid grid-cols-2 gap-4 justify-items-center">
                <EmployeePie dataset={employeeData} />
                <SuppierPie dataset={supplierData} />
            </div>

            <div className="p-10">
                <ProductBarchart dataset={productData} />
            </div>
        </div>
    );
};

export default Charts;