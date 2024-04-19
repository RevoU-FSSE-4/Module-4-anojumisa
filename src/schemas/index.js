import * as yup from "yup";

export const basicSchema = yup.object().shape({
    fullName: yup.string().required("Required"),
    emailAddress: yup.string().email("Please enter a valid email").required("Required"),
    dateOfBirth: yup.date().required("Date of Birth is required").required("Required")
})