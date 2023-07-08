import State from "./pages/State/State";
import { useWindowDimension } from "./hooks/useWindowDimension";
import "./App.css";

function App() {
  const windowDimension = useWindowDimension();

  const { height, width } = windowDimension;
  console.log({ height, width });

  return <div className="App">{width <= 500 && <State />}</div>;
}

export default App;
