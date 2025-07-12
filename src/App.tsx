import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Splash, NotFound } from "./pages";
import { Footer, NavBar } from "./components";
import { MailForm } from "./components";
import { Modal } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <header>
          <NavBar />
        </header>
        <main className="flex flex-col items-center justify-center w-full h-auto bg-inherit">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <Modal>
        <MailForm />
      </Modal>
    </>
  );
};

export default App;
