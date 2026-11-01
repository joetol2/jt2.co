// Career of record for the Experience page and the Work employer hubs.
// Merged from every source Joe has supplied: Resume 23, Resume 25, the KB
// resume, his earlier long-form resume, his Discovery/WBD and On2/Citigroup
// write-ups, the career narrative, the bio and the approved Master Career
// Record. Nothing is dropped: claims awaiting his confirmation are kept in
// `held` below and are not rendered until he approves them.

export type EmployerSlug = "agency" | "independent" | "wbd" | "fox" | "nbcu" | "citigroup" | "early";

export type Role = {
  title: string;
  team?: string;
  years: string;
  summary?: string;
  bullets: string[];
  lists?: { label: string; items: string[] }[];
  // Quantified results Joe has approved for publication.
  results?: string[];
  // Detail Joe has promised but not sent yet; rendered as a visible placeholder.
  placeholders?: string[];
};

export type Employer = {
  slug: EmployerSlug;
  name: string;
  years: string;
  blurb: string;
  results: string[];
  roles: Role[];
};

export const summary =
  "Product leader with three decades in interactive media, streaming, advertising and AI. I've led global streaming platform services at Discovery and Warner Bros. Discovery, built interactive ad products at FOX that generated $25M in their first 18 months, produced Emmy-winning digital experiences at NBC, and now lead AI product strategy at a creative agency. I work across product, engineering, data science, design, sales and the studio, and I'm happiest turning new technology into products people use.";

