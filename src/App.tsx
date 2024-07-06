import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full bg-bgColor scroll-none">
      <div className="min-h-screen h-full w-full bg-bgBanner bg-cover bg-right">
        <div className="fixed top-0 w-full z-10">
          <Nav />
        </div>
        <div className="h-screen">
          <Banner />
        </div>
      </div>
      <div className="z-0">
        <Projects />
      </div>
    </div>
  );
}

export default App;
