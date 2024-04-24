import { useState } from "react";
import Stepper from "./FormStepper";
import StepperControl from "./FormStepperControl";
import PersonalInfo from "./MultiStepForm/Form/PersonalInfoForm";
import AddressInfo from "./MultiStepForm/Form/AddressInfoForm";
import AccountInfo from "./MultiStepForm/Form/AccountInfoForm";

function MultiStep() {
	const [currentStep, setCurrentStep] = useState(1);
	const handleNext = () => {
		setCurrentStep(currentStep + 1);
	};
	const handlePrev = () => {
		setCurrentStep(currentStep - 1);
	};
	const handleSubmit = (event: any) => {
		event.preventDefault();
	};

	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return <PersonalInfo />;
			case 2:
				return <AddressInfo />;
			case 3:
				return <AccountInfo />;
			default:
				return <div>Form completed!</div>;
		}
	};

	return (
		<div>
			{renderStep()}
			<div className="flex items-center justify-between pt-4">
				<button
					onClick={handlePrev}
					disabled={currentStep === 1} 
					className="mx-auto mt-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
					type="submit"
				>
					Previous
				</button>
				<button
					onClick={currentStep === 3 ? handleSubmit : handleNext}
					className="mx-auto mt-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
					type="submit"
				>
					{currentStep === 3 ? "Submit" : "Next"}
				</button>
			</div>
		</div>
	);
}

export default MultiStep;
