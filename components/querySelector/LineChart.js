

import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const LineChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const config = {
      type: "bar",
      data: {
        labels: Array.from({ length: 60 }, (_, i) => 1961 + i),
        datasets: [
          {
            label: "Average Ocean Temperature Data",
            data: [  0.211, 0.038, 0.168, -0.246, -0.223, 0.201, -0.117, -0.126, -0.092, 0.15,
                -0.093, -0.199, 0.269, -0.181, 0.088, -0.314, 0.269, 0.001, 0.226, 0.332,
                0.443, 0.086, 0.46, 0.127, -0.031, 0.242, 0.403, 0.558, 0.331, 0.639, 0.468,
                0.184, 0.348, 0.507, 0.835, 0.355, 0.656, 0.993, 0.783, 0.728, 0.834, 1.021,
                0.893, 0.913, 1.095, 0.998, 1.195, 0.935, 0.957, 1.219, 0.921, 1.074, 1.016,
                1.053, 1.412, 1.66, 1.429, 1.29, 1.444, 1.711, 1.447, 1.394],
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    };

    // Store the Chart instance to manage it
    let chartInstance = null;

    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      // Check if there's an existing Chart instance
      if (chartInstance) {
        // Destroy the existing chart before creating a new one
        chartInstance.destroy();
      }
      chartInstance = new Chart(ctx, config);
    }

    return () => {
      if (chartInstance) {
        // Destroy the chart when the component unmounts
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas id="myChart" ref={canvasRef}></canvas>
    </div>
  );
};

export default LineChart;