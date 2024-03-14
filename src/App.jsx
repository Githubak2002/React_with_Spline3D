import { LandingPg } from "./Pages/LandingPg";
import { Experience3D } from "./components/Experience3D";
import Footer from "./components/Footer";

import Spline from "@splinetool/react-spline";

function App() {
  return (
    <main className="max-w-[1400px] mx-auto relative">
      <LandingPg />
      <Experience3D />

      <Footer />
    </main>
  );
}

export default App;
