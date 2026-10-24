export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
};

// Order here is the order on the home page, work page and "next project" links.
export const projects: Project[] = [
  {
    slug: "starfield",
    title: "Starfield",
    tagline: "A warp-speed starfield you can steer",
    description:
      "A perspective-projected starfield drawn with streaked line segments and translucent clears for motion trails. The vanishing point eases toward the pointer, touch steers on mobile, and every parameter is live on a slider.",
    tags: ["Canvas 2D", "3D projection", "Pointer input"],
    image: "/work/starfield.png",
  },
  {
    slug: "physics",
    title: "Zero-G Physics",
    tagline: "Drag, throw and collide shapes in space",
    description:
      "A hand-rolled rigid-body sandbox: circles, squares and triangles drifting in zero gravity with sub-stepped integration and soft collisions. Grab anything and fling it, or hit the Artron Inhibitor to switch gravity on.",
    tags: ["Canvas 2D", "Physics", "Collision response"],
    image: "/work/physics.png",
  },
  {
    slug: "blocks",
    title: "Blocks",
    tagline: "A modern falling-blocks puzzle",
    description:
      "A complete falling-blocks game: 7-bag randomizer, SRS rotation with wall kicks, ghost piece, hold, lock delay and levels. Plays with the keyboard or with touch gestures and on-screen pads on phones.",
    tags: ["Canvas 2D", "Game loop", "Touch controls"],
    image: "/work/blocks.png",
  },
  {
    slug: "swarm",
    title: "Swarm",
    tagline: "A Galaga-style arcade shooter",
    description:
      "Enemies fly in on curved paths, settle into a breathing formation and peel off to dive. Bosses take two hits and can capture your ship with a tractor beam; rescue it for double fire. Rendered at arcade resolution and scaled up crisply.",
    tags: ["Canvas 2D", "Path animation", "Arcade"],
    image: "/work/swarm.png",
  },
];
