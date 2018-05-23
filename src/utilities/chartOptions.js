import { merge } from 'lodash';

export const TYPE_LINE = "line";
export const TYPE_BAR = "bar";
export const TYPE_PIE = "pie";

let barOptions = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    legend: {
        textStyle: {
            color: "white"
        }
    },
    xAxis: {
        nameTextStyle: {
            color: "white"
        },
        axisLine: {
            lineStyle: {
                color: "white"
            }
        }
    },
    yAxis: {
        nameTextStyle: {
            color: "white"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "white"
            }
        },
        axisLabel: {
            color: "white"
        }
    },
};

let categoryLineOptions = {
    tooltip: {
        trigger: "axis"
    },
    legend: {
        textStyle: {
            color: "white"
        },
        data: []
    },
    grid: {
        show: false
    },
    xAxis: {
        type: "category",
        boundaryGap: true,
        minInterval: 3600 * 1000 * 24,

        axisLine: {
            lineStyle: {
                color: "white"
            }
        },
        boundaryGap: false
    },
    yAxis: {
        type: "value",
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,0.1)"
            }
        },
        axisLine: {
            lineStyle: {
                color: "white"
            }
        }
    }
};

export const getChartOptions = (type, overrides) => {
    let options = {};
    switch (type) {
        case TYPE_LINE:
            return merge(options, categoryLineOptions, overrides);
        case TYPE_BAR:
            return merge(options, barOptions, overrides);
        default:
            break;
    }

}