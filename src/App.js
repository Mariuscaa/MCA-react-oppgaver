import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Food from "./components/Food";
import Alert from "./components/Alert";
import { useState } from "react";


const App = () => {
  const food = ['Pizza', 'Hamburger', 'Coke'];
  const [inputValue, setInputValue] = useState("")
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div>
      <p>Read the README.md to see the tasks</p>
      <MyComponent title="It works" />
      <Wrapper>
        <Title title="Test" />
        <p>Paragraph</p>
      </Wrapper>
      <Food foods={food} />
      <Alert setInput={setInputValue} inputValue={inputValue} setIsClicked={setIsClicked} isClicked={isClicked}/>
      <p>{isClicked && inputValue}</p>
    </div>)
};

export default App;