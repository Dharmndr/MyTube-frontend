import { useState, useContext } from "react";
import { API } from "../api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);

      toast.success("Login successful 🎉"); 

      if (res.data.user.role === "admin") navigate("/admin");
      else navigate("/home");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await API.post("/auth/google", {
        name: user.displayName,
        email: user.email,
      });

      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);

      toast.success("Google login successful 🚀");

      navigate("/home");
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0f0f0f] text-white">
      <div className="bg-[#181818] p-8 rounded-2xl shadow-xl w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-[#2a2a2a]"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-[#2a2a2a]"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-red-600 p-2 rounded">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black p-2 rounded"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}