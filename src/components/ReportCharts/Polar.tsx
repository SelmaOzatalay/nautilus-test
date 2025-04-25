'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';
import style from './ReportCharts.module.scss';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type PolarAreaChartProps = {
  series: number[];
  labels: string[];
};

const Polar: React.FC<PolarAreaChartProps> = ({ series, labels }) => {

  const polarChartOptions: ApexOptions = {
    chart: {
      type: 'polarArea',
    },
    labels,
    stroke: {
      colors: ['transparent'],
    }, 
    legend: {
        position: 'right',
        labels: {
          colors: '#fff',
        },
      },
      dataLabels: {
        style: {
          colors: ['#000'],
        },
    },
    fill: {
      opacity: 0.8
    },
    theme: {
        monochrome: {
            color: '#00e96d',
            enabled: true,
            shadeTo: 'light',
            shadeIntensity: 1
        }
    },
    yaxis: {
        labels: {
          style: {
            colors: '#fff',
            fontSize: '14px',
          },
        },
    },
    tooltip: {
        style: {
          fontSize: '12px',
        },
        theme: 'dark',
      },
    grid: {
        show: true,
        borderColor: '#000', 
        strokeDashArray: 4,
    },
    plotOptions: {
        polarArea: {
          rings: {
            strokeColor: 'rgba(255,255,255,0.2)',
          },
        },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };


    return (
        <div>
            <div className={style.topChartContainer}>
                <ApexChart options={polarChartOptions} series={series} type="polarArea" height={250}  />
            </div>
        </div>
    );
};

export default Polar;
