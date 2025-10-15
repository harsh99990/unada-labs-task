import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
};

export default AllRoutes;
