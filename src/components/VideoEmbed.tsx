import type { Video } from "@/data/content";

const src = (v: Video) => {
  switch (v.kind) {
    case "vimeo":
      return `https://player.vimeo.com/video/${v.id}?dnt=1&title=0&byline=0&portrait=0`;
    case "vimeo-album":
      return `https://vimeo.com/album/${v.id}/embed`;
    case "youtube":
      return `https://www.youtube-nocookie.com/embed/${v.id}?rel=0`;
    default:
      return "";
  }
};

const VideoEmbed = ({ video }: { video: Video }) => (
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
