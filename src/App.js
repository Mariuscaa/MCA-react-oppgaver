import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

const App = () => (
  <div>
    <p>Read the README.md to see the tasks</p>
    <MyComponent title="It works"/>
    <Wrapper><Title title="Test" /></Wrapper><Title></Title>
  </div>
);

export default App;
