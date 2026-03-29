import { useEffect, useState } from "react";
import { API } from "../api";
import VideoCard from "../components/VideoCard";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

export default function UserDashboard() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/video")
      .then((res) => setVideos(res.data))
      .catch(console.log);
  }, []);

  // ✅ Loader HERE
  if (!videos.length) return <Loader />;

  return (
    <div>
      <Navbar />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}