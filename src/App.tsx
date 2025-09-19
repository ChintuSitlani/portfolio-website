import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Background from "./components/Background/Backround";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import MyStack from "./components/MyStack/MyStack";
import Project from "./components/Project/Projects";
import Navbar from "./components/SideMenu/NavBar";

function App() {
  return (
    <div className="relative text-white">
      {/* Starfield Background (fixed) */}
      <Background />
      <Navbar />
      {/* Page Content */}
      <main className="relative z-10 px-4 md:px-8 lg:px-12">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 md:mb-50">
          <AboutMe />
        </section>

        {/* My Stack Section */}
        <section id="stack" className="mb-20 md:mb-50">
          <MyStack />
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20 md:mb-50">
          <Experience />
        </section>

        {/* Project Section */}
        <section id="projects" className="mb-20 md:mb-50">
          <Project />
        </section>
      </main>

    </div>

  );
}

export default App;
