import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          path="/*"
          element={
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
