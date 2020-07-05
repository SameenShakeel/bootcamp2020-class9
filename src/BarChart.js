import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'pink',
            hoverBorderColor: 'pink',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 1,
            hoverBackgroundColor: 'lightblue',
            hoverBorderColor: 'lightblue',
            data: [43, 12, 89, 90, 100, 34, 27]
        },
    ]
};

function BarChart() {
    return (
        <div>
            <h2>Bar Example (custom size)</h2>
            <Bar
                data={data}
                width={100}
                height={250}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}

export default BarChart;