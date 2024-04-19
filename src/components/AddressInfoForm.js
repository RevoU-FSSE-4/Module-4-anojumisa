import { useFormik } from "formik";

const AddressInfoForm = () => {
    const formik = useFormik({
        initialValues: {
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
        },
    });
    return (
        <form autoComplete="off">
            <label htmlFor="streetAddress">Street Address</label>
            <input
                id="streetAddress"
                type="text"
                placeholder="Enter your street address"
            />
            <label htmlFor="city">City</label>
            <input id="city" type="text" placeholder="Enter your city name" />
            <label htmlFor="state">State</label>
            <input id="state" type="text" placeholder="Enter your state" />
            <label htmlFor="zipCode">ZIP Code</label>
            <input id="zipCode" type="text" placeholder="Enter your ZIP code" />
            <button>Next</button>
        </form>
        
    );
};
export default AddressInfoForm;
