import React from "react";
import { LineChart } from "./components/LineChart";
import jsonData from "./mock-up-data.json";
import transformData from "./transformData";
import { styles, colors } from "./components/styles";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const data = transformData(jsonData);

  const formattedLines = Object.entries(data).map(([status, dates]) =>
    Object.keys(dates).map((date) => {
      const [_, month, day] = date.split("-");
      return {
        x: `${day}/${month}`,
        y: dates[date],
        color: colors[status],
      };
    })
  );

  const makeColorBox = (color) =>
    StyleSheet.create({
      box: {
        flexDirection: "row",
        backgroundColor: color,
        height: "50%",
        width: "5%",
        flexGrow: 1,
      },
    }).box;

  const legends = Object.entries(colors).map(([status, color], idx) => {
    return (
      <View style={styles.subtitleView} key={idx}>
        <Text style={styles.subtitleText}>{status}</Text>
        <View style={makeColorBox(color)}></View>
      </View>
    );
  });

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Jira Tasks' Burndown</Text>
      </View>
      <LineChart style={styles.chart} lines={formattedLines} />
      <View style={styles.legendRegion}>{legends}</View>
    </View>
  );
}
