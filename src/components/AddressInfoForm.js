import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const AddressInfoForm = () => {
    const {values, handleBlur, handleChange } = useFormik({
        initialValues: {
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
        },
        validationSchema: basicSchema,
    });
    return (
        <form autoComplete="off">
            <label htmlFor="streetAddress">Street Address</label>
            <input
                value={values.streetAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                id="streetAddress"
                type="text"
                placeholder="Enter your street address"
            />
            <label htmlFor="city">City</label>
            <input 
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                id="city"   
                type="text" 
                placeholder="Enter your city name" />
            <label htmlFor="state">State</label>
            <input 
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                id="state" 
                type="text" 
                placeholder="Enter your state" />
            <label htmlFor="zipCode">ZIP Code</label>
            <input 
                value={values.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
                id="zipCode" 
                type="text" 
                placeholder="Enter your ZIP code" />
            <button>Next</button>
        </form>
    );
};
export default AddressInfoForm;
