

//HOC
import DefaultHOC from "./HOC/default.HOC";

//components
import temp from "./components/Temp";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component = {temp} />
    </>
  );
}

export default App;
