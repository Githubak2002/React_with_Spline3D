import { LandingPg } from "./Pages/LandingPg";
import { Experience3D } from "./components/Experience3D";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="max-w-[1400px] mx-auto">
      <LandingPg />
      <Experience3D />

      <Footer />
    </main>
  );
}

export default App;
