// Site copy. Claims follow Joe's approved Master Career Record v1.1: no
// generated metrics, no client names from the current agency role.

const media = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;
const efm = (file: string) => media(`efm/${file}`);

export const CONTACT_EMAIL = "jt@jt2.co";
export const LINKEDIN_URL = "https://www.linkedin.com/in/jtol2";

export type Video =
  | { kind: "vimeo"; id: string; title: string }
  | { kind: "youtube"; id: string; title: string }
  | { kind: "file"; src: string; poster?: string; title: string };

export type Category =
  | "ai"
  | "streaming"
  | "advertising"
  | "storytelling"
  | "sites"
  | "early"
  | "research"
  | "experiments"
  | "prototypes";

// Work sub-nav tabs, in order. Each case study belongs to one.
export const categories: { slug: Category; label: string; blurb: string }[] = [
  { slug: "ai", label: "AI & Robotics", blurb: "Putting AI to work at a creative agency, and teaching robots in simulation." },
  { slug: "streaming", label: "Streaming & Platforms", blurb: "The services and live events behind global streaming." },
  { slug: "advertising", label: "Advertising", blurb: "Interactive ad products and sponsorships across TV, streaming and digital." },
  { slug: "storytelling", label: "Interactive Storytelling", blurb: "Digital worlds, web series and social video that took NBC shows beyond the broadcast." },
  { slug: "sites", label: "Websites", blurb: "Websites I've designed and built for clients." },
  { slug: "early", label: "Early Web & Independent", blurb: "Where it started, and the projects I take on now." },
];

// Visuals inside a chapter: a still image, or a short silent loop.
export type Media = (
  | { kind: "image"; src: string; alt: string }
  | { kind: "loop"; src: string; poster: string; alt: string }
  | { kind: "arm" }
) & { caption?: string };

// Lab sub-nav tabs that hold case studies. The Interactive tab holds the
// canvas pieces in projects.ts instead.
export const labCategories: { slug: Category; label: string; blurb: string }[] = [
  { slug: "research", label: "Research", blurb: "Longer projects and papers." },
  { slug: "experiments", label: "Experiments", blurb: "Smaller studies: a question, a setup and what happened." },
  { slug: "prototypes", label: "Prototypes", blurb: "Small products built to test an idea." },
];

export const isLab = (c: Category) => labCategories.some((l) => l.slug === c);

// Lab case studies live under /lab, everything else under /work.
export const caseHref = (study: { slug: string; category: Category }) =>
  `${isLab(study.category) ? "/lab" : "/work"}/${study.slug}`;

