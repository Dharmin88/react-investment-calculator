import {useState} from "react";
import Header from "./components/Header";
import Section from "./Section";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration > 0;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            };
        });
    }
    return (
        <>
            <Header />
            <Section id="user-input">
                <UserInput onChange={handleChange} userInput={userInput}/>
            </Section>
            {inputIsValid && <Results input={userInput} />}
            {!inputIsValid && (<p className="center">Please enter a duration greater than zero.</p>)}
        </>
    );
}

export default App
