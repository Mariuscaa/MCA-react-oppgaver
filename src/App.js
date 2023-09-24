import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Food from "./components/Food";

const food = ['Pizza', 'Hamburger', 'Coke'];

const handleButtonClick = () => {
  console.log("Clicked");
};

const handleInputChange = (e) => {
  console.log("change");
};

const App = () => (
  <div>
    <p>Read the README.md to see the tasks</p>
    <MyComponent title="It works" />
    <Wrapper>
      <Title title="Test" />
      <p>Paragraph</p>
    </Wrapper>
    <Food foods={food}/>
    <button onClick={handleButtonClick}>Click me!</button>
    <input onChange={handleInputChange}></input>
  </div>
);

export default App;