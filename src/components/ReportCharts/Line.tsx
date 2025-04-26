'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LineWithLabels: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: true,   // 👈 Show values on each point
      style: {
        fontSize: '12px',
        colors: ['#000'], // black labels
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        padding: 4,
        borderRadius: 2,
        opacity: 0.9,
      },
    },
    grid: {
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
        borderColor: 'rgba(255,255,255, 0.2)', // 👉 color of the grid lines
    },
    stroke: {
      curve: 'smooth', // makes the line curved
      width: 2,
    },
    markers: {
      size: 4,
      colors: ['#FFA500'], // marker inside color
      strokeColors: '#fff',
      strokeWidth: 2,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
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
            colors: '#FFFFFF', // 👉 color of the bottom labels (months here)
            fontSize: '12px',
          },
        },
    },
    colors: ['#30FF90'], // line color
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60],
    }
  ];

  return (
    <div>
      <ApexChart options={options} series={series} type="line" height={200} />
    </div>
  );
};

export default LineWithLabels;
