import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./Pages/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
