
'use client'
import React from 'react';
import ReactECharts from 'echarts-for-react';
import {EChartsOption} from "echarts";

export default function JavaThinking() {
    const option:EChartsOption = {
        title: {
            text: 'Java编程思想',
            textAlign: 'left'
        },
        xAxis: {
            type: 'category',
            data: ['3-15', '3-16']
        },
        yAxis: {
            type: 'value',
            max: 855
        },
        series: [
            {
                data: [20,28],
                type: 'line'
            }
        ]
    };

    return <ReactECharts option={option} style={{height: '500px', width: '500px',}}/>;
}