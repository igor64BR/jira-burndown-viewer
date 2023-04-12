import React from "react";
import { View } from "react-native";
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryLine } from "victory";

export function LineChart({ lines, style }) {
  const lineComponents = lines.map((lineData, idx) => (
    <VictoryLine
      style={{
        data: { stroke: lineData[0].color },
        parent: { border: "1px solid #ccc" },
      }}
      data={lineData}
      key={idx}
    />
  ));

  const maxValue = Math.max(...lines.flat().map((x) => x.y));

  const yValues = [
    0,
    maxValue * 0.25,
    maxValue * 0.5,
    maxValue * 0.75,
    maxValue,
    maxValue * 1.1,
  ].map((value) => Math.round(value));

  return (
    <View style={style}>
      <VictoryChart
        theme={VictoryTheme.material}
        padding={{ bottom: 45, left: 30, right: 30 }}
      >
        <VictoryAxis
          fixLabelOverlap
          style={{
            tickLabels: {
              angle: -90,
              textAnchor: "end",
              fill: "#F4EEE0",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: {
              fill: "#F4EEE0",
            },
          }}
          tickValues={yValues}
        />
        {lineComponents}
      </VictoryChart>
    </View>
  );
}