export type CaseStudy = {
  slug: string;
  category: Category;
  title: string;
  org: string;
  years: string;
  role: string;
  summary: string;
  body: string[];
  highlights?: string[];
  stat?: { value: string; label: string };
  image?: string;
  videos?: Video[];
  // Story told in chapters, each with optional visuals, after the body.
  chapters?: { title: string; text: string[]; media?: Media[] }[];
  // Detail for technical readers, shown as an "Under the hood" section.
  technical?: {
    timeline: { version: string; task: string; result: string }[];
    sections: { title: string; text?: string[]; code?: string; rows?: [string, string][] }[];
  };
  // Case studies linked as cards from this page.
  related?: string[];
  // More Vimeo videos, shown in a grid under the write-up.
  reel?: { title: string; videos: { id: string; title: string }[] }[];
  gallery?: { src: string; alt: string }[];
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "agency-ai",
    category: "ai",
    title: "Bringing AI into a creative agency",
    org: "Creative agency",
    years: "2025 to now",
    role: "AI Product Strategy & Advanced Advertising Initiatives",
    summary:
      "Agency AI lead, turning generative AI experiments into tools people use and work clients pay for.",
    body: [
      "I lead AI product strategy for a creative agency. Day to day that means deciding which AI capabilities are worth building, getting them into the hands of the people who make the work, and packaging the best of them into services clients will pay for.",
      "I was product lead on an AI readiness audit for a global consumer brand that became completed paid work. Inside the agency I specified a creative search assistant in Teams, built with Copilot Studio, that turns a plain-language request into a search of the internal asset library, and I built and tested a meeting-notes agent for the PMO. I co-own the agency's creative AI production process built around Adobe Firefly, and I set up a reference hub for AI law and policy that the team uses. I've also run practical Copilot training for staff.",
      "I'm also designing the next step: an agentic creative workflow that tracks every job and asset with shared identifiers and keeps a person approving each stage.",
    ],
    highlights: [
      "Product lead on completed paid AI audit work for a global consumer brand",
      "Creative search assistant in Teams, with internal asset search live",
      "Co-owner of the agency's Firefly-based creative AI production process",
      "Meeting-notes agent built and tested in Teams",
    ],
    stat: { value: "Agency", label: "AI lead" },
  },
  {
    slug: "sim2real",
    category: "ai",
    title: "Robots that learn in simulation",
    org: "Robotics, including Sim2Real",
    years: "2024 to now",
    role: "Product, experience and research review",
    summary:
      "An early-stage robotics venture working on the gap between training a robot in simulation and having it work in the real world.",
    body: [
      "Robots can practice millions of times in simulation, but what they learn there often falls apart on real hardware. Sim2Real is building a training and deployment workflow aimed at closing that gap, generating synthetic training data at scale instead of relying on human demonstrations.",
      "I work on the product experience, positioning and story. I designed and built the Sim2Real website, which is where the canvas experiments in my lab started, and I executive produce RoboWeekly. On the research side I review experiment design and critique manuscripts, including work comparing reinforcement learning approaches in simulation.",
      "I also developed a concept for a teachable-action platform: turning instructions given by voice, video or demonstration into reusable robot actions that can move between compatible machines.",
    ],
    image: media("tycho-socks.jpg"),
    videos: [{ kind: "file", src: media("robot-multishot.mp4"), poster: media("robot-multishot.jpg"), title: "Sim2Real" }],
    reel: [
      {
        title: "Tycho-1",
        videos: [
          { id: "1081919240", title: "Tycho-1 development reel" },
          { id: "1081907352", title: "Tycho-1 promo 1" },
          { id: "1081906951", title: "Tycho-1 promo 2" },
        ],
      },
      { title: "Bayes Edge", videos: [{ id: "1038288727", title: "Bayes Edge promo" }] },
    ],
    gallery: [
      { src: media("tycho-socks.jpg"), alt: "Two robot arms sorting socks on a workbench" },
      { src: media("cube-stack.jpg"), alt: "Simulated robot arm stacking cubes" },
      { src: media("dice-sort.jpg"), alt: "Simulated robot arm sorting dice into bins" },
      { src: media("drone.jpg"), alt: "Simulated drone carrying objects to a bin" },
    ],
  },
  {
    slug: "efm-arm",
    category: "research",
    title: "Teaching a muscle-powered arm to catch",
    org: "EFM Sim",
    years: "2026",
    role: "Product, simulation design and training",
    summary:
      "A simulated robot arm driven by a new kind of artificial muscle, taken from a research paper to catching balls in 3D.",
    body: [
      "A new kind of artificial muscle was published in Science Robotics in April 2026: electrically driven fibers that pump fluid to contract. I wanted to know whether a robot arm built around them could learn real skills before the hardware exists, so I built the arm in simulation and taught it to catch.",
    ],
    image: efm("fast-catch.jpg"),
    stat: { value: "46/50", label: "catches in evaluation" },
    chapters: [
      {
        title: "One muscle",
        text: [
          "I modeled the muscle in software from the paper's published figures: 20% contraction and a 0.3-second response. Values the paper didn't publish, like force and damping, start as placeholders.",
          "Then I put muscles in opposing pairs, like a biceps and a triceps, so they could bend a joint.",
        ],
        media: [
          { kind: "image", src: efm("step-response.png"), alt: "Plot of one muscle's activation, contraction and force after it is switched on" },
          { kind: "image", src: efm("joint-demo.png"), alt: "Plot of a flexor and extensor pair bending and releasing a joint" },
        ],
      },
      {
        title: "An arm that reaches",
        text: [
          "Two joints and four muscles, trained with reinforcement learning (PPO). The arm reached its target in 20 out of 20 tests, and I kept moving the target until it was reaching at nearly full extension.",
          "You can drive the same arm yourself, right here or full screen in my lab.",
        ],
        media: [
          {
            kind: "arm",
            caption:
              "Live: click or drag to set a target. The browser demo drives the muscles with the repo's scripted controller (inverse kinematics plus PD), not the trained policy.",
          },
          {
            kind: "loop",
            src: efm("arm-ppo.mp4"),
            poster: efm("arm-ppo.jpg"),
            alt: "The trained two-joint arm reaching a target",
            caption: "The trained PPO policy reaching a target.",
          },
          { kind: "image", src: efm("arm-diagram.png"), alt: "Diagram of the two-joint arm and its four muscles" },
        ],
      },
      {
        title: "Moving targets",
        text: [
          "Next the task changed from reaching a fixed point to intercepting a target that moves, and then a thrown ball. The arm caught it 10 out of 10 times in 2D.",
        ],
      },
      {
        title: "Into 3D, with a hand",
        text: [
          "I moved control into full 3D and mounted the open-source Allegro robotic hand. Then I trained the wrist so the palm turns to meet balls coming from the left, the right and above.",
        ],
      },
      {
        title: "Faster throws",
        text: [
          "Faster balls broke the policy: it caught 1 in 3. So I used bridge training, mixing earlier throws with harder ones and running 30 simulations in parallel on cloud GPUs. That brought it to 3 out of 3, then 46 catches in a 50-ball evaluation, and a ten-ball run with ten catches.",
        ],
        media: [
          { kind: "loop", src: efm("fast-catch.mp4"), poster: efm("fast-catch.jpg"), alt: "Muscle-driven arm with a robotic hand catching fast balls" },
          { kind: "loop", src: efm("bridge-catch.mp4"), poster: efm("bridge-catch.jpg"), alt: "The bridge-trained policy catching balls from three directions" },
          { kind: "loop", src: efm("ten-ball.mp4"), poster: efm("ten-ball.jpg"), alt: "Timeline of a ten-ball run, with a side view and a top view of each catch" },
        ],
      },
      {
        title: "What it proves, and what's next",
        text: [
          "This is a simulation. The fingers are posed rather than learned, and the muscle values aren't yet measured on hardware.",
          "Next I'm training under hardware-like limits on how hard and how fast the muscles can be driven. I'm also exploring a research question: whether tensor-network policies can learn the same skills with less training.",
        ],
      },
    ],
    technical: {
      timeline: [
        { version: "v0.1", task: "Muscle model and antagonistic joint", result: "43 tests passing" },
        { version: "v0.2", task: "Two-joint arm in a Gymnasium reach environment", result: "Environment smoke-tested" },
        { version: "v10", task: "PPO reaching", result: "20/20, final distance 4.2 cm" },
        { version: "v11", task: "Split rollout from rendering", result: "Fixed a render-time segfault; rollouts saved, rendered offline" },
        { version: "v13 to v15", task: "Long reach, fine-tuned 40k steps", result: "Target at (0.70, 0.095) m, near full extension" },
        { version: "v16", task: "Moving-target interception", result: "Successful rollout, closest approach 0.9 cm" },
        { version: "v17", task: "Thrown ball in 2D, warm-started from v16", result: "10/10" },
        { version: "v20", task: "True 3D control", result: "26 observations, 6 muscle commands" },
        { version: "v21", task: "Trained wrist roll, Allegro hand mounted", result: "3/3 from left, right and top; wrist alignment 0.94 to 0.98" },
        { version: "v23", task: "Shared hand-mount frame, alignment gated near the catch", result: "39 observations" },
        { version: "v24b", task: "Faster throws", result: "1/3" },
        { version: "v24c", task: "Bridge training from v24_fast, 160k steps", result: "3/3" },
        { version: "v24d", task: "Expanded evaluation and ten-ball run", result: "46/50 (best 10/10, worst 8/10); ten-ball run 10/10" },
      ],
      sections: [
        {
          title: "Muscle model",
          text: [
            "Each muscle is a compliant linear actuator with first-order activation lag, integrated with explicit Euler. Contraction strain (20%), response time (0.3 s), fiber diameter (2 mm) and power density (50 W/kg) come from the paper. Force per fiber, stiffness and damping are placeholders, with a fitting workflow against the paper's public Zenodo dataset.",
          ],
          code: "a(t+dt) = a(t) + (dt / τ)(u - a(t))      τ = 0.30 s, u ∈ [0, 1]\nF = max(0, a · F_max · n - c · dL/dt)    n = fiber bundles\nτ_joint = r (F_flex - F_ext) - b · ω     r = moment arm",
        },
        {
          title: "Control and observations",
          rows: [
            ["Actions (v24)", "8 commands in [0, 1]: flexor and extensor for shoulder yaw, shoulder pitch, elbow and wrist roll"],
            ["Observations (v23 on)", "39 values, including joint state, ball state and hand-frame terms"],
            ["Co-contraction", "Driving both muscles of a pair stiffens the joint without moving it, as in real antagonistic actuators"],
            ["Hand", "Wonik Allegro from MuJoCo Menagerie, mounted on a shared hand frame; fingers posed, not trained"],
          ],
        },
        {
          title: "Reward",
          rows: [
            ["Core terms", "Distance to ball, catch hold bonus, effort and co-contraction penalties"],
            ["Wrist alignment", "Weight 0.08"],
            ["Hand alignment", "Weight 0.17, plus a 0.24 bonus for alignment at contact"],
            ["Gating", "Hand-frame terms switch on in the final 1.2 s, or within 0.28 m of the ball"],
          ],
        },
        {
          title: "Training",
          rows: [
            ["Algorithm", "PPO (Stable-Baselines3, PyTorch) on Gymnasium environments"],
            ["Compute", "30 parallel CPU environments, one thread each, on a Lambda cloud instance"],
            ["Warm starts", "Each harder task fine-tunes the previous policy, for example v16 to v17 and v24_fast to v24c"],
            ["Curriculum", "Bridge runs mix earlier throws with faster ones so new skills don't erase old ones"],
            ["Rendering", "Rollouts saved to CSV, then rendered offscreen in MuJoCo at 1280 by 720"],
          ],
        },
        {
          title: "Evaluation",
          text: [
            "The headline results use fixed throws, not randomized ones. A catch counts when the hand stays within 9.5 cm of the ball for 4 steps, with a 280-step limit.",
            "The 46/50 result came after fixing how the evaluator counted early misses, with no retraining. The ten-ball run is one continuous episode with no arm reset between balls (seed 40003).",
          ],
          rows: [
            ["Left fast", "Start (1.32, 0.50, 0.26) m, velocity (-0.60, -0.39, -0.07) m/s"],
            ["Right fast", "Start (1.32, -0.50, 0.26) m, velocity (-0.60, 0.39, -0.07) m/s"],
            ["Top fast", "Start (0.99, 0.00, 0.83) m, velocity (-0.15, 0.00, -0.68) m/s"],
          ],
        },
        {
          title: "Known limitations",
          text: [
            "Muscle force, stiffness and damping are not yet fitted to measured data. The fingers are posed rather than learned, and there is no contact-driven grasp training. Results come from fixed throw conditions. The policy trains in the Python muscle environment and the videos are MuJoCo renders of saved rollouts, so the visuals don't validate the actuator model or transfer to hardware.",
          ],
        },
        {
          title: "Next",
          rows: [
            ["v25: hardware-like limits", "Command cap 0.95, deadband 0.015 and a slew limit of 0.14 per step, with penalties on command rate, co-activation, joint speed and joint limits, warm-started from v24c"],
            ["v29: dense vs tensor PPO", "Matched environment, reward, seeds and budget; the primary measure is environment interactions needed to reach a set catch rate, with wall-clock time secondary"],
          ],
        },
      ],
    },
    links: [
      { label: "The code on GitHub", href: "https://github.com/joetol2/efm-muscle-sim" },
      { label: "The paper in Science Robotics", href: "https://doi.org/10.1126/scirobotics.ady6438" },
      { label: "MIT News on the muscle fibers", href: "https://news.mit.edu/2026/new-type-electrically-driven-artificial-muscle-fiber-0409" },
    ],
  },
  {
    slug: "streaming-platform",
    category: "streaming",
    title: "The services behind a global streaming service",
    org: "Discovery / Warner Bros. Discovery",
    years: "2019 to 2023",
    role: "Director, Product Growth & Innovation; Senior Director, Product Core Services",
    summary:
      "Product leadership for the shared platform services that streaming experiences run on, plus the strategy for growing them internationally.",
    body: [
      "I joined Discovery to run Product Growth & Innovation, a small team built for product discovery, rapid experimentation and A/B testing. We also shaped the launch strategy for international content.",
      "As Senior Director of Product Core Services I led product work streams across the global platform: CMS and editorial tools, metadata and internationalization, recommendations and personalization, search, player features and video quality, and ad tech architecture. The job was translating between engineering, data science and the business so those systems could support many products and markets at once.",
      "I was Product Owner and lead on the Core Customer Experience strategy, the Payments & Tax strategy and its monthly business reviews, and the product planning for expansion into Canada with a French and English experience.",
    ],
    stat: { value: "Global", label: "core services" },
  },
  {
    slug: "fox-ad-products",
    category: "advertising",
    title: "Advanced ad products at FOX",
    org: "FOX",
    years: "2017 to 2019",
    role: "Director, Advanced Advertising Product Management",
    summary:
      "Eight interactive ad products across linear, connected TV and digital that generated $25M in their first 18 months.",
    body: [
      "At Fox Networks Group I ran advanced advertising product management: the creation, launch and roadmap of new ad products that worked across linear TV, connected TV and digital. I built the business cases, pro forma models and KPI frameworks, and managed product managers alongside third-party vendors.",
      "We developed and operationalized eight advanced interactive engagement ad products, which generated $25M in incremental revenue in their first 18 months. The pages below show the products themselves: ad units for FOX and FX, sponsored formats, branded bumpers and FNGENIUS, a live game show inside FOX's apps.",
    ],
    related: ["fngenius", "fox-fx-ad-units", "sponsored-formats", "branded-bumpers", "fox-now"],
    stat: { value: "$25M", label: "first 18 months" },
    videos: [{ kind: "vimeo", id: "216764413", title: "Advanced ad products sizzle" }],
    reel: [
      {
        title: "Sizzle reels",
        videos: [
          { id: "259221601", title: "Ad products sizzle reel" },
          { id: "259221424", title: "Advanced ad products :30" },
          { id: "302927895", title: "FNG sizzle, alternate cut" },
          { id: "237109218", title: "FNG Magic promo" },
        ],
      },
    ],
  },
  {
    slug: "fngenius",
    category: "advertising",
    title: "FNGENIUS: a live game show inside the TV app",
    org: "FOX",
    years: "2017 to 2019",
    role: "Product Owner and lead product manager",
    summary: "A weekly live interactive game show for FOX fans, played in FOX's own apps alongside FOX programming.",
    body: [
      "FNGENIUS was a weekly, live interactive game show delivered to FOX fans through direct-to-consumer apps. Viewers played real-time trivia and games while they watched FOX programming, which gave advertisers a way to reach an audience that was actively playing along.",
      "I was Product Owner and lead product manager, working with engineering, marketing and digital production to tie the live game to FOX's broadcasts.",
    ],
    stat: { value: "Live", label: "weekly game show" },
    videos: [{ kind: "vimeo", id: "293442078", title: "FNGENIUS social sizzle" }],
    reel: [{ title: "More FNGENIUS", videos: [{ id: "293221649", title: "FNGENIUS social sizzle with Twix" }] }],
    links: [
      { label: "Forbes on FNGENIUS", href: "https://bit.ly/2Cv63ZT" },
      { label: "Deadline on FNGENIUS", href: "https://bit.ly/2O2zNPb" },
    ],
  },
  {
    slug: "fox-fx-ad-units",
    category: "advertising",
    title: "Interactive ad units for FOX and FX",
    org: "FOX",
    years: "2017 to 2019",
    role: "Director, Advanced Advertising Product Management",
    summary:
      "Choice cards, sponsored collections and spots that let viewers trade one interactive ad for a commercial-free episode.",
    body: [
      "These units ran with FX and FOX programming across FX NOW, Roku and linear TV. They include true[X] choice cards and menus that let viewers choose how they see ads, a Trident sponsored collection, Roku placements for It's Always Sunny in Philadelphia and Archer, and spots for The Strain and The Americans.",
    ],
    stat: { value: "10", label: "ad units" },
    videos: [{ kind: "vimeo", id: "218024087", title: "FX Originals ad model" }],
    reel: [
      {
        title: "The ad units",
        videos: [
          { id: "216764489", title: "FX NOW true[X] choice card: Taboo" },
          { id: "216764725", title: "true[X] menu experience" },
          { id: "216764658", title: "true[X] menu experience, alternate" },
          { id: "216764914", title: "Trident sponsored collection" },
          { id: "216765237", title: "Roku: It's Always Sunny in Philadelphia" },
          { id: "216764993", title: "Roku: Archer" },
          { id: "229634812", title: "The Strain sponsored spot" },
          { id: "218086375", title: "The Americans, with theme song" },
          { id: "218085944", title: "The Americans, theme and voiceover" },
        ],
      },
    ],
  },
  {
    slug: "sponsored-formats",
    category: "advertising",
    title: "Sponsored formats for streams and live events",
    org: "FOX",
    years: "2017 to 2019",
    role: "Director, Advanced Advertising Product Management",
    summary: "Formats that put a brand alongside the content instead of interrupting it.",
    body: [
      "A sponsored stream of The Orville presented by Buick, a Samsung exposure profile, and sponsored ad breaks for live events on FOX Sports GO.",
    ],
    stat: { value: "Sponsored", label: "streams and live events" },
    videos: [{ kind: "vimeo", id: "259221307", title: "Sponsored stream: The Orville with Buick" }],
    reel: [
      {
        title: "More formats",
        videos: [
          { id: "259221339", title: "Exposure profile: Samsung" },
          { id: "259221392", title: "Live event sponsored ad break, FOX Sports GO" },
        ],
      },
    ],
  },
  {
    slug: "branded-bumpers",
    category: "advertising",
    title: "Branded bumpers",
    org: "FOX",
    years: "2017 to 2019",
    role: "Director, Advanced Advertising Product Management",
    summary: "Three- to five-second branded bumpers and an ad mnemonic from the advanced ad products toolkit.",
    body: ["Short animated pieces that carry a sponsor's brand in and out of the programming."],
    stat: { value: "5 sec", label: "bumpers" },
    videos: [{ kind: "vimeo", id: "259221351", title: "3D bumper" }],
    reel: [
      {
        title: "More bumpers",
        videos: [
          { id: "259221709", title: "Ad mnemonic bumper" },
          { id: "259221718", title: "Rotating title bumper" },
          { id: "259221731", title: "Rotating stacked bumper" },
          { id: "259221735", title: "Dual rotating stacked titles" },
        ],
      },
    ],
  },
  {
    slug: "fox-now",
    category: "advertising",
    title: "FOX NOW and the FNG design system",
    org: "FOX",
    years: "2014 to 2019",
    role: "Senior Product Manager, Social Media and Video Products",
    summary: "FOX NOW on Apple TV, the FOX Networks Group design system, and the video publishing behind them.",
    body: [
      "Before advanced advertising I ran social media products and then video products at FOX Broadcasting, including the MPX video publishing workflows that got episodes and clips into FOX's apps.",
      "These demos show FOX NOW on Apple TV and the FOX Networks Group design system.",
    ],
    stat: { value: "FOX NOW", label: "Apple TV" },
    videos: [{ kind: "vimeo", id: "259221394", title: "FOX NOW on Apple TV" }],
    reel: [{ title: "Design system", videos: [{ id: "302928103", title: "FNG design system demo" }] }],
  },
  {
    slug: "live-events",
    category: "streaming",
    title: "Olympics and rocket launches, streamed live",
    org: "NBCUniversal and FOX",
    years: "Multiple events",
    role: "Product Owner",
    summary:
      "Product Owner for streaming coverage of multiple Olympic Games, and for SpaceX and NASA launch coverage.",
    body: [
      "Live events are where streaming products get tested hardest. Everyone shows up at the same moment and there are no second takes.",
      "Through NBCUniversal and FOX I was Product Owner for streaming coverage of multiple Olympic Games. I was also Product Owner for SpaceX and NASA launch coverage.",
    ],
    stat: { value: "Live", label: "Olympics, SpaceX, NASA" },
  },
  {
    slug: "heroes",
    category: "storytelling",
    title: "Extending Heroes beyond the TV",
    org: "NBCUniversal",
    years: "2006 to 2014",
    role: "Senior Producer, Entertainment Marketing & Digital",
    summary:
      "Lead producer on the Emmy-winning Heroes Digital Experience, weekly graphic novels for four years, and the Heroes exhibits at Comic-Con.",
    body: [
      "Heroes told its story on TV and on the web at the same time. As lead producer for the Heroes online experience I worked with the showrunners, writers and NBC's digital marketing team on webisodes, character backstories and interactive pieces that let fans go deeper than the broadcast.",
      "I led production of the weekly Heroes graphic novels for four years, working with comic artists and writers to add storylines that weren't in the show. I also produced and ran the Heroes exhibits at Comic-Con.",
      "The Heroes Digital Experience won the Primetime Emmy for Outstanding Interactive Television Programming. Related work won PromaxBDA awards for Create Your Hero and a TV Guide Digital Video Award for Heroes Evolutions.",
    ],
    stat: { value: "Emmy", label: "Outstanding Interactive TV" },
    videos: [{ kind: "vimeo", id: "80954249", title: "Heroes Digital Experience" }],
    reel: [
      {
        title: "Comic-Con and social",
        videos: [
          { id: "81574626", title: "Heroes 360 at Comic-Con" },
          { id: "81572651", title: "Claire profile" },
          { id: "81572267", title: "Sylar profile" },
          { id: "81573152", title: "Viral recap" },
          { id: "81573349", title: "Pinehearst Research in-universe commercial" },
          { id: "81573816", title: "Lydia's Story extended scene" },
          { id: "81051159", title: "One Laptop Per Child PSA" },
        ],
      },
      {
        title: "Tim Kring on Heroes",
        videos: [
          { id: "81568630", title: "What's the inspiration for Heroes?" },
          { id: "81570956", title: "Which ability would you want?" },
          { id: "81060621", title: "What's next for Heroes?" },
        ],
      },
    ],
    links: [
      { label: "Heroes graphic novels", href: "https://heroes.fandom.com/wiki/Graphic_Novels" },
      { label: "TV Guide: Heroes' new ways", href: "https://www.tvguide.com/news/heroes-new-ways-13108/" },
    ],
  },
  {
    slug: "deal-or-no-deal",
    category: "advertising",
    title: "A $4.3M sponsorship, on air and online",
    org: "NBCUniversal",
    years: "2006 to 2014",
    role: "Senior Producer",
    summary:
      "Brokered a $4.3M linear and digital sponsor integration for Deal or No Deal and led the digital experience.",
    body: [
      "I brokered a $4.3M sponsor integration for Deal or No Deal that ran across the broadcast, the show's website and its second-screen experience, then led execution of the digital side so the brand's message worked in each place.",
      "The show's second-screen play continued with the Lucky Case Game, which let viewers play along at home while the episode aired. I also led the digital experience for Minute to Win It.",
    ],
    stat: { value: "$4.3M", label: "sponsor integration" },
    videos: [{ kind: "vimeo", id: "81668410", title: "Deal or No Deal digital experience" }],
    reel: [{ title: "Another game show", videos: [{ id: "81035999", title: "Minute to Win It digital experience" }] }],
  },
  {
    slug: "nbc-dramas",
    category: "storytelling",
    title: "Digital worlds for Grimm and Kings",
    org: "NBCUniversal",
    years: "2006 to 2014",
    role: "Senior Producer",
    summary: "Digital experiences and social video that gave fans of Grimm and Kings more of the story between episodes.",
    body: [
      "For Grimm I led the digital experience and a run of social video: creature transformations, character profiles and fan recaps made for sharing. The work carried on into Grimm: The Essential Guide, companion eBooks for the first two seasons.",
      "For Kings, NBC's modern retelling of the story of David, I led the digital experience that extended the show's world online.",
    ],
    stat: { value: "Grimm", label: "and Kings" },
    videos: [{ kind: "vimeo", id: "80960525", title: "Grimm digital experience" }],
    reel: [
      {
        title: "Grimm social video",
        videos: [
          { id: "81648000", title: "Blutbad transformations" },
          { id: "81648003", title: "Hexenbiest transformations" },
          { id: "81571282", title: "Monroe profile" },
          { id: "81060619", title: "Fan recap" },
          { id: "80945001", title: "Social marketing, part 1" },
        ],
      },
      { title: "Kings", videos: [{ id: "81574924", title: "Kings digital experience" }] },
    ],
  },
  {
    slug: "original-series",
    category: "storytelling",
    title: "Original series made for the web",
    org: "NBCUniversal",
    years: "2006 to 2014",
    role: "Senior Producer",
    summary:
      "Lead producer of Gemini Division, starring Rosario Dawson, one of more than 30 original digital series I produced at NBC.",
    body: [
      "Before streaming originals were normal, NBC was making series just for the web. I produced more than 30 of them.",
      "I was lead producer of Gemini Division, a science fiction series starring Rosario Dawson made for digital platforms, from development through launch. The Recruit, another NBC digital series, won Webby Awards for Video Drama series and individual episode.",
      "I was also lead producer of Grimm: The Essential Guide, companion eBooks for Seasons 1 and 2.",
    ],
    stat: { value: "30+", label: "original digital series" },
    videos: [{ kind: "vimeo", id: "81060620", title: "Gemini Division digital experience" }],
    reel: [
      {
        title: "Web series trailers",
        videos: [
          { id: "81669549", title: "Heroes: The Recruit" },
          { id: "81575490", title: "Heroes: Nowhere Man" },
          { id: "81057134", title: "Heroes: Going Postal" },
          { id: "81574378", title: "Heroes: Lydia's Story" },
          { id: "81571770", title: "Heroes: Create Your Hero" },
        ],
      },
      {
        title: "Animated novels",
        videos: [
          { id: "81579245", title: "Black Bear" },
          { id: "81579246", title: "Flying Blind" },
          { id: "81579249", title: "A Lesson in Electricity" },
          { id: "81579247", title: "Molly's Dream" },
          { id: "81579248", title: "Plot Discovered, part 1" },
          { id: "81580616", title: "Plot Discovered, part 2" },
          { id: "81581725", title: "War Buddies" },
          { id: "81581726", title: "Ten Brides" },
        ],
      },
    ],
    links: [{ label: "Grimm: The Essential Guide", href: "http://a.co/bYdklrD" }],
  },
  {
    slug: "early-web",
    category: "early",
    title: "When it was called new media",
    org: "On2 Technologies, Citigroup and direct clients",
    years: "1997 to 2006",
    role: "Senior Producer; Senior Interactive Production Manager; Director, Interactive Production",
    summary:
      "Early fan websites and an interactive yearbook on CD-ROM, then a portfolio of more than 40 ongoing digital projects at Citigroup.",
    body: [
      "I started out building interactive work when few people knew what it should look like. Working directly with the band's management, I was Senior Producer on an early *NSYNC website and multimedia catalog. For the New York Yankees I helped design and build an interactive yearbook on CD-ROM with video, audio and player profiles.",
      "At On2 Technologies I was Senior Interactive Production Manager, running production and client UX. At Citigroup I was Director of Interactive Production for Global Marketing & Internal Communications, with a portfolio of more than 40 ongoing projects across ecommerce, rewards and data experiences.",
    ],
    stat: { value: "1997", label: "first website" },
  },
  {
    slug: "3rd-space",
    category: "sites",
    title: "A community venue that runs on free tools",
    org: "3RD SPACE",
    years: "2026",
    role: "Design, build and documentation",
    summary:
      "The website and booking system for 3RD SPACE, a place to gather in the Santa Ynez Valley, built so the venue pays nothing to run it.",
    body: [
      "People request a date on the site and see a minimum price while they fill in the form, so nobody sends a request without knowing roughly what it costs.",
      "One Google Apps Script file is the whole backend. It saves each request to Google Sheets, emails the space manager and flags clashes with the calendar. The site rebuilds itself from Google Calendar every hour, so there are no servers to run and nothing to pay for.",
      "I also wrote the documentation: a technical reference, a system map, and a staff guide that turns answering a request into two steps for a space manager who isn't technical.",
    ],
    image: `${import.meta.env.BASE_URL}work/3rd-space.jpg`,
    stat: { value: "$0", label: "to run" },
    links: [{ label: "Visit 3rdspacesyv.com", href: "https://3rdspacesyv.com" }],
  },
  {
    slug: "aware",
    category: "prototypes",
    title: "A safety check-in for adventurers",
    org: "Aware",
    years: "2026",
    role: "Product, design and build",
    summary: "A simple app for people heading outdoors: say where you're going and when you'll be back.",
    body: [
      "Aware runs a countdown to your expected return that you can extend, or end by marking yourself safe. It keeps your emergency contacts and trip history, and it works with no account and no backend.",
      "It's a deliberately simple prototype with no AI in it. SMS check-ins are on the roadmap.",
    ],
    image: `${import.meta.env.BASE_URL}work/aware.png`,
    stat: { value: "Aware", label: "prototype" },
    links: [{ label: "Try Aware", href: "https://joetol2.github.io/aware-adventures/" }],
  },
  {
    slug: "ai-policy-hub",
    category: "sites",
    title: "A living guide to AI advertising law",
    org: "Creative agency",
    years: "2026",
    role: "Product and build",
    summary: "A reference site that tracks U.S. rules on AI-generated advertising and keeps itself up to date.",
    body: [
      "I built this for a creative agency. It tracks federal and state laws, agency actions and pending bills on deepfakes, digital replicas, synthetic media and AI disclosure in advertising.",
      "Every week Claude Code runs in GitHub Actions to research new developments and update the page, so the team always has a current picture without anyone maintaining it by hand.",
    ],
    stat: { value: "Weekly", label: "updated by AI" },
  },
  {
    slug: "independent",
    category: "early",
    title: "Independent projects",
    org: "Independent",
    years: "2023 to now",
    role: "Producer and strategist",
    summary:
      "Smaller projects that keep my hands on the work: an animated book trailer, brand campaigns, ecommerce strategy and websites.",
    body: [
      "I was Producer and Art Director for the animated trailer for MY HIVE: A Girl, Her Grandfather, and Their Honeybee Family, a children's picture book from Abrams Books, working with a team of motion graphics artists.",
      "Other work includes social video and print for Lefty's Coffee Co., international market research and cross-border ecommerce strategy for EarthEssence, and a volunteer redesign of the Santa Ynez Valley Botanic Garden website.",
    ],
    image: "https://i.ytimg.com/vi/g5BK8gT2Gmw/hqdefault.jpg",
    videos: [{ kind: "youtube", id: "g5BK8gT2Gmw", title: "MY HIVE animated trailer" }],
    links: [
      { label: "Lefty's Coffee Co.", href: "https://www.leftyscoffeeco.com" },
      { label: "EarthEssence", href: "http://earthessence.ca" },
      { label: "Santa Ynez Valley Botanic Garden", href: "http://santaynezvalleybotanicgarden.org" },
    ],
  },
];

