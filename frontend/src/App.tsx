import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        {/* Your page content will go here */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Welcome to Power Drive Hydraulics</h1>
          <p>Leading manufacturer of motors, hydraulic winches, and gear reducers.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
