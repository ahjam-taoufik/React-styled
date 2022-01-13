import './App.css';
import  {StyledButton, FancyButton } from './components/Button/Button'



function App() {
  return (
    <div className="App">
        {/* <button>click Me</button> */}
        <StyledButton>clicked me</StyledButton>
         <br/>
         <br/>
        <StyledButton variant="outline">clicked me</StyledButton>
        <br/>
         <br/>
        <FancyButton  >clicked me</FancyButton>


    </div>
  );
}

export default App;
