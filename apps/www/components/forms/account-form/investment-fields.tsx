import { useFormContext } from "react-hook-form";



import { CommonAccountFields } from "./common-account-fields";
import { NameField } from "./name-field";

export const InvestmentFormFields = () => {
  const { control } = useFormContext();
  return (
    <>
      {/* Name Field  */}
      <NameField />
      <CommonAccountFields />
    </>
  );
};
