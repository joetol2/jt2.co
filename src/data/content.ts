// Site copy. Claims follow Joe's approved Master Career Record v1.1: no
// generated metrics, no client names from the current agency role.

const media = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;
const efm = (file: string) => media(`efm/${file}`);
const tensor = (file: string) => media(`papers/tensor/${file}`);

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

import { tensorPaper, type PaperBlock } from "@/data/papers/tensor";
import type { EmployerSlug } from "@/data/experience";

// Visuals inside a chapter: a still image, or a short silent loop.
export type Media = (
  | { kind: "image"; src: string; alt: string }
  | { kind: "loop"; src: string; poster: string; alt: string }
  | { kind: "arm" }
  | { kind: "placeholder"; label: string }
) & { caption?: string };

// Lab sub-nav tabs that hold case studies. The Interactive tab holds the
// canvas pieces in projects.ts instead.
export const labCategories: { slug: Category; label: string; blurb: string }[] = [
  { slug: "research", label: "Research", blurb: "Research projects, papers and experiments." },
  { slug: "prototypes", label: "Prototypes", blurb: "Small products built to test an idea." },
];

export const isLab = (c: Category) => labCategories.some((l) => l.slug === c);

// Lab case studies live under /lab, everything else under /work.
export const caseHref = (study: { slug: string; category: Category }) =>
  `${isLab(study.category) ? "/lab" : "/work"}/${study.slug}`;

