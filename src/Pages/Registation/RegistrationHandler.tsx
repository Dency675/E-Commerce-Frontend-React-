import React, { useEffect, useState } from "react";
import { FormInput, RegisterFunction } from "./types";
import RegistrationPage from "./RegistrationPage";

const RegistrationHandler = () => {
  const initialFormData = {
    client_type: null,
    full_name: null,
    e_mail: null,
    password: null,
    profile_pic: null,
  };
  const [reg_details, setReg_details] = useState<FormInput>(initialFormData);

  const register: RegisterFunction = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target as HTMLFormElement);

    setReg_details({
      client_type: formData.get("client_type") as FormInput["client_type"],
      full_name: formData.get("full_name") as string,
      e_mail: formData.get("e_mail") as string,
      password: formData.get("password") as string,
      profile_pic: formData.get("profile_pic") as File,
    });
  };
  // })}

  // useEffect(() => {
  //   if (reg_details.client_type === "supplier")
  //     postSuppilerRegistration(reg_details);
  //   if (reg_details.client_type === "customer")
  //     postCustomerRegistration(reg_details);
  // }, [reg_details]);

  return (
    <div>
      <RegistrationPage register={register} />
    </div>
  );
};

export default RegistrationHandler;
