'use client';

import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';
// import style from './ReportCharts.module.scss';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type GaugeChartProps = {
  series: number[];
  labels: string[];
};

const Gauge: React.FC<GaugeChartProps> = ({ series, labels }) => {


    const gaugeOptions: ApexOptions = {
        
            chart: {
              height: 350,
              type: 'radialBar',
              offsetY: -10
            },
            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 135,
                track: {
                  background: 'rgba(0,0,0,0.9)',
                },
                dataLabels: {
                  name: {
                    show: true,
                    fontSize: '16px',
                    color: '#91F7C0',
                    offsetY: 120
                  },
                  value: {
                    offsetY: 76,
                    fontSize: '16px',
                    color: '#fff',
                    formatter: function (val) {
                      return val + "%";
                    }
                  }
                }
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                  shade: 'dark',
                  shadeIntensity: 0.15,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  gradientToColors: ['#30FF90']
              },
            },
            stroke: {
              dashArray: 4
            },
            labels: ['Global Score'],
            colors: ['#91F7C0'],
        
    }

    const [seriesTotal, setSeriesTotal] = useState<number>(0);

    useEffect(() => {
        const total = series.reduce((acc, val) => acc + val, 0);
        const percentageSeries =  (total / (series.length * 100)) * 100;
        setSeriesTotal(percentageSeries);
        console.log('seriesTotal', percentageSeries);
    },[labels, series]);

    return (
        <div>
          {seriesTotal ?
            <ApexChart options={gaugeOptions} series={[seriesTotal]} type="radialBar" height={250} width={200}/>
          : null
          }
        </div>
    );
};

export default Gauge;
