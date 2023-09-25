export default function Alert({setInput, inputValue}) {
  const handleButtonClick = () => {
    console.log('Clicked');
    alert(inputValue);
  };

  const handleInputChange = (e) => {
    console.log('change');
    setInput(e.target.value);
  };
  
  return (
    <div>
      <button onClick={handleButtonClick}>Alert!</button>
      <input onChange={handleInputChange} value={inputValue}></input>
    </div>
  );
}
