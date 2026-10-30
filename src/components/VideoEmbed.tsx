import type { Video } from "@/data/content";
import VideoPlayer from "@/components/VideoPlayer";

// Posters are saved from Vimeo into public/media/vimeo/<id>.jpg.
export const vimeoPoster = (id: string) => `${import.meta.env.BASE_URL}media/vimeo/${id}.jpg`;

const src = (v: Video) => {
  switch (v.kind) {
    case "youtube":
      return `https://www.youtube-nocookie.com/embed/${v.id}?rel=0`;
    default:
      return "";
  }
};

const VideoEmbed = ({ video }: { video: Video }) =>
  video.kind === "vimeo" ? (
    <VideoPlayer id={video.id} title={video.title} poster={vimeoPoster(video.id)} />
  ) : (
  <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black">
    {video.kind === "file" ? (
      <video
        src={video.src}
        poster={video.poster}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        aria-label={video.title}
      />
    ) : (
      <iframe
        src={src(video)}
        title={video.title}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    )}
  </div>
  );

export default VideoEmbed;