export const employers: Employer[] = [
  {
    slug: "agency",
    name: "Creative agency",
    years: "2025 to now",
    blurb: "Agency AI lead, turning generative AI into tools the creative teams use and services clients pay for.",
    results: [
      "Product lead on completed paid AI readiness audit work for a global consumer brand",
      "Creative search assistant in Microsoft Teams with internal asset search live",
      "Co-owner of the agency's Adobe Firefly creative AI production process",
      "Meeting-notes agent for the PMO built, published and tested in Teams",
    ],
    roles: [
      {
        title: "AI Product Strategy & Advanced Advertising Initiatives",
        years: "2025 to now",
        summary:
          "Leads AI product strategy for an agency moving from bespoke creative services to scalable, technology-enabled products across ad tech, AI and analytics.",
        results: [
          "Architected the EverIQ closed-loop media operating model with agentic AI, targeting 35% faster optimization cycles and a 14% ROAS lift.",
          "AI Readiness Audit: 8 client audits delivered in pilot and early rollout, with a 45% shorter audit cycle.",
          "Reduced rework 35% and accelerated decisions 30% by productizing advanced advertising capabilities and creative testing, with charters, SOWs and phase gates.",
          "Defined SaaS commercialization paths for audit and automation modules in three tiers, reaching 54% pilot-to-paid conversion.",
          "Shortlisted 15 tools and integrated 6 in the AI and analytics operating model.",
        ],
        bullets: [
          "Named agency AI lead; sets which AI capabilities to build, how they reach the people making the work, and which become client services.",
          "Product lead on an AI readiness audit for a global consumer brand that became completed paid work; productized the audit and its activation model.",
          "Specified a creative search assistant in Teams, built on Copilot Studio, that turns a plain-language request into a search of the internal asset library.",
          "Built and tested a meeting-notes agent for the PMO in Teams, and a timekeeping app prototype on Power Apps and Dataverse with Planner integration.",
          "Co-owns the creative AI production process built around Adobe Firefly, including its licensing economics and cross-functional rollout.",
          "Designed an agentic creative workflow with shared job and asset identifiers, an approval ledger and human sign-off at each stage.",
          "Created an AI law and policy reference hub that Claude Code updates weekly, and translated a client's data restrictions into IT requirements for Copilot.",
          "Shaped a portfolio of 31 advanced-advertising concepts, 12 of them AI-based, for client planning, and evaluated AI vendors and tools against the agency's operating model.",
          "Runs practical Copilot training for staff.",
        ],
      },
    ],
  },
  {
    slug: "independent",
    name: "Independent",
    years: "2023 to now",
    blurb: "Robotics with Sim2Real, client websites, and product consulting.",
    results: [
      "Product, experience and research review for Sim2Real, a robotics venture training robots in simulation",
      "Designed and built websites for a Human Design practice, a Pasadena art gallery and a community venue",
      "Pro bono redesign and rebuild for a nonprofit botanic garden",
    ],
    roles: [
      {
        title: "Product, experience and research review",
        team: "Robotics, including Sim2Real",
        years: "2024 to now",
        bullets: [
          "Works on product experience, positioning and story for a venture training robot policies in simulation and deploying them on hardware.",
          "Designed and built the Sim2Real website; executive producer of RoboWeekly.",
          "Reviews experiment design and critiques manuscripts, including work comparing reinforcement-learning approaches in simulation.",
          "Developed a teachable-action platform concept for turning voice, video or demonstration into reusable robot actions.",
        ],
      },
      {
        title: "Website design and build",
        team: "Client sites",
        years: "2024 to now",
        bullets: [
          "Designs and builds websites end to end for small businesses and nonprofits: structure, visual design, build and launch.",
          "Clients include Your Light Guide, The Pool House art gallery, 3RD SPACE and the Santa Ynez Valley Botanic Garden (pro bono).",
        ],
      },
      {
        title: "Product consultant",
        team: "Independent consulting",
        years: "2023",
        bullets: [
          "Product strategy and prototyping for an enterprise customer-experience platform and its partner portal.",
          "Brand, campaign and ecommerce strategy work for Lefty's Coffee Co. and EarthEssence; producer and art director on the MY HIVE animated book trailer.",
        ],
      },
    ],
  },
  {
    slug: "wbd",
    name: "Discovery / Warner Bros. Discovery",
    years: "2019 to 2023",
    blurb:
      "Product leadership for the core services behind discovery+ and the global streaming platform, and for growth and innovation across the direct-to-consumer business.",
    results: [
      "Led product for core platform services: CMS and metadata, internationalization, recommendations and personalization, search, ad tech, playback and internal APIs",
      "Product Owner and lead for the Core Customer Experience strategy, the Payments & Tax strategy and its monthly business reviews, and Canada expansion planning",
      "Member of the Product Leadership Team; selected for the Executive Fast Track and Mentorship Program",
      "Recruited product talent from companies including SpaceX, Apple, Uber and Amazon",
    ],
    roles: [
      {
        title: "Senior Director, Product, Core Services",
        team: "Warner Bros. Discovery / discovery+, Direct-to-Consumer & TV Everywhere",
        years: "2021 to 2023",
        summary:
          "Led product strategy and execution across the foundational services behind global direct-to-consumer streaming, working with platform engineering, product management, design, data science and commercial teams across web, mobile, connected TV and international markets.",
        results: [
          "Reduced ad latency 29% and improved ad render reliability by 8 points through advanced ad product development and ad-load modeling.",
          "Drove a 14% CTR lift and an 11% increase in session depth with recommendations, personalization and search improvements.",
          "Improved video startup time (TTP90) 27%, raised playback success 6 points and cut rebuffering 28%.",
          "Modernized metadata and internationalization architecture, unlocking 11 new markets with a 26% content coverage gain.",
          "Delivered +9% revenue per session through balanced ad-load policy, placement density and subscription offer-flow experiments.",
          "Increased delivery velocity 25% and cut cross-team thrash 30% through product governance and prioritization.",
        ],
        bullets: [
          "Directed product vision, roadmap and prioritization for core platform services: content management, metadata, internationalization, recommendations, personalization, search, advertising technology, video playback and internal APIs.",
          "Led cross-functional workstreams connecting reusable platform capabilities to consumer-facing experiences, keeping functionality consistent across devices and markets.",
          "Directed advanced advertising product requirements and ad-load modeling, balancing ad monetization with playback quality and customer experience; managed integrations with ad-tech partners including Brightline and Innovid.",
          "Partnered with machine-learning and engineering teams on recommendations, personalization and search, and with CTV platforms including Roku and Apple on universal search feeds.",
          "Advanced video-player and streaming-performance work on startup time, playback reliability and buffering.",
          "Worked with subscription commerce teams on payment-failure communications, renewals, account and billing touchpoints, and platform-specific purchasing; Product Owner and lead for the Payments & Tax strategy and its monthly business reviews.",
          "Shaped international streaming experiences, balancing global capabilities with regional requirements, localization and platform constraints across APAC, Canada, EMEA and LATAM.",
          "Product authority for compliance in metadata and content discovery, including CCPA, COPPA, FCC rules and accessibility standards.",
          "Established product prioritization and governance across dependent product and engineering teams; guided user acceptance testing and measured impact with subscriber-based metrics.",
          "Partnered with business and product marketing on monetization, including advertising strategies and subscription offer-flow experiments.",
          "Managed product development budgets against MSAs and SOWs, and led and mentored product managers, designers, data scientists and engineers.",
        ],
        lists: [
          {
            label: "Product workstreams",
            items: [
              "Ad tech architecture",
              "Advanced ad product development and ad-load modeling",
              "CMS and editorial tools",
              "Emerging technologies and experimentation",
              "Metadata and internationalization architecture",
              "Player CX features and functionality",
              "Recommendations and personalization (AI and machine learning)",
              "Search algorithm enhancements",
              "Video quality and performance",
            ],
          },
        ],
      },
      {
        title: "Director, Product, Growth & Innovation",
        team: "Discovery Inc. / discovery+, Direct-to-Consumer & TV Everywhere",
        years: "2019 to 2021",
        summary:
          "Directed product innovation and experimentation across Discovery's direct-to-consumer ecosystem, at the intersection of product, content and marketing, including the launch strategy for international content.",
        results: [
          "Launched a rapid experimentation program: 28 proofs of concept, 39% promoted to the roadmap, with 41% faster cycles.",
          "Testing guardrails (power and MDE standards, SRM checks, A/A tests, pre-registered hypotheses) reduced false positives 32%.",
          "Design-thinking practices raised stakeholder agreement from 54% to 67% and cut POC briefing time 22%.",
          "Cross-functional pilots raised engagement 13% and lowered churn 9% over the first 120 days.",
        ],
        bullets: [
          "Developed product innovation strategies aligned with consumer needs, business growth and emerging opportunities across streaming platforms.",
          "Established product discovery and experimentation practices using customer research, A/B testing, prototypes and measurable hypotheses.",
          "Led cross-functional initiatives with Product, Engineering, Design, Content and Marketing to identify and validate new product opportunities, and drove design-thinking practices across those teams.",
          "Developed KPI frameworks for engagement, adoption and retention, and built consensus on the metrics that define customer and business success.",
          "Guided emerging concepts from discovery through proof of concept and roadmap consideration, presenting them to senior executives.",
          "Product Owner and lead for the Core Customer Experience strategy and the Canada expansion planning, in French and English.",
        ],
      },
    ],
  },
  {
    slug: "fox",
    name: "FOX",
    years: "2014 to 2019",
    blurb: "Advanced advertising products, FNGENIUS, video publishing and social products across the FOX footprint.",
    results: [
      "Eight advanced interactive ad products that generated $25M in incremental revenue in their first 18 months",
      "Product Owner and lead product manager for FNGENIUS, a weekly live game show inside FOX's apps",
      "MPX video workflow architect and Adobe Social infrastructure architect",
      "Lead digital product owner for an Olympics at FOX",
    ],
    roles: [
      {
        title: "Director, Advanced Advertising Product Management",
        team: "Fox Networks Group, Advanced Ad Products",
        years: "2017 to 2019",
        summary:
          "The creation, operational integration, launch and long-term roadmap of new ad products driving linear and non-linear business goals across the FNG footprint.",
        results: [
          "FNGENIUS live interactive gaming reached three weekly activations and earned press coverage.",
          "Business cases, pro formas and KPI frameworks cut commercialization decisions from 13 weeks to 8 (38% faster).",
          "Aligned the ad tech feature set with sales strategy and measurement, improving sell-through 11% and reducing campaign fallout 18%.",
          "Process improvements yielded 23% opex efficiency; vendor and workstream management reduced escalations 31%.",
        ],
        bullets: [
          "Developed and operationalized eight advanced interactive engagement ad products across linear, CTV and digital, which generated $25M in incremental revenue in their first 18 months.",
          "Product Owner and lead product manager for FNGENIUS, a weekly live interactive game show delivered to FOX fans through direct-to-consumer apps.",
          "Owned the ad product roadmap; defined future concepts from competitive dynamics, sales strategy, platform and data-collection requirements.",
          "Built business cases, pro forma models and KPI frameworks for new ad product releases.",
          "Recruited and managed product managers, and ran cross-functional and parallel development teams.",
          "Managed third-party and internal resources: NDAs, MSAs, SOWs, budgets, interviewing, contract and rate negotiations and compliance.",
        ],
      },
      {
        title: "Senior Product Manager, Video Products & Platforms",
        team: "FOX Broadcasting, FBC Digital",
        years: "2015 to 2017",
        results: [
          "Architected the video pipeline and MPX workflows, cutting time-to-publish 42% and publish failures 38% (from about 3.1% to 1.9%).",
          "Lifted sell-through 12% on priority tentpoles through packaging, inventory eligibility and forecasting improvements.",
          "Vendor governance with standardized rate cards and acceptance gates reduced cost overruns 21%.",
          "SEO and content-ops enhancements improved discoverability 23%.",
        ],
        bullets: [
          "MPX account and workflow architect; built digital video ingest, transcoding and publishing processes and systems.",
          "Ran product lifecycles for web, mobile apps, web series and sponsorship integrations for FOX's direct-to-consumer digital initiatives, including FOX NOW.",
          "Owned content publishing and collaboration systems, cross-platform monetization and traffic analytics, and SEO.",
          "Managed third-party vendors and internal resources, budgets and contracts.",
        ],
      },
      {
        title: "Senior Product Manager, Social Media Products & Operations",
        team: "FOX Broadcasting, FBC Digital",
        years: "2014 to 2015",
        bullets: [
          "Adobe Social infrastructure architect and administrator; owned content publishing and collaboration systems.",
          "Ran product lifecycles for web, mobile apps, social media, web series and sponsorship integrations for FOX show initiatives, including second-screen experiences.",
          "Managed editorial, social, design, sales, marketing, scripted brand and vendor teams day to day.",
          "Worked with marketing and sales so merchandising and marketing plans supported strategic goals.",
        ],
        lists: [
          {
            label: "Led initiatives for",
            items: ["Empire", "Gotham", "The Simpsons", "Family Guy", "American Idol", "The Last Man on Earth", "MasterChef", "Sleepy Hollow", "Stand Up to Cancer"],
          },
        ],
      },
    ],
  },
  {
    slug: "nbcu",
    name: "NBCUniversal",
    years: "2006 to 2014",
    blurb: "Digital lead for NBC's shows, from the Emmy-winning Heroes Digital Experience to the Winter Olympics.",
    results: [
      "Lead producer of the Heroes Digital Experience, winner of the Primetime Emmy for Outstanding Interactive Television Programming",
      "Brokered and led a 10-week, $4.3M interactive sponsor integration for Deal or No Deal, the largest to date for NBC.com",
      "NBC's first fan site deal, bringing 18.9 million unique visitors to NBC in six weeks, and NBC's first second-screen experience",
      "Lead production for more than 30 original digital series, and weekly Heroes graphic novels for four years",
      "Lead digital product owner for two Olympic Games",
    ],
    roles: [
      {
        title: "Senior Producer",
        team: "NBC Entertainment Marketing & Digital",
        years: "2006 to 2014",
        summary:
          "Principal digital contact for show producers and project lead across NBC's entertainment slate, covering product lifecycle and roadmaps, interactive production, second-screen experiences, webisodes, graphic novels, games, social platforms, eBooks, monetization and analytics.",
        results: [
          "Drove the Deal or No Deal Lucky Case Game to $6MM+ net per airing, three times weekly, building a repeatable second-screen revenue engine.",
          "Built cross-platform sponsorship and content operations that improved throughput 28%.",
        ],
        bullets: [
          "Led the creative conception and end-to-end production of the Emmy-winning Heroes Digital Experience.",
          "Brokered and led a 10-week, $4.3M linear and non-linear sponsor integration for Deal or No Deal, the largest to date for NBC.com.",
          "Responsible for NBC's first fan site deal, which brought 18.9 million unique visitors to NBC in its first six weeks; led NBC's first second-screen experience.",
          "Led production of more than 30 original digital series, including NBC Digital Studios' Gemini Division, and weekly Heroes graphic novels for more than four years.",
          "Developed and led Heroes iStory, which doubled site traffic in three weeks; produced and ran the Heroes exhibits at Comic-Con from 2007 through 2009.",
          "Lead producer of Grimm: The Essential Guide eBooks for Seasons 1 and 2; led The Office's \"Make Your Own Promo\" YouTube contest.",
          "Ran editorial, design, sales, marketing, technology, video and vendor teams in parallel, with budgets, hiring, and contract and rate negotiations.",
          "Led brainstorms with show writers and executive producers on marketable digital ideas and product integrations; ran weekly approvals with legal, sponsors, show and studio executives.",
          "Managed day-parted content driven by traffic metrics, built show sites and campaigns hands-on, and created a new online production process for senior management.",
          "Supported digital talent and production negotiations, pitch materials for agencies, and digital marketing, promotion and distribution plans.",
        ],
        lists: [
          {
            label: "Digital lead for",
            items: [
              "Heroes",
              "Winter Olympics",
              "Grimm",
              "Saturday Night Live",
              "The Office",
              "30 Rock",
              "Community",
              "The Biggest Loser",
              "Law & Order: SVU",
              "Deal or No Deal",
              "Minute to Win It",
              "Gemini Division",
              "Kings",
              "NAACP Image Awards",
              "Stand Up to Cancer",
              "Comic-Con",
              "NBC Awards Screening Room",
              "Dracula",
              "Get Out Alive with Bear Grylls",
            ],
          },
        ],
        placeholders: ["Details on the two Olympic Games are coming."],
      },
    ],
  },
  {
    slug: "citigroup",
    name: "Citigroup",
    years: "2002 to 2006",
    blurb: "Enterprise digital production for Global Marketing and Internal Communications.",
    results: [
      "Portfolio of more than 40 ongoing digital projects for customers and employees",
      "Online campaigns and intranet for Citibank North America",
    ],
    roles: [
      {
        title: "Director, Interactive Production",
        team: "Global Marketing & Internal Communications",
        years: "2002 to 2006",
        results: [
          "Standardized digital production, reducing cycle time 28% and defects 33% (handoff errors per release from 1.8 to 1.2).",
          "Kanban cadence and intake SLAs improved on-time delivery 19%.",
          "Campaign reporting and weekly executive dashboards increased decision speed 24%.",
        ],
        bullets: [
          "Directed enterprise digital production and interactive communications, establishing product lifecycle processes and coordinating multidisciplinary delivery teams.",
          "Oversaw more than 40 ongoing digital projects on daily, weekly and bi-weekly schedules, spanning consumer-facing experiences and internal communications.",
          "Responsible for the design and build of Citibank North America (CBNA) online campaigns and the intranet.",
          "Managed front-end, back-end, video and third-party production teams across ecommerce, rewards, social networking, user profiling, data mining and reporting, Flash and Shockwave, and licensed-system integrations.",
          "Creative and technical advisor across web and video; guided stakeholders through information architecture, requirements and UX decisions, and ran client web and CD-ROM demos.",
        ],
      },
    ],
  },
  {
    slug: "early",
    name: "On2 and early work",
    years: "1994 to 2002",
    blurb: "Digital video, CD-ROMs and the early web, for On2 Technologies and clients from AT&T and Sony to the Yankees and *NSYNC.",
    results: [
      "Interactive production at a digital video technology company during the early years of online multimedia",
      "Senior Producer on the New York Yankees Interactive Yearbook CD-ROM and an early *NSYNC website",
      "Consulting clients including AT&T, Sony, RCA, Panasonic, Pfizer, Lucent Technologies, Columbia University and George magazine",
    ],
    roles: [
      {
        title: "Senior Interactive Production Manager",
        team: "On2 Technologies (acquired by Google in 2010, after Joe's tenure)",
        years: "1997 to 2002",
        results: [
          "Cut delivery times 26% through process innovation, and built a reusable component library that reduced development effort 21%.",
          "Coordinated multidisciplinary vendor teams across 7 concurrent builds with standardized QA and acceptance gates.",
        ],
        bullets: [
          "Managed interactive production during an early period of online multimedia, coordinating front-end, back-end and video production teams with outside technology partners.",
          "Established digital production processes, quality standards and delivery of client-facing interactive experiences, with about a dozen projects running at a time.",
          "Primary client contact for information architecture and UX requirements, translating business goals into workable product specifications.",
          "Creative and technical advisor across web and video, and mentor to junior staff; built the foundation in digital video that later shaped product leadership in streaming.",
        ],
      },
      {
        title: "Interactive Production Consultant",
        team: "Independent",
        years: "1996 onward",
        bullets: [
          "Produced multi-platform projects and helped clients develop interactive and streaming content, including live-streamed webisodes and musical performances, podcasts and second-screen experiences on Unix, Windows and Mac servers.",
          "Senior Producer on the New York Yankees Interactive Yearbook CD-ROM (1998) and an early *NSYNC website and multimedia catalog, both direct engagements, and built the Archie Comics website (1998).",
        ],
        lists: [
          {
            label: "Clients",
            items: ["AT&T", "Archie Comics", "Columbia University", "Lucent Technologies", "Panasonic", "Pfizer", "George magazine", "New York Yankees", "*NSYNC", "RCA", "Sony"],
          },
        ],
      },
      {
        title: "Senior Multimedia Developer and Interactive Graphic Designer",
        team: "Gráfica Interactive",
        years: "1994 to 1997",
        bullets: [
          "Designed and programmed CD-ROM products and multimedia presentations for internal and client use.",
          "Managed client website production, coordinated freelancers and designed site templates.",
          "Programmed JavaScript and HTML for a corporate intranet and ran Mac WebSTAR, Windows NT and FTP servers.",
        ],
      },
    ],
  },
];

