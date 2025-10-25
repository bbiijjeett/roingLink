import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserRoutes } from "./modules/User";
// import HelperHome from "./modules/Helper/pages/Home";
// import AdminHome from "./modules/Admin/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/*" element={<UserRoutes />} />
          {/* <Route path="/helper" element={<HelperHome />} /> */}
          {/* <Route path="/admin" element={<AdminHome />} /> */}
        </Routes>
      </Router>
  )
}

export default App
