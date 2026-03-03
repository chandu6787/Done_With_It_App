import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import { Formik } from "formik";
import * as Yup from "yup"
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";
import AppForm from "./AppForm";
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
      <AppForm initialValues={{email:"",password:""}}
      onSubmit={(values)=>console.log(values)}
      validationSchema={validationSchema}
      >
      
    
            
            <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          keyboardType="email-address"
          placeholder="Email"
         
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
          <SubmitButton title="Login" />
          
      </AppForm>
      
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
