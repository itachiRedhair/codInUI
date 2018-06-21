import { merge } from 'lodash';

import '../styles/_theme.scss';

export const TYPE_LINE = 'line';
export const TYPE_BAR = 'bar';
export const TYPE_PIE = 'pie';
export const TYPE_HEATMAP = 'heatmap';

// Project secific echart options

const barOptions = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    textStyle: {
      color: 'white',
      fontFamily: 'FiraCode',
    },
  },
  xAxis: {
    nameTextStyle: {
      color: '#9a9a9a',
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    axisLine: {
      lineStyle: {
        color: '#9a9a9a',
      },
    },
  },
  yAxis: {
    nameTextStyle: {
      color: '#9a9a9a',
    },
    splitLine: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'white',
      },
    },
    axisLabel: {
      fontFamily: 'FiraCode',
      color: 'white',
    },
  },
};

const categoryLineOptions = {
  legend: {
    textStyle: {
      color: 'white',
      fontFamily: 'FiraCode',
    },
  },
  grid: {
    show: false,
    top: '5%',
    bottom: '5%',
    left: '6%',
    right: '5%',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    minInterval: 3600 * 1000 * 24,
    nameTextStyle: {
      color: '#9a9a9a',
      fontFamily: 'FiraCode',
    },
    axisLine: {
      lineStyle: {
        color: '#9a9a9a',
      },
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    axisLine: {
      lineStyle: {
        color: '#9a9a9a',
      },
    },
  },
};

const heatMapOptions = {
  animation: false,
  grid: {
    height: 'auto',
    width: 'auto',
  },
  xAxis: {
    type: 'category',

    axisLine: {
      lineStyle: {
        color: '#9a9a9a',
      },
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(26,26,29,0.1)', 'rgba(154,154,154,0.1)'],
      },
      show: true,
    },
  },
  yAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: '#9a9a9a',
      },
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    splitArea: {
      areaStyle: {
        color: ['#2a2a2a', '#1a1a1d'],
      },
      show: true,
    },
  },
};

export const getChartOptions = (type, overrides) => {
  const options = {};
  switch (type) {
    case TYPE_LINE:
      return merge(options, categoryLineOptions, overrides);
    case TYPE_BAR:
      return merge(options, barOptions, overrides);
    case TYPE_HEATMAP:
      return merge(options, heatMapOptions, overrides);
    default:
      break;
  }
};
