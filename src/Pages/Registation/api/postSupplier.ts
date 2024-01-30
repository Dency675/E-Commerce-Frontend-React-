import { APIResponseType } from "../../../components/APIHandler/types";
import { baseUrl } from "../../../config/configUrl";
import { FormInput } from "../types";
import axios, { AxiosError } from "axios";
import { APIResponseHandler } from "../../../../src/components/APIHandler/APIResponseHandler";

export const postSupplierRegistration = async (formData: FormInput) => {
  return await axios
    // .post(`${baseUrl.supplier}/supplierRegistration`, formData, {
    .post(`http://localhost:3000/api/v1/supplierRegistration`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    // .then((data: any) => data.data)
    .then((res: any) =>
      APIResponseHandler(res as APIResponseType, "Registration Successful")
    )
    .catch((err: any) => APIResponseHandler(err as AxiosError));
};
