import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import DisplayBox from "../components/DisplayBox";
import AppText from "../components/AppText";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Name must be at least 3 characters")
    .min(3)
    .max(20)
    .label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(10).label("Password"),
});

function SignUpScreen({ navigation }) {
  return (
    <AppScreen>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <DisplayBox />

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={schema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <View style={styles.container}>
                <View style={styles.input}>
                  <View>
                    <AppTextInput
                      icon="account"
                      placeholder="Full Name"
                      placeholderTextColor={AppColors.black}
                      onChangeText={handleChange("name")}
                      onBlur={() => setFieldTouched("name")}
                      autoCorrect={false}
                    />
                    {touched.name && (
                      <AppText style={styles.error}>{errors.name}</AppText>
                    )}
                  </View>
                  <View style={styles.textInput2}>
                    <AppTextInput
                      icon="email"
                      placeholder="Email"
                      placeholderTextColor={AppColors.black}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      textContentType="emailAddress"
                      onChangeText={handleChange("email")}
                      onBlur={() => setFieldTouched("email")}
                    />
                    {touched.email && (
                      <AppText style={styles.error}>{errors.email}</AppText>
                    )}
                  </View>
                  <View style={styles.textInput3}>
                    <AppTextInput
                      onChangeText={handleChange("password")}
                      onBlur={() => setFieldTouched("password")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry
                      textContentType="password"
                      icon="lock"
                      placeholder="Password"
                      placeholderTextColor={AppColors.black}
                    />
                    {touched.password && (
                      <AppText style={styles.error}>{errors.password}</AppText>
                    )}
                  </View>
                </View>
                <View style={styles.button}>
                  <AppButton
                    title="Sign Up"
                    buttonColor="black"
                    color="white"
                    onPress={() => navigation.navigate("Home")}
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
    top: 75,
  },
  container: {
    height: 280,
    alignItems: "center",
    alignSelf: "center",
    bottom: 40,
  },
  error: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
    color: "red",
  },
  input: {
    height: 155,
    justifyContent: "space-between",
  },
  textInput2: {
    top: 55,
    position: "absolute",
  },
  textInput3: {
    top: 110,
    position: "absolute",
  },
});

export default SignUpScreen;
