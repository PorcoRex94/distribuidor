import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Index } from "./pages/Index";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Textil } from "./pages/Textil";
import { Packaging } from "./pages/Packaging";
import { Footer } from "./components/footer/Footer";
import { ChatBot } from "./components/chat-bot/ChatBot";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <ChatBot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/textil" element={<Textil />} />
          <Route path="/packaging" element={<Packaging />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
