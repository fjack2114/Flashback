import React from "react";
import { FlatList, TouchableOpacity } from "react-native";

import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import TitleCard from "../components/TitleCard";
import DataManager from "../config/DataManager";

const getMemories = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getMemories(user);
};

function AccountScreen({ navigation, route }) {
  const memories = getMemories();

  return (
    <AppScreen style={{ backgroundColor: AppColors.black }}>
      <TitleCard
        name={route.params.paramName}
        image={route.params.paramImage}
      />
      <FlatList
        data={memories}
        keyExtractor={(memory) => memory.photoID.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("New Memory", { screen: "Info" })
            }
          >
            <AppCard
              title={item.title}
              category={item.category}
              location={item.location}
              image={item.image}
              date={item.date}
            />
          </TouchableOpacity>
        )}
      />
    </AppScreen>
  );
}

export default AccountScreen;
