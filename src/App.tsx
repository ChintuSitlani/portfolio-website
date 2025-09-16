import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Background from "./components/Background/Backround";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="relative text-white">
      {/* Starfield Background (fixed) */}
      <Background />

      {/* Page Content */}
      <main className="relative z-10 px-4 md:px-8 lg:px-12">
        {/* Hero Section */}
        <section>
          <Hero />
        </section>

        {/* About Section */}
        <AboutMe />

        {/* Skills Section */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-transparent">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-6 text-lg">
            <li>Angular 19</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Tailwind</li>
            <li>Express</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-transparent">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="max-w-2xl text-center">
            Worked as a Junior Developer customizing Angular, PHP, and Microsoft Dynamics Business Central.
            Built CRM, Retail POS, and E-commerce systems.
          </p>
        </section>
      </main>
    </div>

  );
}

export default App;
