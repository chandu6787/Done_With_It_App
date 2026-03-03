import React from 'react'
import { useFormikContext } from 'formik'
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
export default function AppFormField({name,...otherProps}) {
    const {setFieldTouched,handleChange,errors,touched}=useFormikContext();
  return (
    <>
     <AppTextInput
            //   autoCapitalize="none"
            //   autoCorrect={false}
            //   iconName="email"
            //   keyboardType="email-address"
            //   placeholder="Email"
            {...otherProps}
              onChangeText={handleChange(name)}
              onBlur={()=>setFieldTouched(name)}
            />
          {touched[name] && <ErrorMessage error={errors[name]}/>}
    </>
  )
}
