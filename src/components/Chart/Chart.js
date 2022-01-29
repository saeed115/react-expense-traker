import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximumPoint = Math.max(...dataPointValues);

  const renderChartBars = props.dataPoints.map((dataPoint) => {
    return (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximumPoint}
        label={dataPoint.label}
      />
    );
  });

  return <div className="chart">{renderChartBars}</div>;
};

export default Chart;
