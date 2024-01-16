import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import DynamicSection from './components/DynamicSection';
import Timer from './components/Timer';
import CounterComponent from './components/CounterComponent';
import Timer30 from './components/Timer30';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}

      {/* <DynamicSection
        sectionId={"text"}
        htmlContent={<p>Məndən Əzrail ala bilmədiyi canı, gülüm <br/>İstəsən nazın ilə alsan, alarsan bəlkə.</p>}
      /> */}

      {/* <Timer/> */}
      {/* <CounterComponent/> */}
      <Timer30/>
    </div>
  );
}

export default App;
