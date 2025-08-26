import {EChartsOption} from "echarts";
import ReactECharts from "echarts-for-react";
import React from "react";

const SomeoneToTalkTo = () => {
    const option: EChartsOption = {
        title: {
            text: '《一句顶一万句》',
            textAlign: 'left',
        },
        xAxis: {
            type: 'category',
            data: ['8-3', '8-23', '8-24', '8-25'],
            name: '日期'
        },
        yAxis: {
            type: 'value',
            max: 618,
            name: '页数',
            nameGap: 5,
        },
        color: ['#19d95f'],
        tooltip: {
            show: true
        },
        series: [
            {
                data: [107, 291, 357, 618],
                type: 'line'
            }
        ]
    };

    return <ReactECharts option={option} style={{height: '500px', width: '500px',}}/>;
}

export default SomeoneToTalkTo
