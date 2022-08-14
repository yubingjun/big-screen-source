import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
      legend: {
        bottom: px(2),
        textStyle: {color: 'white'},
        itemWidth: px(20),
        itemHeight: px(15)
      },
      grid: {
        x: px(15),
        x2: px(20),
        y: px(10),
        y2: px(35),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2012, 2013, 2014, 2015, 2016, 2017, 2018],
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
      series: [
        {
          name: '抢劫',
          type: 'line',
          data: [0.07, 0.05, 0.03, 0.04, 0.03, 0.02, 0.01]
        },
        {
          name: '醉驾',
          type: 'line',
          data: [0.05, 0.03, 0.04, 0.06, 0.06, 0.03, 0.04]
        },
        {
          name: '盗窃',
          type: 'line',
          data: [0.08, 0.06, 0.04, 0.05, 0.03, 0.02, 0.01]
        },
        {
          name: '故意杀人',
          type: 'line',
          data: [0.09, 0.06, 0.07, 0.05, 0.04, 0.02, 0.01]
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(15),
        lineStyle: {width: px(5)}
      }))
    }));
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};