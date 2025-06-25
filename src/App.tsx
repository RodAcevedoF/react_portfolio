import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Splash } from "./pages";
import { NavBar } from "./components";

const App = () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main className="flex flex-col items-center justify-center w-full min-h-screen bg-inherit">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
