import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MultistepForm from "./components/MultistepForm";
import MultistepNavigation from "./components/MultistepNavigation";
import PersonalInfoForm from "./components/Form/PersonalInfoForm";
import AddressInfoForm from "./components/Form/AddressInfoForm";
import AccountInfoForm from "./components/Form/AccountInfoForm";

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "Personal Information",
        "Address Information",
        "Account Information",
    ];
    const displaySteps =(step:any)=>{
      switch(step){
        case 1:
          return <PersonalInfoForm />
        case 2:
          return <AddressInfoForm />
        case 3:
          return <AccountInfoForm />
        default:
      }
    }

    return (
        <div className="md:w-1/2 mx-auto shadow xl rounded-2xl pb-2 bg-white">
            <div className="container horizontal mt-5">
                <MultistepForm 
                  steps ={steps}
                  currentStep = {currentStep}/>
            </div>

            <MultistepNavigation />
        </div>
    );
}

export default App;
