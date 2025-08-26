import React from 'react';
import ReactECharts from 'echarts-for-react';
import {EChartsOption} from "echarts";

export default function SelectedWorksOfMaoZedong1() {
    const option: EChartsOption = {
        title: {
            text: '《毛泽东选集1》',
            textAlign: 'left'
        },
        xAxis: {
            type: 'category',
            data: ['8-2', '8-17']
        },
        yAxis: {
            type: 'value',
            max: 340
        },
        series: [
            {
                data: [153, 183,],
                type: 'line'
            }
        ]
    };

    return <ReactECharts option={option} style={{height: '500px', width: '500px',}}/>;
}