// Home page "Where I've been" timeline.
export const eras: { year: string; place: string; title: string; text: string; slug?: string }[] = [
  {
    year: "1997",
    place: "Early web",
    title: "Fan sites and CD-ROMs",
    text: "An early *NSYNC website and multimedia catalog, a Yankees interactive yearbook, and interactive production at On2 Technologies.",
    slug: "early-web",
  },
  {
    year: "2002",
    place: "Citigroup",
    title: "Digital at enterprise scale",
    text: "Director of Interactive Production, with more than 40 ongoing projects across ecommerce, rewards and data experiences.",
    slug: "early-web",
  },
  {
    year: "2006",
    place: "NBCUniversal",
    title: "TV that kept going online",
    text: "The Emmy-winning Heroes Digital Experience, 30+ original digital series and a $4.3M Deal or No Deal integration.",
    slug: "heroes",
  },
  {
    year: "2014",
    place: "FOX",
    title: "Interactive TV and ads",
    text: "Eight interactive ad products that generated $25M in their first 18 months, and FNGENIUS, a live game show inside FOX's apps.",
    slug: "fox-ad-products",
  },
  {
    year: "2019",
    place: "Discovery / WBD",
    title: "Global streaming platform",
    text: "Growth and innovation, then the core services behind streaming: metadata, search, recommendations, player and ad tech.",
    slug: "streaming-platform",
  },
  {
    year: "2023",
    place: "Independent",
    title: "Consulting and robots",
    text: "Product consulting, independent projects and Sim2Real, a robotics venture training robots in simulation.",
    slug: "sim2real",
  },
  {
    year: "2025",
    place: "Creative agency",
    title: "AI, put to work",
    text: "Agency AI lead: AI audits for clients, creative search and agents in Teams, and a Firefly production process.",
    slug: "agency-ai",
  },
];

