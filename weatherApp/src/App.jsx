import "./App.css";
import { WeatherContextProvider } from "./context/WeatherContextProvider";
import UserInput from "./components/UserInput";
import Card from "./components/Card";

function App() {
  return (
    <div className="app-component">
      <div className="components">
        <WeatherContextProvider>
          <UserInput />
          <Card />
        </WeatherContextProvider>
      </div>
    </div>
  );
}

export default App;
