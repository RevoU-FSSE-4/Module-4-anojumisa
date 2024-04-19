import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = () => {
    console.log("Submitted");
};
const PersonalInfoForm = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                fullName: "",
                emailAddress: "",
                dateOfBirth: "",
            },
            validationSchema: basicSchema,
            onSubmit,
        });

    console.log(errors);
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="fullname">Full Name</label>
            <input
                value={values.fullname}
                onChange={handleChange}
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                onBlur={handleBlur}
                className={
                    errors.fullname && touched.fullname ? "input-error" : ""
                }
            />
            {errors.fullname && touched.fullname && <p className="error">{errors.fullname}</p>}

            <label htmlFor="email">Email Address</label>
            <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.fullname && touched.fullname && <p className="error">{errors.fullname}</p>}

            <label htmlFor="dob">Date of Birth</label>
            <input
                value={values.dob}
                onChange={handleChange}
                id="date"
                type="date"
                placeholder="Enter your date of birth"
            />
            <button>Next</button>
        </form>
    );
};
export default PersonalInfoForm;
