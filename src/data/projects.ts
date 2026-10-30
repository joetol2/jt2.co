export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  repo?: string;
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
    image: `${import.meta.env.BASE_URL}work/starfield.png`,
  },
  {
    slug: "physics",
    title: "Zero-G Physics",
    tagline: "Drag, throw and collide shapes in space",
    description:
      "A hand-rolled rigid-body sandbox: circles, squares and triangles drifting in zero gravity with sub-stepped integration and soft collisions. Grab anything and fling it, or hit the Artron Inhibitor to switch gravity on.",
    tags: ["Canvas 2D", "Physics", "Collision response"],
    image: `${import.meta.env.BASE_URL}work/physics.png`,
  },
  {
    slug: "muscle-arm",
    title: "Muscle Arm",
    tagline: "A robot arm driven by four artificial muscles",
    description:
      "A browser port of my efm-muscle-sim project: a two-joint arm moved by antagonistic pairs of simulated electrofluidic fiber muscles, the kind described in recent Science Robotics research. Each muscle responds with a lag, so the controller has to plan for it. Slow the muscles down and the arm overshoots. Independent work, not affiliated with the original researchers.",
    tags: ["Canvas 2D", "Robotics", "Control"],
    image: `${import.meta.env.BASE_URL}work/muscle-arm.png`,
    repo: "https://github.com/joetol2/efm-muscle-sim",
  },
  {
    slug: "blocks",
    title: "Blocks",
    tagline: "A modern falling-blocks puzzle",
    description:
      "A complete falling-blocks game: 7-bag randomizer, SRS rotation with wall kicks, ghost piece, hold, lock delay and levels. Plays with the keyboard or with touch gestures and on-screen pads on phones.",
    tags: ["Canvas 2D", "Game loop", "Touch controls"],
    image: `${import.meta.env.BASE_URL}work/blocks.png`,
  },
  {
    slug: "swarm",
    title: "Swarm",
    tagline: "A Galaga-style arcade shooter",
    description:
      "Enemies fly in on curved paths, settle into a breathing formation and peel off to dive. Bosses take two hits and can capture your ship with a tractor beam; rescue it for double fire. Rendered at arcade resolution and scaled up crisply.",
    tags: ["Canvas 2D", "Path animation", "Arcade"],
    image: `${import.meta.env.BASE_URL}work/swarm.png`,
  },
];

// Older fizx soft-body pages from sim2real, listed at the bottom of the home
// and work pages for review before they join the main list.
export const reviewProjects = [
  {
    slug: "soft-body",
    title: "Soft-Body Physics",
    tagline: "The original fizx soft-body demo",
    dir: "fizx",
  },
  {
    slug: "soft-body-zero-g",
    title: "Soft-Body Zero-G",
    tagline: "The first zero-gravity scene, built on fizx",
    dir: "fizx2",
  },
];

// Sites shown on the lab page.
export type Tool = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
};

export const tools: Tool[] = [
  {
    title: "3RD SPACE",
    tagline: "A community venue's website and booking system, run on free Google tools",
    description:
      "The website for 3RD SPACE, a place to gather in the Santa Ynez Valley. People request a date and see a minimum price while they fill in the form. One Google Apps Script file is the whole backend: it saves each request to Google Sheets, emails the space manager, and flags clashes with the calendar. The site rebuilds itself from Google Calendar every hour, with no servers to run. I also wrote its documentation, including a system map and a staff guide that turns answering a request into two steps for a non-technical space manager.",
    tags: ["React", "Google Apps Script", "GitHub Pages"],
    image: `${import.meta.env.BASE_URL}work/3rd-space.jpg`,
    href: "https://3rdspacesyv.com",
  },
  {
    title: "Aware",
    tagline: "A safety check-in app for people heading outdoors",
    description:
      "Tell Aware where you're going and when you'll be back. It runs a countdown you can extend or end by marking yourself safe, keeps your emergency contacts and trip history, and works with no account and no backend. A deliberately simple prototype with no AI in it, and SMS check-ins on the roadmap.",
    tags: ["React", "Prototype", "Mobile web"],
    image: `${import.meta.env.BASE_URL}work/aware.png`,
    href: "https://joetol2.github.io/aware-adventures/",
  },
  {
    title: "AI Law & Policy Hub",
    tagline: "A living guide to U.S. rules on AI-generated advertising",
    description:
      "A reference site I built for a creative agency that tracks federal and state laws, agency actions and pending bills on deepfakes, digital replicas, synthetic media and AI disclosure in advertising. Claude Code runs every week in GitHub Actions to research new developments and update the page.",
    tags: ["Claude Code", "GitHub Actions", "AI policy"],
  },
];
