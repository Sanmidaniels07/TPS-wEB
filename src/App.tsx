import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//custom files
import Home from "./pages/Home/home";
import SuccessStory from "./pages/successStories";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactUs from "./pages/contactUs";
import FAQs from "./pages/faqs";
import KnowledgeBase from "./pages/knowledgeBase";
import Support from "./pages/support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="./blog" element={<Blog />} />
        <Route path="./contactUs" element={<ContactUs />} />
        <Route path="./knowledgeBase" element={<KnowledgeBase />} />
        <Route path="./successStory" element={<SuccessStory />} />
        <Route path="./support" element={<Support />} />
        <Route path="./faqs" element={<FAQs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
