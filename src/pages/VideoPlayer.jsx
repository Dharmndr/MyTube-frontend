import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../api";

export default function VideoPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    API.get("/video")
      .then((res) => {
        const found = res.data.find((v) => v._id === id);
        setVideo(found);
      })
      .catch(console.log);
  }, [id]);

  if (!video) return <p className="p-6">Loading...</p>;

  // Convert YouTube URL → embed
  const videoId = video.youtubeLink.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="p-6">
      <iframe
        src={embedUrl}
        title="video"
        className="w-full h-125 rounded-xl"
        allowFullScreen
      />

      <h2 className="mt-4 text-xl font-bold">{video.title}</h2>
    </div>
  );
}