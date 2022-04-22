import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import AppColors from "../config/AppColors";
import AppErrorText from "../components/AppErrorText";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import DataManager from "../config/DataManager";
import DatePickerModal from "../components/DatePickerModal";

function CreateScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const [titleError, setTitleError] = useState("");
  const [dateError, setDateError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const dateReturned = (childdata) => {
    setDate(childdata);
  };

  const doErrorCheck = () => {
    setTitleError(title.length > 0 ? "" : "Please set a valid Title");
  };

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setImage({ path: pickerResult.uri });
  };

  const addMemory = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();

    const memories = commonData.getMemories(user);
    const imageID = memories.length + 1;
    const newMemory = {
      title: title,
      category: category,
      location: location,
      photoID: imageID,
      date: date,
      userid: user,
      image: image,
    };
    console.log(newMemory);
    commonData.addMemory(newMemory);
  };

  return (
    <AppScreen style={{ backgroundColor: AppColors.black }}>
      <View style={styles.container}>
        <AppTextInput
          icon="format-title"
          placeholder="Title"
          placeholderTextColor={AppColors.black}
          color="white"
          value={title}
          onChangeText={(inputText) => setTitle(inputText)}
        />

        {titleError.length > 0 ? (
          <AppErrorText>{titleError}</AppErrorText>
        ) : (
          <></>
        )}

        <DatePickerModal dateReturned={dateReturned} />
        <AppTextInput
          icon="map-marker"
          placeholder="Location"
          placeholderTextColor={AppColors.black}
          value={location}
          onChangeText={(inputText) => setLocation(inputText)}
        />
        <AppTextInput
          icon="shape"
          placeholder="Category"
          placeholderTextColor={AppColors.black}
          value={category}
          onChangeText={(inputText) => setCategory(inputText)}
        />
      </View>
      <TouchableOpacity
        style={styles.iconTouchable}
        onPress={openImagePickerAsync}
      >
        <MaterialCommunityIcons name="camera" size={45} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.displayBox}>
        {image && (
          <AppCard
            title={title}
            category={category}
            location={location}
            date={date}
            image={image}
          />
        )}
      </View>
      <View style={styles.button}>
        <AppButton
          title="Create"
          buttonColor="light"
          color="white"
          onPress={() => {
            addMemory();
            navigation.navigate("Info");
          }}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginTop: 600,
    height: 125,
    position: "absolute",
  },
  container: {
    alignItems: "center",
    height: 200,
    position: "absolute",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 50,
  },
  displayBox: {
    marginTop: 350,
    borderRadius: 20,
    alignSelf: "center",
  },
  icon: {
    color: AppColors.white,
    height: 45,
    width: 45,
    alignSelf: "center",
  },
  iconTouchable: {
    height: 45,
    width: 45,
    marginTop: 275,
    alignSelf: "center",
    position: "absolute",
  },
});

export default CreateScreen;
