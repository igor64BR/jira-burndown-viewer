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

  return (
    <View style={style}>
      <VictoryChart theme={VictoryTheme.material} padding={{ bottom: 45 }}>
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
        />
        {lineComponents}
      </VictoryChart>
    </View>
  );
}
