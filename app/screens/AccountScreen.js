import React from "react";
import { FlatList, TouchableOpacity } from "react-native";

import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import TitleCard from "../components/TitleCard";

const memory = [
  {
    id: 1,
    title: "Across the Ditch",
    category: "Getaway",
    location: "New Zealand",
    image: require("../assets/3.jpg"),
    date: "January 2019",
  },
  {
    id: 2,
    title: "Across the Ditch",
    category: "Getaway",
    location: "New Zealand",
    image: require("../assets/3.jpg"),
    date: "January 2019",
  },
  {
    id: 3,
    title: "Across the Ditch",
    category: "Getaway",
    location: "New Zealand",
    image: require("../assets/3.jpg"),
    date: "January 2019",
  },
  {
    id: 4,
    title: "Across the Ditch",
    category: "Getaway",
    location: "New Zealand",
    image: require("../assets/3.jpg"),
    date: "January 2019",
  },
  {
    id: 5,
    title: "Across the Ditch",
    category: "Getaway",
    location: "New Zealand",
    image: require("../assets/3.jpg"),
    date: "January 2019",
  },
];

function AccountScreen({ navigation }) {
  return (
    <AppScreen style={{ backgroundColor: AppColors.black }}>
      <TitleCard name="Welcome Fred" image={require("../assets/4.png")} />
      <FlatList
        data={memory}
        keyExtractor={(memory) => memory.id.toString()}
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
