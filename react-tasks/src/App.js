import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import DynamicSection from './components/DynamicSection';
import Timer from './components/Timer';
import CounterComponent from './components/CounterComponent';
import Timer30 from './components/Timer30';
import StyledText from './components/StyledText';
import CheckBoxComponent from './components/CheckBoxComponent';
import BackgroundChanger from './components/BackgroundChanger';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}

      {/* <DynamicSection sectionId={"text"}>

        <p>Məndən Əzrail ala bilmədiyi canı, gülüm 
        <br />
        İstəsən nazın ilə alsan, alarsan bəlkə.</p>

      </DynamicSection> */}

      {/* <Timer/> */}
      {/* <CounterComponent/> */}
      {/* <Timer30/> */}

      {/* <StyledText 
        fontColor={'red'}
        message={"Salam"}
      /> */}

      {/* <CheckBoxComponent/> */}
      <BackgroundChanger/>
    </div>
  );
}

export default App;
