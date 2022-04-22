import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import DataManager from "../config/DataManager";
import DisplayBoxLogin from "../components/DisplayBoxLogin";

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(10).label("Password"),
});

const users = [
  {
    id: "user1",
    name: "Frederick Jack",
    email: "admin@flashback.com",
    password: "1234",
    image: require("../assets/4.png"),
  },
];

const validateUser = ({ email, password }) => {
  return (
    users.filter((user) => user.email === email && user.password === password)
      .length > 0
  );
};

const getUser = ({ email }) => {
  return users.find((user) => user.email === email);
};

const createUser = ({ email }) => {
  let commonData = DataManager.getInstance();
  let userID = getUser({ email }).id;
  commonData.setUserID(userID);
};

function LoginScreen({ navigation }) {
  return (
    <AppScreen>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <DisplayBoxLogin title="Login" color="white" />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            if (validateUser(values)) {
              resetForm();
              createUser(values);
              navigation.navigate("Home", {
                screen: "Account",
                params: {
                  paramEmail: values.email,
                  paramName: getUser(values).name,
                  paramImage: getUser(values).image,
                },
              });
            } else {
              resetForm();

              alert("Invalid Details");
            }
          }}
          validationSchema={schema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
            values,
          }) => (
            <>
              <View style={styles.container}>
                <View style={styles.input}>
                  <AppTextInput
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                    icon="email"
                    value={values.email}
                    placeholder="Email"
                    placeholderTextColor={AppColors.black}
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                  />
                  {touched.email && (
                    <AppText style={styles.error}>{errors.email}</AppText>
                  )}
                  <View style={styles.textInput}>
                    <AppTextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry
                      textContentType="password"
                      icon="lock"
                      value={values.password}
                      placeholder="Password"
                      placeholderTextColor={AppColors.black}
                      onChangeText={handleChange("password")}
                      onBlur={() => setFieldTouched("password")}
                    />
                    {touched.password && (
                      <AppText style={styles.error}>{errors.password}</AppText>
                    )}
                  </View>
                </View>
                <View style={styles.button}>
                  <AppButton
                    title="Login"
                    buttonColor="black"
                    color="white"
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 80,
  },
  container: {
    height: 280,
    alignItems: "center",
  },
  error: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
    color: "red",
  },
  input: {
    top: 30,
    height: 105,
  },
  textInput: {
    top: 55,
    position: "absolute",
  },
});

export default LoginScreen;
