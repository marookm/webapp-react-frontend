import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

const CustomerBarchart = ({ dataset }) => {
    const countrys = dataset.map(row => row.Country);
    const sets = [...new Set(countrys)].filter(data => data !== null);
    const num_cust = new Array(sets.length).fill(0)

    for (let i = 0; i < countrys.length; i++) {
        for (let k = 0; k < sets.length; k++) {
            if (String(sets[k]) === String(countrys[i])) {
                num_cust[k] += 1;
            }
        }
    }

    return (
        <div className="pt-5">
            <h3 className="text-gray-400">Number of customers in each country</h3>
            <Bar
                className='m-w-5xl'
                data={{
                    labels: sets,
                    datasets: [{
                        label: "Customer",
                        data: num_cust,
                        backgroundColor: ['rgb(52, 152, 219)']
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
                                text: 'Country'
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default CustomerBarchart;