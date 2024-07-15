import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="w-full">
      <div className="h-screen w-full bg-bgBanner bg-cover">
        <div className="fixed w-full z-50">
          <Nav />
        </div>
        <div className="h-full">
          <Banner />
        </div>
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <About />
      </div>

      <div className="">
        <Contact />
      </div>
    </div>
  );
}

export default App;
