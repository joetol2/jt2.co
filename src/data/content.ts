// Site copy. Claims follow Joe's approved Master Career Record v1.1: no
// generated metrics, no client names from the current agency role.

const media = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;

export const CONTACT_EMAIL = "jt@jt2.co";
export const LINKEDIN_URL = "https://www.linkedin.com/in/jtol2";

export type Video =
  | { kind: "vimeo"; id: string; title: string }
  | { kind: "youtube"; id: string; title: string }
  | { kind: "file"; src: string; poster?: string; title: string };

export type Category = "ai" | "streaming" | "advertising" | "storytelling" | "early";

// Work sub-nav tabs, in order. Each case study belongs to one.
export const categories: { slug: Category; label: string; blurb: string }[] = [
  { slug: "ai", label: "AI & Robotics", blurb: "Putting AI to work at a creative agency, and teaching robots in simulation." },
  { slug: "streaming", label: "Streaming & Platforms", blurb: "The services and live events behind global streaming." },
  { slug: "advertising", label: "Advertising", blurb: "Interactive ad products and sponsorships across TV, streaming and digital." },
  { slug: "storytelling", label: "Interactive Storytelling", blurb: "Digital worlds, web series and social video that took NBC shows beyond the broadcast." },
  { slug: "early", label: "Early Web & Independent", blurb: "Where it started, and the projects I take on now." },
];

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
    slug: "fngenius",
    category: "advertising",
    title: "A live game show inside the TV app",
    org: "FOX",
    years: "2014 to 2019",
    role: "Director, Advanced Advertising Product Management",
    summary:
      "FNGENIUS, a weekly live interactive game show for FOX fans, and a portfolio of interactive ad products across linear, CTV and digital.",
    body: [
      "At Fox Networks Group I ran advanced advertising product management: the creation, launch and roadmap of new ad products that worked across linear TV, connected TV and digital. I built the business cases, pro forma models and KPI frameworks, and managed product managers alongside third-party vendors.",
      "We developed and operationalized eight advanced interactive engagement ad products, which generated $25M in incremental revenue in their first 18 months.",
      "I was Product Owner and lead product manager for FNGENIUS, a weekly live interactive game show delivered to FOX fans through direct-to-consumer apps, with real-time trivia played alongside FOX programming. Before that I ran social media and then video products at FOX Broadcasting, including the MPX video publishing workflows.",
    ],
    stat: { value: "$25M", label: "first 18 months" },
    videos: [{ kind: "vimeo", id: "216764413", title: "Advanced ad products sizzle" }],
    reel: [
      {
        title: "FOX and FX ad products",
        videos: [
          { id: "218024087", title: "FX Originals ad model" },
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
        title: "Sizzle reels",
        videos: [
          { id: "259221601", title: "Ad products sizzle reel" },
          { id: "259221424", title: "Advanced ad products :30" },
          { id: "302927895", title: "FNG sizzle, alternate cut" },
          { id: "237109218", title: "FNG Magic promo" },
        ],
      },
      {
        title: "FNGENIUS",
        videos: [
          { id: "293221649", title: "FNGENIUS social sizzle with Twix" },
          { id: "293442078", title: "FNGENIUS social sizzle" },
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
      {
        title: "Product demos",
        videos: [
          { id: "259221394", title: "FOX NOW on Apple TV" },
          { id: "302928103", title: "FNG design system demo" },
        ],
      },
    ],
    links: [
      { label: "Forbes on FNGENIUS", href: "https://bit.ly/2Cv63ZT" },
      { label: "Deadline on FNGENIUS", href: "https://bit.ly/2O2zNPb" },
    ],
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
    slug: "fngenius",
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
export const featured = ["agency-ai", "sim2real", "streaming-platform", "fngenius", "live-events", "heroes"];

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
