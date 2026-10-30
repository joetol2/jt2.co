import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import Index from "./pages/Index.tsx";
import Work from "./pages/Work.tsx";
import Case from "./pages/Case.tsx";
import Lab from "./pages/Lab.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Starfield from "./pages/Starfield.tsx";
import Physics from "./pages/Physics.tsx";
import Blocks from "./pages/Blocks.tsx";
import Swarm from "./pages/Swarm.tsx";
import MuscleArm from "./pages/MuscleArm.tsx";
import Review from "./pages/Review.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Older URLs from the first version of the site.
const OldReview = () => <Navigate to={`/lab/review/${useParams().slug}`} replace />;

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:slug" element={<Case />} />
      <Route path="/lab" element={<Lab />} />
      <Route path="/lab/starfield" element={<Starfield />} />
      <Route path="/lab/physics" element={<Physics />} />
      <Route path="/lab/blocks" element={<Blocks />} />
      <Route path="/lab/swarm" element={<Swarm />} />
      <Route path="/lab/muscle-arm" element={<MuscleArm />} />
      <Route path="/lab/review/:slug" element={<Review />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {["starfield", "physics", "blocks", "swarm"].flatMap((slug) => [
        <Route key={`w-${slug}`} path={`/work/${slug}`} element={<Navigate to={`/lab/${slug}`} replace />} />,
        <Route key={`r-${slug}`} path={`/${slug}`} element={<Navigate to={`/lab/${slug}`} replace />} />,
      ])}
      <Route path="/review/:slug" element={<OldReview />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
