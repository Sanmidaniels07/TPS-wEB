import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//custom files
import Home from "./pages/Home/home";
import SuccessStories from "./pages/SuccessStories";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactUs from "./pages/contactUs";
import FAQs from "./pages/faqs";
import KnowledgeBase from "./pages/KnowledgeBase";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
