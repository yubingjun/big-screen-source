import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    1: [
      0.15, 0.13, 0.11,
      0.13, 0.14, 0.15,
      0.16, 0.18, 0.21,
      0.19, 0.17, 0.16,
      0.15
    ],
    2: [
      0.11, 0.15, 0.16,
      0.22, 0.19, 0.17,
      0.16, 0.14, 0.18,
      0.17, 0.20, 0.17,
      0.18
    ],
    3: [
      0.13, 0.14, 0.17,
      0.20, 0.17, 0.21,
      0.19, 0.16, 0.15,
      0.13, 0.15, 0.17,
      0.16
    ]
  }
  useEffect(() => {
    setInterval(() => {
      const newData = {
        1: [
          0.15, 0.13, 0.11,
          0.13, 0.14, 0.15,
          0.16, 0.18, 0.21,
          0.19, 0.17, 0.16,
          0.15
        ],
        2: [
          0.11, 0.15, 0.16,
          0.22, 0.19, 0.17,
          0.16, 0.14, 0.18,
          0.17, 0.20, 0.17,
          0.18
        ],
        3: [
          0.13, 0.14, 0.17,
          0.20, 0.17, 0.21,
          0.19, 0.16, 0.15,
          0.13, 0.15, 0.17,
          0.16
        ]
      }
      // x(newData);
      x(data[Math.ceil(Math.random() * 3)])
    }, 1500);
  }, []);
  const x = data => {
    myChart.current.setOption(createEchartsOptions({
      color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data:  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: {show: true, lineStyle: {color: '#1e393d'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#1e393d'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        type: 'line',
        data: data,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#3559a7'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }));

  };


  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    return x(data[1]);
  }, []);
  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};