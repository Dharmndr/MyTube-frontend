import { useState, useContext } from "react";
import { API } from "../api";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  // 🔐 Restrict access
  if (!user || user.role !== "admin") {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl text-red-500">Access Denied</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-red-600 px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      await API.post("/video/upload", {
        title,
        youtubeLink,
        thumbnail,
      }); 

      toast.success("Video uploaded successfully");

      // reset form
      setTitle("");
      setYoutubeLink("");
      setThumbnail("");

    } catch (err) {
      toast.success(err.response?.data?.msg || "Upload failed");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={handleUpload}
          className="bg-[#181818] p-8 rounded-2xl shadow-xl w-96 space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">
            Upload Video
          </h2>

          <input
            type="text"
            placeholder="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-[#2a2a2a]"
          />

          <input
            type="text"
            placeholder="YouTube Link"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="w-full p-2 rounded bg-[#2a2a2a]"
          />

          <input
            type="text"
            placeholder="Thumbnail URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            className="w-full p-2 rounded bg-[#2a2a2a]"
          />

          <button className="w-full bg-red-600 p-2 rounded hover:bg-red-700">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}