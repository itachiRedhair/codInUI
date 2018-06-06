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
      type: 'shadow'
    }
  },
  legend: {
    textStyle: {
      color: 'white',
      fontFamily: 'FiraCode'
    }
  },
  xAxis: {
    nameTextStyle: {
      color: '#9a9a9a'
    },
    axisLabel: {
      fontFamily: 'FiraCode'
    },
    axisLine: {
      lineStyle: {
        color: '#9a9a9a'
      }
    }
  },
  yAxis: {
    nameTextStyle: {
      color: 'white'
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'white'
      }
    },
    axisLabel: {
      fontFamily: 'FiraCode',
      color: 'white'
    }
  }
};

const categoryLineOptionsFormatter = (params) => {
  const error = params[0];
  const warning = params[1];
  const maintainability = params[2];

  const errorText = `<span class="text-danger"><i class="fa fa-times"></i> ${error.data}</span>`;
  const warningText = `<span class="text-warning"><i class="fa fa-exclamation-triangle"></i> ${
    warning.data
  }</span>`;
  const maintainabilityText = `<span class="text-info"><i class="fa fa-area-chart"></i> ${
    maintainability.data
  }</span>`;

  return `${errorText} | ${warningText} | ${maintainabilityText}`;
};

const categoryLineOptions = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#121212',
    textStyle: {
      color: '#9a9a9a',
      fontFamily: 'FiraCode'
    },
    formatter: categoryLineOptionsFormatter
  },
  legend: {
    textStyle: {
      color: 'white',
      fontFamily: 'FiraCode'
    }
  },
  grid: {
    show: false,
    top: '5%',
    bottom: '5%',
    left: '6%',
    right: '5%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    minInterval: 3600 * 1000 * 24,
    nameTextStyle: {
      color: '#9a9a9a',
      fontFamily: 'FiraCode'
    },
    axisLine: {
      lineStyle: {
        color: '#9a9a9a'
      }
    },
    axisLabel: {
      fontFamily: 'FiraCode'
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLabel: {
      fontFamily: 'FiraCode'
    },
    axisLine: {
      lineStyle: {
        color: '#9a9a9a'
      }
    }
  }
};

const heatMapOptions = {
  animation: false,
  grid: {
    height: 'auto',
    width: 'auto'
  },
  xAxis: {
    type: 'category',

    axisLine: {
      lineStyle: {
        color: 'white'
      }
    },
    axisLabel: {
      fontFamily: 'FiraCode'
    },
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: 'white'
      }
    },
    axisLabel: {
      fontFamily: 'FiraCode'
    },
    splitArea: {
      show: true
    }
  }
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
