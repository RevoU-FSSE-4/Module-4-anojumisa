import * as yup from "yup";

// const passwordRules = ?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]);

export const basicSchema = yup.object().shape({
    fullName: yup.string().required("Required"),
    emailAddress: yup.string().email("Please enter a valid email").required("Required"),
    dateOfBirth: yup.date().required("Date of Birth is required").required("Required"),
    // username: yup.string().required("Required"),
    // password: yup.string().min(5).matches(passwordRules, {message: "Please create a stronger password"}).required("Required")
})