import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import Work from "./pages/Work.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Starfield from "./pages/Starfield.tsx";
import Physics from "./pages/Physics.tsx";
import Blocks from "./pages/Blocks.tsx";
import Swarm from "./pages/Swarm.tsx";
import Review from "./pages/Review.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/starfield" element={<Starfield />} />
      <Route path="/work/physics" element={<Physics />} />
      <Route path="/work/blocks" element={<Blocks />} />
      <Route path="/work/swarm" element={<Swarm />} />
      <Route path="/review/:slug" element={<Review />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Short links matching the sim2real sandbox URLs */}
      <Route path="/starfield" element={<Navigate to="/work/starfield" replace />} />
      <Route path="/blocks" element={<Navigate to="/work/blocks" replace />} />
      <Route path="/swarm" element={<Navigate to="/work/swarm" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
