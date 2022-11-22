import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

const EmployeePie = ({ dataset }) => {
    const countrys = dataset.map(row => row.Country);
    const sets = [...new Set(countrys)].filter(data => data !== null);
    const num_emp = new Array(sets.length).fill(0)

    for (let i = 0; i < countrys.length; i++) {
        for (let k = 0; k < sets.length; k++) {
            if (String(sets[k]) === String(countrys[i])) {
                num_emp[k] += 1;
            }
        }
    }

    return (
        <div className="pt-5">
            <h3 className="text-gray-400">Number of employees in USA and UK</h3>
            <div className="mt-5">
                <Doughnut
                    data={{
                        labels: sets,
                        datasets: [{
                            data: num_emp,
                            backgroundColor: ['rgb(241, 148, 138)', 'rgb(244, 208, 63)']
                        }],
                    }}

                    options={{
                        plugins: {
                            labels: {
                                render: 'percentage'
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default EmployeePie;