export const leadership = [
  "Selected for an Executive Fast Track and Mentorship Program.",
  "Member of the Product Leadership Team at Discovery, shaping company direction, culture and growth, and entrusted with VP-level responsibilities and decisions.",
  "Council Member, New Media, Producers Guild of America.",
  "Former Co-Chair, Emmy Awards Working Group, Interactive Media Peer Group, Academy of Television Arts & Sciences: co-led the group's philosophy, definitions and management of Emmy submissions, judging and presentation.",
  "Former Executive Committee Member, Interactive Media Peer Group, Academy of Television Arts & Sciences, the committee that administers the Primetime Emmy Awards for Outstanding Creative Achievement in Interactive Media.",
];

// Held for Joe's confirmation. Kept so nothing is lost; not rendered.
export const held = [
  { source: "KB resume", claim: "Built teams that would net the organization multi-billion-dollar deals" },
  { source: "Earlier long-form resume", claim: "Daily management of 23 employees at NBC" },
  { source: "Resume 25", claim: "Team sizes and reporting lines: ~12 with 4 direct reports (agency), 7 (Hawaii.com), 12 matrixed (WBD), 8 PMs (FOX), 4 (FOX video), 17 teams (NBC), 12 (Citigroup), 11 (On2)" },
  { source: "Resume 25", claim: "Hawaii.com VP, Product (consulting) engagement, 2024 to 2025" },
  { source: "Television Academy service", claim: "Exact years: 2010 to 2016 or 2017 (co-chair), 2010 to 2014 or 2011 to 2017 (executive committee)" },
];
