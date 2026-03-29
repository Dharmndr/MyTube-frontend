import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-[#181818]">
      <h1 className="text-xl font-bold text-red-500 cursor-pointer" onClick={() => navigate("/home")}>
        MyTube
      </h1>

      <button
        onClick={logout}
        className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}