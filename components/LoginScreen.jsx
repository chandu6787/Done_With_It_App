import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import { Formik } from "formik";
import * as Yup from "yup"
import AppText from "./AppText";
import ErrorMessage from "./ErrorMessage";
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
          ({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
            <>
            
            <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={handleChange("email")}
          onBlur={()=>setFieldTouched("email")}
        />
      {touched.email && <ErrorMessage error={errors.email}/>}

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={handleChange("password")}
        />
       {touched.password && <ErrorMessage error={errors.password}/> }
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
