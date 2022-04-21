import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import AppText from "./AppText";
import AppColors from "../config/AppColors";

function DatePickerModal(props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [datePicked, setDatePicked] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setDatePicked(true);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="calendar"
        size={22}
        style={styles.iconLeft}
      />
      {!datePicked && <AppText style={styles.placeholderText}>Date</AppText>}
      {datePicked && (
        <AppText style={styles.placeholderText}>
          {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
        </AppText>
      )}
      <TouchableWithoutFeedback onPress={showDatepicker}>
        <MaterialCommunityIcons
          name="chevron-down"
          size={22}
          style={styles.iconRight}
        />
      </TouchableWithoutFeedback>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: AppColors.light,
    width: 225,
    height: 35,
  },
  iconLeft: {
    marginLeft: 3,
    marginTop: 8,
  },
  iconRight: {
    marginLeft: 200,
    marginTop: 8,
    position: "absolute",
  },
  placeholderText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    marginLeft: 5,
    marginTop: 8,
    color: AppColors.white,
  },
});

export default DatePickerModal;
