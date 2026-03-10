import React from 'react'
import { useFormikContext } from 'formik'
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
export default function AppFormField({name,...otherProps}) {
    const {setFieldTouched,handleChange,setFieldValue,errors,touched,values}=useFormikContext();
  return (
    <>
     <AppTextInput
            //   autoCapitalize="none"
            //   autoCorrect={false}
            //   iconName="email"
            //   keyboardType="email-address"
            //   placeholder="Email"
            {...otherProps}
              onChangeText={(text)=>setFieldValue(name,text)}
              onBlur={()=>setFieldTouched(name)}
              value={values[name]}
            />
          {touched[name] && <ErrorMessage error={errors[name]}/>}
    </>
  )
}
