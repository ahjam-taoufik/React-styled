import './App.css';
import StyledButton from './components/Button/Button'


function App() {
  return (
    <div className="App">
        {/* <button>click Me</button> */}
        <StyledButton>clicked me</StyledButton>
   
         <br/>
         <br/>
   
    
        <StyledButton variant="outline">clicked me</StyledButton>


    </div>
  );
}

export default App;
