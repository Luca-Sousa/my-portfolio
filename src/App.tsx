import { About } from "./pages/About";
import { Banner } from "./components/Banner";
import { Contact } from "./pages/Contact";
import { Nav } from "./components/Nav";
import { Projects } from "./pages/Projects";

export function App() {
  return (
    <div className="w-full">
      <div className="h-screen w-full bg-bgBanner bg-cover md:h-fit">
        <div className="fixed w-full z-50 md:static">
          <Nav />
        </div>
        <div className="h-full">
          <Banner />
        </div>
      </div>
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
