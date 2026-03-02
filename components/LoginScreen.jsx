import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import { Formik } from "formik";

export default function LoginScreen() {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo-red.png")}
      />
      <Formik initialValues={{email:"",password:""}}
      onSubmit={(values)=>console.log(values)}>
        {
          ({handleChange,handleSubmit})=>(
            <>
            
            <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={handleChange("email")}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={handleChange("password")}
        />
          <AppButton title="Login" onPress={handleSubmit} />

            </>
          )
        }
      </Formik>
      
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
