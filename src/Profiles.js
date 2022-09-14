import { NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const ActiveStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink style={ActiveStyle} to="/profiles/velopert">
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink style={ActiveStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route
          path="/*"
          exact
          render={() => <div>사용자를 선택해주세요.</div>}
        />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
