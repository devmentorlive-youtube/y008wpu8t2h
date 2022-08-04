import { useState } from "react";

import TextField from "@/ui/forms/text-field";
import SmallButton from "@/ui/button";
import withValidation from "@/ui/forms/with-validation";
import { minLength, greaterThan } from "@/modules/validations";

const NameField = withValidation(TextField);

export default function Homepage({}) {
  const [values, setValues] = useState({
    name: "",
  });

  const { name } = values;

  const [fieldValidations, setFieldValidations] = useState({
    name: false,
  });

  function handleSave() {
    alert("would send to server if this was real");
  }

  function validateForm(field, errors) {
    setFieldValidations((prev) => ({
      ...prev,
      [field]: errors.length === 0,
    }));
  }

  function valid() {
    return Object.keys(fieldValidations).every((key) => fieldValidations[key]);
  }

  return (
    <div className="md:w-1/4 md:mx-auto md:m-16 flex flex-col gap-4">
      <NameField
        validations={[[minLength, 4]]}
        onValidation={(errors) => validateForm("name", errors)}
        value={name}
        placeholder="Your name"
        onChange={(name) =>
          setValues({
            ...values,
            name,
          })
        }
      />

      <SmallButton disabled={!valid()} onClick={handleSave}>
        Save
      </SmallButton>
    </div>
  );
}
