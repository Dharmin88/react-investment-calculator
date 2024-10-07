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

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            };
        });
    }
    return (
        <>
            <Header />
            <Section id="user-input">
                <UserInput onChange={handleChange} userInput={userInput}/>
            </Section>
            <Section id="result">
                <Results input={userInput} />
            </Section>
        </>
    );
}

export default App
