import React from "react";
import {} from "react-native";

import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import TitleCard from "../components/TitleCard";

function AccountScreen(props) {
  return (
    <AppScreen style={{ backgroundColor: AppColors.black }}>
      <TitleCard name="Welcome Fred" image={require("../assets/4.png")} />
      <AppCard
        title="Across the Ditch"
        category="Getaway"
        date="January 2019"
        location="New Zealand"
        image={require("../assets/1.jpg")}
      />
      <AppCard
        title="Across the Ditch"
        category="Getaway"
        date="January 2019"
        location="New Zealand"
        image={require("../assets/2.jpg")}
      />
      <AppCard
        title="Across the Ditch"
        category="Getaway"
        date="January 2019"
        location="New Zealand"
        image={require("../assets/3.jpg")}
      />
    </AppScreen>
  );
}

export default AccountScreen;
