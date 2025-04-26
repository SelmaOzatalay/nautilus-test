'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';
import style from './ReportCharts.module.scss';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type BarChartProps = {
  series: number[];
  labels: string[];
};

const BarHorizontal: React.FC<BarChartProps> = ({ series, labels }) => {
  useEffect(() => {
    console.log(series, labels);
  }, [series, labels]);

  const dynamicColors = series.map((value) => {
    if (value === 100) return '#33FF57';
    if (value > 80) return '#FFC300'; 
    if (value > 50) return '#FF5733'; 
    return '#33FF57';                 
  });

  const options: ApexOptions = {
    colors: dynamicColors, // ✅ still here
    chart: {
      type: 'bar',
      height: '100%', // <- make it fill container
      width: '100%',
      toolbar: { show: false }
    },
    grid: {
        borderColor: 'rgba(255,255,255,0.1)',
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
        distributed: true,
        borderRadius: 4,   
        borderRadiusApplication: 'end' 
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#000'],
        fontWeight: 600
      },
    //   offsetX: -30,
      formatter: (val: number, opts) => {
        const category = opts.w.globals.labels[opts.dataPointIndex];
        return category;
      },
    },
    xaxis: {
      categories: labels,
      axisBorder: {
        show: true,
        color: 'rgba(255,255,255, 0.2)', // 👉 color of the bottom line (the axis itself)
      },
      axisTicks: {
        show: true,
        color: 'rgba(255,255,255, 0.2)', // 👉 color of the small ticks
      },
      labels: {
        style: {
          colors: ['#FFFFFF'],
          fontSize: '12px',
        },
      },
    },
    yaxis: {
        axisBorder: {
            show: true,
            color: 'rgba(255,255,255, 0.2)', // 👉 color of the bottom line (the axis itself)
          },
          axisTicks: {
            show: true,
            color: 'rgba(255,255,255, 0.2)', // 👉 color of the small ticks
          },
      labels: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} units`,
      },
    },
    legend: { 
        show: false, 
    },
  };

  const seriess: ApexAxisChartSeries = [
    {
      name: 'Cat',
      data: series,
    }
  ];

  return (
    <div>
      <div className={style.topChartContainer}>
        <ApexChart options={options} series={seriess} type="bar" height={300} width={250}/>
      </div>
    </div>
  );
};

export default BarHorizontal;
