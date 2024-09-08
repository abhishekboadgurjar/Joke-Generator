
import Joke from "./components/Joke";
import "./App.css";
const App = () => {
  return (
    <div className="app">
     <div className="header">
     <h1>Joke Generator</h1>
     </div>
      <Joke />
      <div className="footer">
        <p>Made with ❤️ by Abhishek Gurjar</p>
      </div>
    </div>
  );
};

export default App;
