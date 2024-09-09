import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Movie/:id" element={<Movie />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
