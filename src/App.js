import { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import AddressInfoForm from "./components/AddressInfoForm";
import "./App.css";
import AccountInfoForm from "./components/AccountInfoForm";

function App() {
    const [view, setView] = useState("personal");
    return (
        <div className="App">
            <nav>
                <h3
                    onClick={() => setView("personal")}
                    style={{ color: view === "personal" ? "#fff" : "" }}
                >
                    Personal Information
                </h3>
                <h3
                    onClick={() => setView("address")}
                    style={{ color: view === "address" ? "#fff" : "" }}
                >
                    Address Information
                </h3>
                <h3
                    onClick={() => setView("account")}
                    style={{ color: view === "account" ? "#fff" : "" }}
                >
                    Account Information
                </h3>
            </nav>
            {view === "personal" ? <PersonalInfoForm /> : (
  view === "address" ? <AddressInfoForm /> : <AccountInfoForm />
)}
        </div>
    );
}

export default App;
