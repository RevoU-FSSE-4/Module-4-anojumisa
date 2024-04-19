import { useFormik } from "formik";

const AccountInfoForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
    });
    return (
        <form autoComplete="off">
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                placeholder="Enter your username"
            />
            <label htmlFor="password">Password</label>
            <input
                id="city"
                type="password"
                placeholder="Enter your password"
            />

            <button>Submit</button>
        </form>
    );
};
export default AccountInfoForm;
