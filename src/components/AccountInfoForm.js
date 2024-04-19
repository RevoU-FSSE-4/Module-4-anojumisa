import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = () => {
    console.log('submitted')
}

const AccountInfoForm = () => {
    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="username">Username</label>
            <input
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                id="username"
                type="text"
                placeholder="Enter your username"
            />
            <label htmlFor="password">Password</label>
            <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="city"
                type="password"
                placeholder="Enter your password"
            />

            <button>Submit</button>
        </form>
    );
};
export default AccountInfoForm;