// Selected work on the home page, in order.
export const featured = ["agency-ai", "sim2real", "streaming-platform", "fox-ad-products", "live-events", "heroes"];

export const recognition = [
  { award: "Primetime Emmy Award", detail: "Outstanding Interactive Television Programming, Heroes Digital Experience" },
  { award: "Webby Awards", detail: "The Recruit: Video Drama series and individual episode. Mobile and entertainment honors" },
  { award: "PromaxBDA Awards", detail: "Create Your Hero: interactive applications promotion and integrated campaign" },
  { award: "TV Guide Digital Video Award", detail: "Heroes Evolutions: Best TV Show Site" },
];

export const service = [
  "New Media Council, Producers Guild of America",
  "Executive Committee, Interactive Media Peer Group, Television Academy",
  "Co-Chair, Emmy Awards Working Group, Television Academy",
];

export const press = [
  { label: "Forbes", href: "https://bit.ly/2Cv63ZT" },
  { label: "Deadline", href: "https://bit.ly/2O2zNPb" },
  { label: "Wired", href: "https://www.wired.com/2003/08/its-a-flawed-world-after-all/" },
  { label: "TV Guide", href: "https://www.tvguide.com/news/heroes-new-ways-13108/" },
  { label: "Heroes Wiki interview", href: "https://heroeswiki.ddns.net/wiki/Interview:Joe_Tolerico" },
  { label: "IMDb", href: "http://www.imdb.com/name/nm3089230" },
];

export const chronology = [
  { years: "2025 to now", org: "Creative agency", role: "AI Product Strategy & Advanced Advertising Initiatives" },
  { years: "2024 to now", org: "Robotics, including Sim2Real", role: "Product, experience and research review" },
  { years: "2023", org: "Independent consulting", role: "Product strategy and prototyping" },
  { years: "2021 to 2023", org: "Discovery / Warner Bros. Discovery", role: "Senior Director, Product Core Services" },
  { years: "2019 to 2021", org: "Discovery", role: "Director, Product Growth & Innovation" },
  { years: "2017 to 2019", org: "Fox Networks Group", role: "Director, Advanced Advertising Product Management" },
  { years: "2015 to 2017", org: "FOX Broadcasting", role: "Senior Product Manager, Video Products & Platforms" },
  { years: "2014 to 2015", org: "FOX Broadcasting", role: "Senior Product Manager, Social Media Products & Operations" },
  { years: "2006 to 2014", org: "NBCUniversal", role: "Senior Producer, Entertainment Marketing & Digital" },
  { years: "2002 to 2006", org: "Citigroup", role: "Director, Interactive Production" },
  { years: "1997 to 2002", org: "On2 Technologies", role: "Senior Interactive Production Manager" },
];
