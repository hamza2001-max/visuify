import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex justify-center items-center bg-gradient-to-br from-blue-600 to-blue-400 rounded-dam mx-2 my-8">
        <section className=" text-white text-center flex flex-col justify-center items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-extrabold">Welcome to Visuify</h2>
          <p className="text-lg md:text-xl">
            Transforming your pictures into with powerful editing tools.
          </p>
          <Link to="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">Get Started</Link>
        </section>
      </div>

      {/* Features Section */}
      <section id="features" className=" flex-1 py-12 bg-gray-100 mx-2 my-8 rounded-dam">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-6">Features</h3>
          <div className="grid md:grid-cols-3 gap-6 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Feature1</h4>
              <p>Details about the feature</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Feature2</h4>
              <p>Details about the feature</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Feature3</h4>
              <p>Details about the feature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 rounded-t-dam">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Visuify. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/" className="hover:underline">Twitter</Link>
            <Link to="/" className="hover:underline">LinkedIn</Link>
            <Link to="/" className="hover:underline">Github</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
