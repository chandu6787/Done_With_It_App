import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup"
import AppText from "./AppText";
const validationSchema=Yup.object().shape(
  {
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
  }
)
export default function LoginScreen() {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo-red.png")}
      />
      <Formik initialValues={{email:"",password:""}}
      onSubmit={(values)=>console.log(values)}
      validationSchema={validationSchema}
      >
        {
          ({handleChange,handleSubmit,errors})=>(
            <>
            
            <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={handleChange("email")}
        />
        <AppText style={{color:'red'}}>{errors.email}</AppText>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={handleChange("password")}
        />
          <AppText style={{color:'red'}}>{errors.password}</AppText>

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