export type CaseStudy = {
  slug: string;
  category: Category;
  // Employer whose Work hub lists this project (Work projects only).
  employer?: EmployerSlug;
  title: string;
  // Optional line under the title on the case study page.
  subtitle?: string;
  org: string;
  years: string;
  role: string;
  summary: string;
  body: string[];
  highlights?: string[];
  stat?: { value: string; label: string };
  image?: string;
  videos?: Video[];
  // Full text of a paper, shown as an article after the body.
  paper?: { title: string; subtitle: string; author: string; date: string; figures: string; blocks: PaperBlock[] };
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
    employer: "agency",
    title: "Bringing AI into a creative agency",
    org: "Creative agency",
    years: "2025 to now",
    role: "AI Product Strategy & Advanced Advertising Initiatives",
    summary:
      "Agency AI lead, turning generative AI experiments into tools the creative teams use and services clients pay for.",
    body: [
      "The agency is moving from bespoke creative services to scalable, technology-enabled products across ad tech, AI and analytics. I lead its AI product strategy: deciding which capabilities are worth building, getting them into the hands of the people who make the work, and packaging the best into services clients will pay for.",
    ],
    highlights: [
      "Product lead on completed paid AI audit work for a global consumer brand",
      "Creative search assistant in Teams, with internal asset search live",
      "Co-owner of the agency's Firefly-based creative AI production process",
      "Meeting-notes agent built and tested in Teams",
    ],
    stat: { value: "Agency", label: "AI lead" },
    chapters: [
      {
        title: "AI readiness audits",
        text: [
          "I was product lead on an AI readiness audit for a global consumer brand that became completed paid work. Building on earlier work by colleagues, I productized the audit: a scoring framework, the activation model that turns findings into next steps, and the packaging that makes it repeatable for other clients.",
        ],
        media: [{ kind: "placeholder", label: "Sample AI readiness audit, client names removed" }],
      },
      {
        title: "Creative search in Teams",
        text: [
          "Creative teams lose time hunting for assets. I specified a search assistant in Microsoft Teams, built with Copilot Studio, that interprets a plain-language request and turns it into a search of the agency's internal asset library. Internal search is live, with a stock-library connection in progress.",
        ],
        media: [{ kind: "placeholder", label: "Screenshot of the creative search assistant" }],
      },
      {
        title: "Agents and internal tools",
        text: [
          "I built, published and tested a meeting-notes agent for the PMO in Teams, and built a timekeeping app prototype on Power Apps and Dataverse with Planner integration and save-and-submit flows. I also reworked the agency's Smartsheet licensing to match seats to actual use.",
        ],
        media: [{ kind: "placeholder", label: "Screenshots of the meeting-notes agent and timekeeping app" }],
      },
      {
        title: "Creative AI production",
        text: [
          "I co-own the agency's creative AI production process built around Adobe Firefly, covering implementation, licensing economics and coordination across creative, legal and account teams.",
          "I'm also designing the next step: an agentic creative workflow that tracks every job and asset with shared identifiers, keeps an approval ledger, and puts a person's sign-off at each stage.",
        ],
        media: [{ kind: "placeholder", label: "Diagram of the agentic creative workflow" }],
      },
      {
        title: "Policy, governance and enablement",
        text: [
          "AI only scales in an agency if people trust it. I created an AI law and policy reference hub that tracks U.S. rules on AI-generated advertising and updates itself weekly with Claude Code, translated a client's data restrictions into IT requirements for Copilot, and run practical Copilot training for staff.",
        ],
      },
      {
        title: "Advanced advertising concepts",
        text: [
          "For client planning I shaped a portfolio of 31 advanced-advertising concepts, 12 of them AI-based, and evaluated AI vendors and tools against the agency's operating model.",
        ],
      },
    ],
    related: ["ai-policy-hub"],
  },
  {
    slug: "sim2real",
    category: "ai",
    employer: "independent",
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
          "Faster balls broke the policy: it caught 1 in 3. So I used bridge training, mixing earlier throws with harder ones and running 30 simulations in parallel on a Lambda Labs cloud instance. That brought it to 3 out of 3, then 46 catches in a 50-ball evaluation, and a ten-ball run with ten catches.",
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
            ["Compute", "Lambda Labs cloud instance with 2× NVIDIA A10 GPUs, 30 CPU cores and 222 GB of RAM"],
            ["Parallelism", "30 parallel environment processes, pinned to one thread each, because the simulation is CPU-bound rather than GPU-bound"],
            ["Warm starts", "Each harder task fine-tunes the previous policy, for example v15 from the long-reach policy, v17 from v16, and v24c from v24_fast"],
            ["Planned run sizes", "Configured at 40k timesteps for the v15 long reach, 60k for v16 interception, 80k for the v17 thrown ball, 120k for the v21 wrist, and 160k for v23 and the v24c bridge"],
            ["Curriculum", "Bridge runs mix earlier throws with faster ones so new skills don't erase old ones"],
            ["Rollout logging", "Every step of an evaluation rollout is logged: success, miss, contact and hold state, distance to the ball, palm normal and direction to the ball, joint state, muscle activations and policy commands"],
            ["Rendering", "Rollouts saved to CSV, then rendered offscreen in MuJoCo at 1280 by 720; splitting the two in v11 fixed a render-time segfault and let policy output be checked on its own"],
            ["Operations", "Long runs managed over SSH and tmux, monitored with btop, Glances and nvitop"],
            ["Versioning", "Each stage kept its own model, rollout and render files, with Git snapshots of the Lambda working copy (v10 to v16 artifacts in a dated backup branch)"],
            ["Distillation (designed)", "A teacher–student path with the v24d policy as teacher, designed to size tensorized student policies; not yet run"],
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
    related: ["tensor-policies"],
    links: [
      { label: "The code on GitHub", href: "https://github.com/joetol2/efm-muscle-sim" },
      { label: "The paper in Science Robotics", href: "https://doi.org/10.1126/scirobotics.ady6438" },
      { label: "MIT News on the muscle fibers", href: "https://news.mit.edu/2026/new-type-electrically-driven-artificial-muscle-fiber-0409" },
    ],
  },
  {
    slug: "tensor-policies",
    category: "research",
    title: "Accelerating Embodied Policy Learning with Tensor-Network Architectures",
    subtitle: "Can tensor networks make robots learn faster?",
    org: "Position paper",
    years: "July 2026",
    role: "Author",
    summary:
      "A position paper and experimental proposal: test whether tensor-network policies learn the EFM catching task in fewer training interactions than a standard neural network.",
    body: [
      "Training a robot policy with reinforcement learning takes a huge number of practice attempts. Tensor networks, a way of structuring a model that comes from physics, can represent the same functions with far fewer parameters. This paper asks whether that structure also helps a robot learn faster.",
      "It makes a deliberately narrow claim and designs a fair test for it, using my muscle-powered catching arm as the first test bed. This is a proposal: the experiment it describes hasn't been run yet. The full paper is below.",
    ],
    image: tensor("card.jpg"),
    stat: { value: "Paper", label: "position and proposal" },
    paper: {
      title: "Accelerating Embodied Policy Learning with Tensor-Network Architectures",
      subtitle: "Technical position paper and experimental proposal",
      author: "Joe Tolerico",
      date: "July 10, 2026",
      figures: tensor(""),
      blocks: tensorPaper,
    },
    related: ["efm-arm"],
  },
  {
    slug: "streaming-platform",
    category: "streaming",
    employer: "wbd",
    title: "Product for a global streaming platform",
    org: "Discovery / Warner Bros. Discovery",
    years: "2019 to 2023",
    role: "Senior Director, Product, Core Services; Director, Product, Growth & Innovation",
    summary:
      "Product leadership for the core services behind discovery+ and Warner Bros. Discovery's global streaming platform, and for growth and innovation across the direct-to-consumer business.",
    body: [
      "Every streaming experience rests on services viewers never see: the systems that store and describe content, decide what to recommend, find it in search, play it smoothly, show ads and work in every market. As Senior Director of Product, Core Services, I led product for those services across web, mobile, connected TV and international markets, working with platform engineering, product management, design, data science and commercial teams.",
      "Before that I ran Product Growth & Innovation, a small, fast team for product discovery, experimentation and the launch strategy for international content.",
    ],
    highlights: [
      "Core Customer Experience strategy (Product Owner and lead)",
      "Payments & Tax strategy and monthly business reviews (Product Owner and lead)",
      "Canada expansion planning in French and English (Product Owner and lead)",
      "Product Leadership Team member; Executive Fast Track and Mentorship Program",
    ],
    stat: { value: "Global", label: "core services" },
    chapters: [
      {
        title: "The core services",
        text: [
          "I directed product vision, roadmap and prioritization for content management and editorial tools, metadata and internationalization, recommendations and personalization, search, advertising technology, video playback and internal APIs.",
          "The job was connecting reusable platform capabilities to the experiences viewers see, so features worked the same across devices and markets, and translating between engineering, data science and the business so many products could build on the same foundation.",
        ],
        media: [{ kind: "placeholder", label: "Product screenshots and architecture overview" }],
      },
      {
        title: "Advertising and monetization",
        text: [
          "I directed advanced advertising product requirements and ad-load modeling, balancing ad revenue against playback quality and the viewing experience, and managed integrations with ad-tech partners including Brightline and Innovid.",
          "With business and product marketing I worked on monetization more broadly, including advertising strategy and experiments with the subscription offer flow.",
        ],
      },
      {
        title: "Helping viewers find what to watch",
        text: [
          "I partnered with machine-learning and engineering teams on recommendations, personalization and search to improve content discovery, and with connected-TV platforms including Roku and Apple on universal search feeds that send viewers straight to the right show.",
        ],
      },
      {
        title: "Playback that just works",
        text: ["I advanced video-player and streaming-performance work on startup time, playback reliability and buffering, the moments where viewers decide whether a service feels good."],
      },
      {
        title: "Subscriptions and payments",
        text: [
          "As Product Owner and lead for the Payments & Tax strategy and its monthly business reviews, I worked with subscription commerce teams on payment-failure communications and retries, renewals, account and billing touchpoints, local payment methods and platform-specific purchasing.",
        ],
      },
      {
        title: "Going global",
        text: [
          "I shaped international streaming experiences, balancing common global capabilities with regional requirements, localization and platform constraints across APAC, Canada, EMEA and LATAM, and led the product planning for Canada with a French and English experience.",
          "I was the product authority for compliance in metadata and content discovery, including CCPA, COPPA, FCC rules and accessibility standards.",
        ],
      },
      {
        title: "Growth and innovation",
        text: [
          "From 2019 to 2021 I ran Product Growth & Innovation: product discovery and experimentation with customer research, A/B testing, prototypes and measurable hypotheses; KPI frameworks for engagement, adoption and retention; and design-thinking practices across product, content and marketing. I took concepts from discovery through proof of concept to roadmap decisions with senior executives, and was Product Owner and lead for the Core Customer Experience strategy.",
        ],
      },
      {
        title: "Teams and governance",
        text: [
          "I set up product prioritization and governance across dependent product and engineering teams, guided user acceptance testing, measured impact with subscriber-based metrics, and managed development budgets against MSAs and SOWs.",
          "I led and mentored product managers, designers, data scientists and engineers, and recruited product talent from companies including SpaceX, Apple, Uber and Amazon. I was a member of the Product Leadership Team and was selected for the Executive Fast Track and Mentorship Program.",
        ],
      },
    ],
  },
  {
    slug: "fox-ad-products",
    category: "advertising",
    employer: "fox",
    title: "Advanced ad products at FOX",
    org: "FOX",
    years: "2017 to 2019",
    role: "Director, Advanced Advertising Product Management",
    summary:
      "Eight interactive ad products across linear, connected TV and digital that generated $25M in their first 18 months.",
    body: [
      "At Fox Networks Group I ran advanced advertising product management: the creation, launch and roadmap of new ad products that worked across linear TV, connected TV and digital. I built the business cases, pro forma models and KPI frameworks, and managed product managers alongside third-party vendors.",
      "We developed and operationalized eight advanced interactive engagement ad products, which generated $25M in incremental revenue in their first 18 months. The pages below show the products themselves: the interactive ad formats, FNGENIUS, a live game show inside FOX's apps, and the FOX NOW video work.",
    ],
    related: ["fngenius", "fox-ad-formats", "fox-now"],
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
    employer: "fox",
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
    slug: "fox-ad-formats",
    category: "advertising",
    employer: "fox",
    title: "Interactive ad formats for FOX and FX",
    org: "FOX",
    years: "2017 to 2019",
    role: "Director, Advanced Advertising Product Management",
    summary:
      "The ad products in action: choice cards and interactive units for FX and FOX, sponsored streams and live-event breaks, and branded bumpers.",
    body: [
      "These are the formats behind the advanced ad products business. Interactive units ran with FX and FOX programming across FX NOW, Roku and linear TV, including true[X] choice cards and menus that let viewers choose how they see ads, a Trident sponsored collection, Roku placements for It's Always Sunny in Philadelphia and Archer, and spots for The Strain and The Americans that offered a commercial-free episode.",
      "Sponsored formats put a brand alongside the content instead of interrupting it: a sponsored stream of The Orville presented by Buick, a Samsung exposure profile, and sponsored ad breaks for live events on FOX Sports GO. Three- to five-second branded bumpers and an ad mnemonic carried a sponsor's brand in and out of the programming.",
    ],
    stat: { value: "18", label: "formats on video" },
    videos: [{ kind: "vimeo", id: "218024087", title: "FX Originals ad model" }],
    reel: [
      {
        title: "Interactive ad units",
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
      {
        title: "Sponsored formats",
        videos: [
          { id: "259221307", title: "Sponsored stream: The Orville with Buick" },
          { id: "259221339", title: "Exposure profile: Samsung" },
          { id: "259221392", title: "Live event sponsored ad break, FOX Sports GO" },
        ],
      },
      {
        title: "Branded bumpers",
        videos: [
          { id: "259221351", title: "3D bumper" },
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
    employer: "fox",
    title: "FOX NOW and the FNG design system",
    org: "FOX",
    years: "2014 to 2019",
    role: "Senior Product Manager, Social Media and Video Products",
    summary: "FOX NOW on Apple TV, the FOX Networks Group design system, and the video publishing behind them.",
    body: [
      "Before advanced advertising I ran social media products and then video products at FOX Broadcasting, including the MPX video publishing workflows that got episodes and clips into FOX's apps.",
      "As Senior Product Manager for social media products I was Adobe Social infrastructure architect and led digital initiatives for Empire, Gotham, The Simpsons, Family Guy, American Idol, The Last Man on Earth, MasterChef, Sleepy Hollow and Stand Up to Cancer, among others. On video products I architected the MPX account and workflows and ran product lifecycles for web, mobile apps, web series and sponsorship integrations.",
      "These demos show FOX NOW on Apple TV and the FOX Networks Group design system.",
    ],
    stat: { value: "FOX NOW", label: "Apple TV" },
    videos: [{ kind: "vimeo", id: "259221394", title: "FOX NOW on Apple TV" }],
    reel: [{ title: "Design system", videos: [{ id: "302928103", title: "FNG design system demo" }] }],
  },
  {
    slug: "live-events",
    category: "streaming",
    employer: "nbcu",
    title: "Olympics and rocket launches, streamed live",
    org: "NBCUniversal and FOX",
    years: "Multiple events",
    role: "Lead digital product owner; product lead",
    summary:
      "Lead digital product owner for two Olympic Games at NBC and one at FOX, and product lead for SpaceX and NASA launch coverage.",
    body: [
      "Live events are where streaming products get tested hardest. Everyone shows up at the same moment and there are no second takes.",
    ],
    stat: { value: "3", label: "Olympic Games" },
    chapters: [
      {
        title: "Two Olympic Games at NBC",
        text: ["Lead digital product owner for NBC's digital coverage of two Olympic Games, including the Winter Olympics."],
        media: [{ kind: "placeholder", label: "Which Games, what the product covered, scale and results" }],
      },
      {
        title: "An Olympic Games at FOX",
        text: ["Lead digital product owner for an Olympic Games at FOX."],
        media: [{ kind: "placeholder", label: "Which Games, what the product covered, scale and results" }],
      },
      {
        title: "SpaceX and NASA launches",
        text: ["Product lead for SpaceX and NASA launch coverage."],
        media: [{ kind: "placeholder", label: "Which missions, the employer, the product and its audience" }],
      },
    ],
  },
  {
    slug: "nbc-digital",
    category: "storytelling",
    employer: "nbcu",
    title: "Digital for NBC's biggest shows",
    org: "NBCUniversal",
    years: "2006 to 2014",
    role: "Senior Producer and project lead",
    summary:
      "Project lead on the digital side of NBC's shows, from Heroes and The Office to Saturday Night Live, running in-house teams and outside vendors from idea to launch.",
    body: [
      "As Senior Producer at NBC I was project lead on digital for a long list of shows, including Heroes, the Winter Olympics, Grimm, Saturday Night Live, The Office, 30 Rock, Community, The Biggest Loser, Law & Order: SVU, Deal or No Deal, Minute to Win It, Gemini Division, the NAACP Image Awards, Stand Up to Cancer, Comic-Con, the NBC Awards Screening Room, Dracula and Get Out Alive with Bear Grylls.",
      "I ran several in-house teams and third-party vendors in parallel, handling budgets, hiring, and contract and rate negotiations. I led brainstorming sessions with show writers and executive producers to find digital ideas and product integrations that could sell, and ran the weekly approvals with legal, sponsors, show executives and studio executives.",
      "I was responsible for NBC's first fan site deal, which brought 18.9 million unique visitors to NBC in its first six weeks, and led NBC's first second-screen experience.",
      "Along the way I led The Office's \"Make Your Own Promo\" contest on YouTube, kept each site in step with sales commitments and changing storylines, and built a new online production process for senior management that made sites faster to produce and maintain.",
    ],
    stat: { value: "18+", label: "NBC shows and events" },
    related: ["heroes", "nbc-dramas", "original-series", "deal-or-no-deal", "live-events"],
  },
  {
    slug: "heroes",
    category: "storytelling",
    employer: "nbcu",
    title: "Extending Heroes beyond the TV",
    org: "NBCUniversal",
    years: "2006 to 2014",
    role: "Senior Producer, Entertainment Marketing & Digital",
    summary:
      "Lead producer on the Emmy-winning Heroes Digital Experience, weekly graphic novels for four years, and the Heroes exhibits at Comic-Con.",
    body: [
      "Heroes told its story on TV and on the web at the same time. As lead producer for the Heroes online experience I worked with the showrunners, writers and NBC's digital marketing team on webisodes, character backstories and interactive pieces that let fans go deeper than the broadcast.",
      "I led production of the weekly Heroes graphic novels for four years, working with comic artists and writers to add storylines that weren't in the show. I also produced and ran the Heroes exhibits at Comic-Con from 2007 through 2009, and developed and led Heroes iStory, which doubled the site's traffic in three weeks.",
      "The Heroes Digital Experience won the Primetime Emmy for Outstanding Interactive Television Programming at the 61st Primetime Emmy Awards, after a nomination in the same category the year before. Create Your Hero won two PromaxBDA awards, and Heroes Evolutions won a TV Guide Digital Video Award for Best TV Show Site.",
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
    employer: "nbcu",
    title: "A $4.3M sponsorship, on air and online",
    org: "NBCUniversal",
    years: "2006 to 2014",
    role: "Senior Producer",
    summary:
      "Brokered a $4.3M linear and digital sponsor integration for Deal or No Deal and led the digital experience.",
    body: [
      "I brokered and led a 10-week, $4.3M interactive sponsor integration for Deal or No Deal, the largest to date for NBC.com. It ran across the broadcast, the show's website and its second-screen experience, and I led execution of the digital side so the brand's message worked in each place.",
      "The show's second-screen play continued with the Lucky Case Game, which let viewers play along at home while the episode aired and reached $6MM+ net per airing, three times a week. I also led the digital experience for Minute to Win It.",
    ],
    stat: { value: "$4.3M", label: "sponsor integration" },
    videos: [{ kind: "vimeo", id: "81668410", title: "Deal or No Deal digital experience" }],
    reel: [{ title: "Another game show", videos: [{ id: "81035999", title: "Minute to Win It digital experience" }] }],
  },
  {
    slug: "nbc-dramas",
    category: "storytelling",
    employer: "nbcu",
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
    employer: "nbcu",
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
    slug: "grafica",
    category: "early",
    employer: "early",
    title: "Where it started: CD-ROMs and early websites",
    org: "Gráfica Interactive",
    years: "1994 to 1997",
    role: "Senior Multimedia Developer and Interactive Graphic Designer",
    summary: "My first role in interactive media, designing and programming CD-ROMs, multimedia presentations and websites.",
    body: [
      "I designed and programmed CD-ROM products and built multimedia presentations for the company and its clients.",
      "I also managed client website production, coordinated freelancers, designed reusable site templates, programmed JavaScript and HTML for a corporate intranet, and ran the Mac, Windows NT and FTP servers behind it.",
    ],
    stat: { value: "1994", label: "first CD-ROMs" },
  },
  {
    slug: "interactive-consulting",
    category: "early",
    employer: "early",
    title: "Interactive production for brands, labels and publishers",
    org: "Independent consultant",
    years: "1996 onward",
    role: "Interactive Production Consultant",
    summary:
      "Multi-platform and streaming projects for clients including AT&T, Sony, RCA, Panasonic, Pfizer, Lucent Technologies, Columbia University, George magazine, Archie Comics, *NSYNC and the New York Yankees.",
    body: [
      "Alongside my staff roles I've produced multi-platform projects for clients and helped them develop interactive and streaming content. That has included directing live webisodes and musical performances streamed live, podcasts and second-screen experiences, served from Unix, Windows and Mac servers.",
      "The New York Yankees CD-ROM, the early *NSYNC website and the Archie Comics site all came out of this work.",
    ],
    stat: { value: "11", label: "named clients" },
    related: ["early-web-cd-rom"],
  },
  {
    slug: "on2",
    category: "early",
    employer: "early",
    title: "Interactive production in the early days of online video",
    org: "On2 Technologies",
    years: "1997 to 2002",
    role: "Senior Interactive Production Manager",
    summary:
      "Managing interactive production at a digital video technology company during the early years of online multimedia, and laying the groundwork for a career in streaming.",
    body: [
      "On2 Technologies was a digital video technology company, acquired by Google in 2010, years after my time there. I joined in 1997, when putting video and interactive media online was still new territory.",
      "I managed interactive production, coordinating front-end development and video production teams alongside outside technology partners. I set up the digital production process and delivered interactive experiences for clients.",
      "I was the main client contact for information architecture and UX requirements, turning business goals into specifications the teams could build, and the creative and technical advisor across web and video, with about a dozen projects running at a time.",
      "Working across those technical disciplines gave me an early foundation in digital video and interactive delivery, which I drew on later when I led product for streaming services.",
    ],
    stat: { value: "1997", label: "video goes online" },
  },
  {
    slug: "early-web-cd-rom",
    category: "early",
    employer: "early",
    title: "Early web and CD-ROM: the Yankees, *NSYNC and Archie Comics",
    org: "Consulting clients",
    years: "1998 and the late 1990s",
    role: "Senior Producer; designer and builder",
    summary:
      "An interactive yearbook on CD-ROM for the New York Yankees, an early website and multimedia catalog for *NSYNC, and the Archie Comics website, all direct client work.",
    body: [
      "These projects came out of my consulting practice in the late 1990s, when interactive media meant CD-ROMs and the first fan websites.",
    ],
    stat: { value: "1998", label: "CD-ROM and web" },
    chapters: [
      {
        title: "The New York Yankees Interactive Yearbook",
        text: [
          "I was Senior Producer on the Yankees' interactive yearbook, a CD-ROM made directly with the team, and helped design and build it.",
          "Fans could explore the club's history era by era, from Babe Ruth and Joe DiMaggio to Derek Jeter, through video clips, audio commentary, detailed player profiles and statistics, and a look back at the Yankees' World Series wins. The disc is preserved today in the Internet Archive's vintage software collection.",
        ],
        media: [{ kind: "placeholder", label: "Cover, disc and screens from the 1998 CD-ROM, from the Internet Archive" }],
      },
      {
        title: "*NSYNC",
        text: [
          "Working directly with the band's manager, I was Senior Producer on an early *NSYNC website and multimedia catalog, as the band's following grew after their 1997 debut album.",
        ],
        media: [{ kind: "placeholder", label: "Screens of the early *NSYNC site" }],
      },
      {
        title: "Archie Comics",
        text: ["I built the Archie Comics website and everything on it for the company. The archived 1998 site is still viewable on the Wayback Machine."],
        media: [{ kind: "placeholder", label: "Screens of the 1998 Archie Comics site" }],
      },
    ],
    links: [{ label: "The Yankees disc at the Internet Archive", href: "https://archive.org/details/new-york-yankees-interactive-yearbook" }],
  },
  {
    slug: "citigroup",
    category: "early",
    employer: "citigroup",
    title: "Digital production at enterprise scale",
    org: "Citigroup",
    years: "2002 to 2006",
    role: "Director, Interactive Production",
    summary:
      "Directing digital production for Citigroup's Global Marketing and Internal Communications: more than 40 ongoing projects for customers and employees.",
    body: [
      "At Citigroup I directed enterprise digital production and interactive communications for Global Marketing and Internal Communications. I set up product lifecycle processes and coordinated multidisciplinary delivery teams.",
      "The portfolio ran to more than 40 ongoing digital projects, spanning consumer-facing experiences and internal communications tools, including online campaigns and the intranet for Citibank North America. Production covered the front end and back-end integration, ecommerce and rewards, video, Flash and Shockwave, user profiling, and data mining and reporting.",
      "I guided internal stakeholders through product requirements and user experience decisions, and managed the outside technology partners who helped build the work.",
    ],
    stat: { value: "40+", label: "ongoing projects" },
  },
  {
    slug: "your-light-guide",
    category: "sites",
    employer: "independent",
    title: "A home for a Human Design practice",
    org: "Your Light Guide",
    years: "Client site",
    role: "Design and build",
    summary:
      "The website for Khaled, a certified Human Design consultant, built to make a complex system approachable and invite people to work with him.",
    body: [
      "Human Design is a dense system, so the site's job is to make it feel approachable. The home page introduces Khaled, explains what Human Design is in plain language, and walks through how a session works, from entering your birth details to reading your BodyGraph chart together.",
      "About and Contact pages carry the conversation forward. I designed and built the site end to end, from its structure to the visual design and launch.",
    ],
    stat: { value: "Client", label: "design and build" },
    links: [{ label: "Visit yourlightguide.com", href: "https://www.yourlightguide.com/" }],
  },
  {
    slug: "the-pool-house",
    category: "sites",
    employer: "independent",
    title: "A gallery site that feels like the gallery",
    org: "The Pool House",
    years: "Client site",
    role: "Design and build",
    summary:
      "The website for The Pool House, a Pasadena art gallery built around community, with exhibitions, events, art for sale and press in one place.",
    body: [
      "The Pool House set out to reshape the traditional gallery experience: artist talks, interactive installations, community events and the occasional game of ping pong. The site carries that spirit, putting the gallery's happenings next to a shop for works from its collection and a section for press and reviews.",
      "Visits are by appointment, so the website is the gallery's front door. I designed and built it end to end.",
    ],
    stat: { value: "Client", label: "design and build" },
    links: [{ label: "Visit thepoolhouseart.com", href: "https://www.thepoolhouseart.com/" }],
  },
  {
    slug: "botanic-garden",
    category: "sites",
    employer: "independent",
    title: "A botanic garden's digital front door",
    org: "Santa Ynez Valley Botanic Garden",
    years: "Pro bono",
    role: "Redesign and rebuild",
    summary:
      "A pro bono redesign and rebuild for a nonprofit botanic garden, organized so visitors can find events and resources and support the garden.",
    body: [
      "The garden offers a lot: tours, a holiday lights festival, education for groups and kids, native plant and horticultural resources, and virtual classes. The old site made that hard to find.",
      "I reorganized everything into four clear paths: learn about the garden, find an event, discover its gardens and resources, and grow with the garden by donating, joining, volunteering or working there. I redesigned and rebuilt the site from the information architecture through the visual design and launch.",
    ],
    stat: { value: "Pro bono", label: "for a nonprofit" },
    links: [{ label: "Visit the garden's site", href: "https://santaynezvalleybotanicgarden.org/" }],
  },
  {
    slug: "3rd-space",
    category: "sites",
    employer: "independent",
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
    employer: "agency",
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
    employer: "independent",
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
    year: "1994",
    place: "Gráfica Interactive",
    title: "CD-ROMs first",
    text: "Designing and programming CD-ROMs, multimedia presentations and early websites.",
    slug: "grafica",
  },
  {
    year: "1997",
    place: "Early web",
    title: "Fan sites and CD-ROMs",
    text: "An early *NSYNC website and multimedia catalog, a Yankees interactive yearbook, and interactive production at On2 Technologies.",
    slug: "on2",
  },
  {
    year: "2002",
    place: "Citigroup",
    title: "Digital at enterprise scale",
    text: "Director of Interactive Production, with more than 40 ongoing projects across ecommerce, rewards and data experiences.",
    slug: "citigroup",
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
export const featured = ["agency-ai", "streaming-platform", "fox-ad-products", "fngenius", "heroes", "deal-or-no-deal"];

export const recognition = [
  {
    award: "Primetime Emmy Awards",
    detail:
      "Winner, Outstanding Interactive Television Programming, Heroes Digital Experience, 61st Primetime Emmy Awards. Nominee, Outstanding Interactive Television Programming, Heroes Digital Experience, 60th Primetime Emmy Awards.",
  },
  {
    award: "Webby Awards",
    detail:
      "13th Annual: Winner, Video/Drama Series and Individual Episode, Heroes: The Recruit. 12th Annual: Winner, Mobile/Entertainment, Heroes; Honoree, Websites/Television, Heroes Evolutions.",
  },
  {
    award: "PromaxBDA Promotion & Marketing Awards",
    detail:
      "Winner, Interactive Applications Promotions, Create Your Hero. Winner, Consumer Tie-In Promotion Campaign Using Integrated Media, Create Your Hero.",
  },
  { award: "TV Guide Online Video Awards", detail: "Winner, Best TV Show Site, Heroes Evolutions." },
];

export const service = [
  "Council Member, New Media, Producers Guild of America",
  "Former Co-Chair, Emmy Awards Working Group, Interactive Media Peer Group, Academy of Television Arts & Sciences",
  "Former Executive Committee Member, Interactive Media Peer Group, Academy of Television Arts & Sciences",
];

export const press = [
  { label: "Forbes", href: "https://bit.ly/2Cv63ZT" },
  { label: "Deadline", href: "https://bit.ly/2O2zNPb" },
  { label: "Wired interview", href: "https://www.wired.com/2003/08/its-a-flawed-world-after-all/" },
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
  { years: "1996 onward", org: "Independent", role: "Interactive Production Consultant" },
  { years: "1994 to 1997", org: "Gráfica Interactive", role: "Senior Multimedia Developer and Interactive Graphic Designer" },
];

// Hands-on toolkit for the About page.
export const toolkit: { group: string; items: string }[] = [
  {
    group: "Today",
    items:
      "Python, PyTorch, Stable-Baselines3 (PPO), MuJoCo, Gymnasium, Lambda Labs cloud GPUs (NVIDIA A10), React, TypeScript, Claude Code, Copilot Studio",
  },
  { group: "Languages", items: "JavaScript, HTML5, CSS, PHP, SQL and MySQL, Java and JSP, ASP, AJAX, XML, ActionScript, Lingo, AppleScript, VBScript, SMIL" },
  { group: "Design and 3D", items: "Photoshop, Illustrator, Fireworks, Painter, Acrobat, Maya, 3ds Max, Rhinoceros, Poser" },
  { group: "Multimedia", items: "Flash, Director, Silverlight" },
  { group: "Video and audio", items: "Final Cut Pro, Premiere, After Effects, Avid, Media Cleaner, QuickTime Pro, Windows Media encoding, Sound Forge, SoundEdit 16" },
  { group: "Hosting and data", items: "Akamai, Amazon EC2, Apache Tomcat, MySQL, Oracle" },
  { group: "Systems", items: "macOS, Windows, Linux" },
];
