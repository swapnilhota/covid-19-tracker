import React from 'react'
import { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import numeral from 'numeral';

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        }
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: (tooltipItem, data) => {
                return numeral(tooltipItem.value).format("+0.0");
            }
        }
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "DD/MM/YY",
                    tooltipFormat: "ll",
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: (value, index, values) => {
                        return numeral(value).format("0a");
                    }
                }
            }
        ]
    }
}

const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
}

const LineGraph = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then(response => response.json())
                .then(data => {
                    let chartData = buildChartData(data, "cases");
                    setData(chartData);
                })
        }

        fetchData();

    }, [])

    return (
        <div>
            {
                data?.length > 0 && (
                    <Line
                        options={options}
                        data={{
                            datasets: [
                                {
                                    backgroundColor: "rgba(204, 16, 52, 0)",
                                    borderColor: "#cc1034",
                                    data: data
                                }
                            ]
                        }}

                    />
                )
            }
        </div>
    )
}

export default LineGraph
