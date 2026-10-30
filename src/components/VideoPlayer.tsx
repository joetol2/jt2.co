import { useCallback, useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

// Vimeo video with the site's own controls. Vimeo's UI is switched off
// (controls=false), so there is no Vimeo logo, title, share or download
// button, and nothing links back to vimeo.com. The iframe is only created
// once someone presses play, so pages with many videos stay light.

const fmt = (s: number) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const Icon = ({ d, className = "h-5 w-5" }: { d: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d={d} />
  </svg>
);

const PLAY = "M8 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z";
const PAUSE = "M7 5h3.5v14H7zM13.5 5H17v14h-3.5z";
const VOLUME = "M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06A9 9 0 0 0 14 3.23z";
const MUTED = "M4 9v6h4l5 4V5L8 9H4zm15.59 3 2.7-2.7-1.42-1.4L18.17 10.6l-2.7-2.7-1.41 1.41 2.7 2.7-2.7 2.7 1.41 1.41 2.7-2.7 2.7 2.7 1.42-1.41z";
const EXPAND = "M4 9V4h5v2H6v3H4zm10-5h6v5h-2V6h-4V4zM4 15h2v3h3v2H4v-5zm14 3v-3h2v5h-5v-2h3z";
const SHRINK = "M7 4h2v5H4V7h3V4zm8 0h2v3h3v2h-5V4zM4 15h5v5H7v-3H4v-2zm11 0h5v2h-3v3h-2v-5z";

type Props = { id: string; title: string; poster?: string; className?: string };

const VideoPlayer = ({ id, title, poster, className = "" }: Props) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [full, setFull] = useState(false);
  const [showUi, setShowUi] = useState(true);
  const [failed, setFailed] = useState(false);

  // Create the Vimeo player the first time someone presses play.
  useEffect(() => {
    if (!started || !frameRef.current || playerRef.current) return;
    // Build the iframe ourselves rather than passing an id: given an id, the
    // SDK first looks the video up through vimeo.com's oEmbed API, an extra
    // request that can fail for videos hidden from vimeo.com.
    const iframe = document.createElement("iframe");
    iframe.src =
      `https://player.vimeo.com/video/${id}?controls=0&dnt=1&title=0&byline=0&portrait=0` +
      "&playsinline=1&autopause=1&keyboard=0&pip=0&autoplay=1";
    iframe.allow = "autoplay; fullscreen";
    iframe.title = title;
    frameRef.current.appendChild(iframe);
    const player = new Player(iframe);
    playerRef.current = player;
    player.on("loaded", () => {
      setReady(true);
      player.getDuration().then(setDuration).catch(() => {});
    });
    player.on("play", () => setPlaying(true));
    player.on("pause", () => setPlaying(false));
    player.on("ended", () => {
      setPlaying(false);
      setShowUi(true);
    });
    player.on("timeupdate", (e: { seconds: number; duration: number }) => {
      setTime(e.seconds);
      if (e.duration) setDuration(e.duration);
    });
    player.on("progress", (e: { percent: number }) => setBuffered(e.percent));
    player.on("volumechange", () => player.getMuted().then(setMuted).catch(() => {}));
    player.on("error", () => setFailed(true));
    player.play().catch(() => {});
    return () => {
      player.destroy().catch(() => {});
      playerRef.current = null;
    };
  }, [started, id, title]);

  useEffect(() => {
    const onFs = () => setFull(document.fullscreenElement === wrapRef.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // Controls fade out while the video plays and the pointer is still.
  const poke = useCallback(() => {
    setShowUi(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowUi(false), 2500);
  }, []);
  useEffect(() => () => clearTimeout(hideTimer.current), []);

  const toggle = () => {
    if (!started) return setStarted(true);
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pause().catch(() => {});
    else p.play().catch(() => {});
  };
  const seek = (v: number) => {
    setTime(v);
    playerRef.current?.setCurrentTime(v).catch(() => {});
  };
  const toggleMute = () => playerRef.current?.setMuted(!muted).then(() => setMuted(!muted)).catch(() => {});
  const toggleFull = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else wrapRef.current?.requestFullscreen().catch(() => {});
  };

  const uiVisible = !playing || showUi;
  const pct = duration ? (time / duration) * 100 : 0;

  return (
    <div
      ref={wrapRef}
      className={`group relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black select-none ${
        full ? "rounded-none border-0" : ""
      } ${playing && !showUi ? "cursor-none" : ""} ${className}`}
      onPointerMove={poke}
      onContextMenu={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        if (e.code === "Space" || e.code === "KeyK") {
          e.preventDefault();
          toggle();
        }
      }}
      tabIndex={0}
      aria-label={title}
    >
      {/* Vimeo iframe goes here; pointer events stay off so Vimeo's own UI never takes clicks. */}
      <div ref={frameRef} className="absolute inset-0 pointer-events-none [&>iframe]:h-full [&>iframe]:w-full" />

      {/* Poster until the video is playing. */}
      {(!ready || !started) && (
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #012b62 0%, #05060a 100%)" }}>
          {poster && (
            <img
              src={poster}
              alt=""
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="h-full w-full object-cover opacity-90"
            />
          )}
        </div>
      )}

      {/* Click anywhere to play or pause. */}
      <button type="button" className="absolute inset-0 h-full w-full" onClick={toggle} aria-label={playing ? "Pause" : `Play ${title}`} />

      {/* Big play button. */}
      {!playing && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span
            className={`flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#012b62] shadow-xl transition-transform duration-300 group-hover:scale-110 ${
              started && !ready ? "animate-pulse" : ""
            }`}
          >
            <Icon d={PLAY} className="h-7 w-7 translate-x-0.5" />
          </span>
        </div>
      )}

      {failed && (
        <div className="pointer-events-none absolute inset-x-0 top-4 text-center text-xs text-white/70">
          This video isn't available right now.
        </div>
      )}

      {/* Title chip before playing. */}
      {!started && (
        <p className="pointer-events-none absolute left-4 top-4 max-w-[80%] rounded bg-black/50 px-2 py-1 text-xs font-heading tracking-wide text-white/90">
          {title}
        </p>
      )}

      {/* Control bar. */}
      {started && (
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-10 transition-opacity duration-300 ${
            uiVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative mb-2 h-1 rounded-full bg-white/15">
            <div className="absolute inset-y-0 left-0 rounded-full bg-white/25" style={{ width: `${buffered * 100}%` }} />
            <div className="absolute inset-y-0 left-0 rounded-full bg-white" style={{ width: `${pct}%` }} />
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={time}
              onChange={(e) => seek(Number(e.target.value))}
              className="absolute -inset-y-2 inset-x-0 w-full cursor-pointer opacity-0"
              aria-label="Seek"
            />
          </div>
          <div className="relative flex items-center gap-4 text-white">
            <button type="button" onClick={toggle} aria-label={playing ? "Pause" : "Play"} className="hover:opacity-70">
              <Icon d={playing ? PAUSE : PLAY} />
            </button>
            <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} className="hover:opacity-70">
              <Icon d={muted ? MUTED : VOLUME} />
            </button>
            <span className="font-mono text-xs text-white/80">
              {fmt(time)} / {fmt(duration)}
            </span>
            <span className="ml-auto hidden truncate text-xs font-heading tracking-wide text-white/70 sm:block">{title}</span>
            <button type="button" onClick={toggleFull} aria-label={full ? "Exit fullscreen" : "Fullscreen"} className="hover:opacity-70">
              <Icon d={full ? SHRINK : EXPAND} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
