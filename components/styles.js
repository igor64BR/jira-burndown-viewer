import { StyleSheet } from "react-native";

const chartSize = "30%";

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#393646",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "3%",
  },

  chart: {
    alignItems: "center",
    justifyContent: "center",

    height: chartSize,
    width: chartSize,
    padding: 10,

    flexGrow: 2,
  },

  header: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "3%",
  },

  headerText: {
    color: "#CBE4DE",
    fontSize: 40,
  },

  legendRegion: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },

  subtitleView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 200,
  },

  subtitleText: {
    flexGrow: 1,
    width: "10%",
    color: "#CBE4DE",
  },
});

const colors = {
  "To Do": "#F2F7A1",
  "In Progress": "#F4EEE0",
  HOLD: "#6D67E4",
  Done: "#46C2CB",
};

export { styles, colors };
