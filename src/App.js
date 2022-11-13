import "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Comapnies from "./containers/Comapnies/Comapnies";
import Header from "./containers/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Comapnies />
    </div>
  );
}

export default App;
