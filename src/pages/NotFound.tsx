import { Link } from "react-router-dom";
import PageNav from "@/components/PageNav";
import { primaryButton } from "@/components/Section";

const NotFound = () => (
  <main className="min-h-screen flex flex-col">
    <PageNav />
    <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
      <p className="text-6xl font-heading font-semibold mb-4">404</p>
      <p className="text-white/70 mb-8">This page drifted out of the field.</p>
      <Link to="/" className={primaryButton}>
        Back home
      </Link>
    </div>
  </main>
);

export default NotFound;
