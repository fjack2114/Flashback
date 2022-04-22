import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

function AppErrorText({ children }) {
  return <AppText style={styles.error}>{children}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
    color: "red",
  },
});

export default AppErrorText;
