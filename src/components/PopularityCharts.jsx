import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

// Register the necessary components
Chart.register(...registerables);

const PopularityCharts = () => {
    // Use useState correctly to initialize chartOptions state
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        // Here you would add the logic to fetch the popularity data from the backend
        // For now, we can just set some sample data
        const sampleChartData = {
            labels: ['November 1', 'November 2', 'November 3'],
            datasets: [
                {
                    label: 'Upvotes',
                    data: [5, 3, 7],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }
            ]
        };
        const sampleChartOptions = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        // Set the chartData and chartOptions states correctly
        setChartData(sampleChartData);
        setChartOptions(sampleChartOptions);

        return () => {
            // This is a cleanup function that will be called when the component unmounts
            // In this case, it's used to destroy the Chart.js instance to avoid memory leaks
            if (chartData && chartOptions) {
                const ctx = document.getElementById('popularity-chart').getContext('canvas');
                const myChart = new Chart(ctx, {
                    type: 'bar',
                    data: chartData,
                    options: chartOptions
                });
                myChart.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (chartData && chartOptions) {
            const ctx = document.getElementById('popularity-charch').getContext('canvas');
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: chartOptions
            });

            return () => {
                myChart.destroy();
            };
        }
    }, [chartData, chartOptions]);

    return (
        <div className="p-8">
            <h2 className="text-2xl mb-4">Popularity Charts</h2>
            <canvas id="popularity-chart" width="400" height="300"></canvas>
        </div>
    );
};

export default PopularityCharts;