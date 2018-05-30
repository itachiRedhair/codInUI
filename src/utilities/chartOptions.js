import '../styles/_theme.scss';

import { merge } from 'lodash';

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
      color: 'white',
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    axisLine: {
      lineStyle: {
        color: 'white',
      },
    },
  },
  yAxis: {
    nameTextStyle: {
      color: 'white',
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'white',
      },
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    axisLabel: {
      color: 'white',
    },
  },
};

const categoryLineOptions = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    textStyle: {
      color: 'white',
      fontFamily: 'FiraCode',
    },
    data: [],
  },
  grid: {
    show: false,
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    minInterval: 3600 * 1000 * 24,
    nameTextStyle: {
      fontFamily: 'FiraCode',
    },
    axisLine: {
      lineStyle: {
        color: 'white',
      },
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0)',
      },
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    axisLine: {
      lineStyle: {
        color: 'white',
      },
    },
  },
};

const heatMapOptions = {

  animation: false,
  grid: {
    height: 'auto',
    width: 'auto',
    // y: "10%"
  },
  xAxis: {
    type: 'category',

    axisLine: {
      lineStyle: {
        color: 'white',
      },
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    splitArea: {
      show: true,
    },
  },
  yAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: 'white',
      },
    },
    axisLabel: {
      fontFamily: 'FiraCode',
    },
    splitArea: {
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
