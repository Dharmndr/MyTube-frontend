import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0f0f0f] text-white">
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-red-500">MyTube</span>
        </h1>

        <p className="text-gray-400 mb-6">
          Login / Signup to watch amazing videos 🚀
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-red-600 px-6 py-2 rounded hover:bg-red-700"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}