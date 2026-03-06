import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "./AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, placeholder,PickerItemComponent,numberOfColumns }) {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext();

  return (
    <>
      <AppPicker
        numberOfColumns={numberOfColumns}
        items={items}
        onSelectItem={(item) => {
          setFieldValue(name, item);
          setFieldTouched(name, true);
        }}
        placeholder={placeholder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
      />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}

export default AppFormPicker;
