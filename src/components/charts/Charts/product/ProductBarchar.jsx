import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

const ProductBarchart = ({ dataset }) => {
    const unitprice = dataset.map(row => row.UnitPrice).filter(row => row !== null);
    const num_unit = new Array(7).fill(0)

    for (let i = 0; i < unitprice.length; i++) {
        if (Number(unitprice[i]) >= 1 && Number(unitprice[i]) <= 10) {
            num_unit[0] += 1;
        }

        if (Number(unitprice[i]) >= 11 && Number(unitprice[i]) <= 20) {
            num_unit[1] += 1;
        }

        if (Number(unitprice[i]) >= 21 && Number(unitprice[i]) <= 30) {
            num_unit[2] += 1;
        }

        if (Number(unitprice[i]) >= 31 && Number(unitprice[i]) <= 40) {
            num_unit[3] += 1;
        }

        if (Number(unitprice[i]) >= 41 && Number(unitprice[i]) >= 50) {
            num_unit[4] += 1;
        }

        if (Number(unitprice[i]) >= 51 && Number(unitprice[i]) >= 60) {
            num_unit[5] += 1;
        }

        if (Number(unitprice[i]) >= 61) {
            num_unit[6] += 1;
        }
    }

    return (
        <div className="pt-5">
            <h3 className="text-gray-400">Number of products with rate price</h3>
            <Bar
                data={{
                    labels: [
                        'between 1 and 10', 
                        'between 11 and 20', 
                        'between 21 and 30', 
                        'between 31 and 40', 
                        'between 41 and 50',
                        'between 51 and 60',
                        'more than 60'
                    ],
                    datasets: [{
                        label: "Product",
                        data: num_unit,
                        backgroundColor: [
                            'rgb(136, 78, 160)',
                            'rgb(155, 89, 182)',
                            'rgb(175, 122, 197)',
                            'rgb(195, 155, 211)',
                            'rgb(215, 189, 226)',
                            'rgb(235, 222, 240)',
                            'rgb(245, 238, 248)',
                        ]
                    }],
                }}

                options={{
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'Count'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Rate price (USD)'
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default ProductBarchart;