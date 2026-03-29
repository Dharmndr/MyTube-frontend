import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/video/${video._id}`)}
      className="cursor-pointer hover:scale-105 transition duration-300"
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="rounded-xl w-full h-40 object-cover"
      />

      <h3 className="mt-2 text-sm font-semibold">{video.title}</h3>
    </div>
  );
}