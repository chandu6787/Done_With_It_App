import { StyleSheet } from 'react-native'
import ImageInputList from './ImageInputList'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'
import React from 'react'
export default function FormImagePicker({name}) {
const {setFieldTouched,errors,touched,setFieldValue,values}=useFormikContext(); 
const handleAdd=uri=>{
    setFieldTouched(name, true);
    setFieldValue(name, [...values[name], uri]);
  }
  const handleRemove=uri=>{
    setFieldTouched(name, true);
    setFieldValue(name, values[name].filter((imageUri)=>imageUri!==uri));
  } 
  return (
    <>
    <ImageInputList
    imageUris={values[name]}
    onAddImage={handleAdd}
    onRemoveImage={handleRemove}
    />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  )
}

const styles = StyleSheet.create({})
