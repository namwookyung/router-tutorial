import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={<Home/>} />
        <Route path="/about" component={<About/>} />
      </Routes>
    </div>
  );
};

export default App;
