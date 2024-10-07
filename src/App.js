import Header from "./components/Header";
import Section from "./Section";
import UserInput from "./components/UserInput";

function App() {
  return (
    <>
      <Header />
      <Section id="user-input">
        <UserInput />
      </Section>
    </>
  )
}

export default App
