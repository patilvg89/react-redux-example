import './App.css';
import NavBar from './components/NavBar';
import ButtonContainer from './components/ButtonContainer';
import CenterComponent from './components/CenterComponent';

function App() {
  return (
    <div>
      <div style={{height: '60px', backgroundColor:'pink'}}>
        <span style={{display:'block'}}>Functional Component</span>
        <NavBar></NavBar>
      </div>
      <div style={{height: '60px', backgroundColor:'violet'}}>
        <span style={{display:'block'}}>Functional Component</span>
        <ButtonContainer />
      </div>
     
      <div style={{height: '60px', backgroundColor:'gray'}}>
        <span style={{display:'block'}}>Pure Component</span>
        <CenterComponent></CenterComponent>
      </div>

     
    </div>
  );
}

export default App;
