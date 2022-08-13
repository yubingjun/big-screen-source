import {px} from './px';

export const baseEchartsOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#79839e',
  },
  title: {show: false},
  legend: {show: false},
  grid: {
    x: px(20),
    y: px(20),
    x2: px(20),
    y2: px(20),
    containLabel: true
  },
  // grid: {
  //   containLabel:true,
  //   x: px(20),
  //   y: px(40),
  //   x2: px(10),
  //   y2: px(40)
  // },
}