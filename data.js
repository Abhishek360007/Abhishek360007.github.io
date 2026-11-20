// ============================================================
//  EDIT THIS FILE — all portfolio content lives here.
//  index.html / script.js render everything from this object.
// ============================================================
const PORTFOLIO = {
  name: "Abhishek Raj",
  initials: "AR",
  role: "Full Stack Java Developer",
  typingExtra: ["Spring Boot Engineer", "React Developer", "Problem Solver"],
  tagline:
    "I build and deploy <b>production-ready web apps</b> with <b>Java, Spring Boot, React.js</b> and <b>SQL databases</b>, with a focus on <b>secure REST APIs</b>, <b>automated testing</b> and <b>CI/CD</b>.",
  openToWork: true,
  workPrefs: ["Full Stack", "Java Backend", "Remote", "Hybrid", "On-site"],
  photo: "", // empty = initials in the photo ring; set e.g. "assets/profile.jpg" for a photo
  resume: "assets/resume.pdf",
  location: "Dehradun, India",
  email: "abhiraj360007@gmail.com",
  phone: "+91 7739081271",
  whatsapp: "917739081271", // digits only; set to "" to hide
  githubUser: "Abhishek360007",

  socials: [
    { name: "GitHub", url: "https://github.com/Abhishek360007", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abhishek360007/", icon: "linkedin" },
    { name: "LeetCode", url: "https://leetcode.com/u/Abhishek360007/", icon: "code" },
    { name: "Email", url: "mailto:abhiraj360007@gmail.com", icon: "mail" },
  ],

  about: [
    "I'm a <b>Full Stack Java Developer</b> and B.Tech Computer Science student (graduating <b>2027</b>) with professional experience building and deploying web applications for clients.",
    "I enjoy the hard parts of backend engineering: <b>concurrency-safe booking systems</b>, <b>payment flows</b>, <b>role-based security</b> and <b>AI-powered features</b> with Spring AI and RAG. Every project I ship is tested, containerised with Docker and deployed through GitHub Actions CI/CD.",
    "I'm also a competitive programmer, ranked in the <b>top 6.9% globally</b> on LeetCode with <b>450+ problems solved</b>. I'm currently looking for <b>Full Stack / Java Backend Developer</b> roles.",
  ],

  // decimals: optional, for values like 6.9
  stats: [
    { value: 450, suffix: "+", label: "DSA Problems Solved" },
    { prefix: "Top ", value: 6.9, decimals: 1, suffix: "%", label: "LeetCode Contest Rating" },
    { value: 500, suffix: "+", label: "Automated Tests Written" },
    { value: 9, suffix: "", label: "Live Deployed Projects" },
  ],

  experience: [
    {
      role: "Full Stack Developer",
      company: "Pratinik Infotech",
      period: "May 2026 – Sep 2026",
      location: "Remote",
      summary: "Built and shipped full-stack web applications for client projects.",
      points: [
        "Developed and deployed full-stack web applications using <b>Java, Spring Boot and React.js</b> for client projects.",
        "Designed <b>RESTful APIs</b> and backend services with Spring Boot, using <b>Spring Data JPA and Hibernate</b> for efficient, scalable data access.",
        "Collaborated through <b>Git</b>-based workflows and code reviews; tested API endpoints with <b>Postman</b>.",
      ],
      tags: ["Java", "Spring Boot", "React.js", "Spring Data JPA", "Hibernate", "Git", "Postman"],
    },
    {
      role: "Web Development Intern",
      company: "CodSoft",
      period: "Jul 2025 – Aug 2025",
      location: "Remote",
      summary: "Completed a 4-week virtual internship, building front-end projects for the program's assigned tasks.",
      points: [
        "Built a <b>personal portfolio website</b> with <b>HTML and CSS</b>, with header, about, skills, projects, resume download and contact sections.",
        "Designed a <b>landing page</b> with a structured layout (banner, content sections and a call-to-action link), focusing on alignment, spacing and colour.",
        "Built a working <b>calculator</b> in <b>HTML, CSS and JavaScript</b> with arithmetic operators, decimals, clear and backspace, and error handling for invalid input.",
        "Managed and published all task code on <b>GitHub</b>.",
      ],
      tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    },
  ],

  // Icon can be:
  //   a skillicons.dev id        e.g. "java"   (https://skillicons.dev)
  //   a full image URL           e.g. "https://cdn.simpleicons.org/junit5"
  //   a built-in glyph "svg:x"   x = db | api | responsive | test | container | oop | layers | threads | tree | pattern | system
  skills: [
    { group: "Languages", items: [["Java", "java"], ["JavaScript", "js"], ["TypeScript", "ts"], ["SQL", "svg:db"], ["C++", "cpp"]] },
    {
      group: "Backend",
      items: [
        ["Spring Boot", "spring"],
        ["Spring MVC", "spring"],
        ["Spring Security", "https://cdn.simpleicons.org/springsecurity"],
        ["Spring Data JPA", "spring"],
        ["Hibernate", "hibernate"],
        ["REST APIs", "svg:api"],
        ["GraphQL", "graphql"],
        ["JWT", "https://cdn.simpleicons.org/jsonwebtokens/white"],
        ["Spring AI", "spring"],
        ["Node.js", "nodejs"],
      ],
    },
    { group: "Frontend", items: [["React.js", "react"], ["Redux Toolkit", "redux"], ["HTML5", "html"], ["CSS3", "css"], ["Responsive Design", "svg:responsive"]] },
    { group: "Databases & Caching", items: [["PostgreSQL", "postgres"], ["MySQL", "mysql"], ["MongoDB", "mongodb"], ["Redis", "redis"], ["pgvector", "postgres"]] },
    {
      group: "Testing",
      items: [
        ["JUnit 5", "https://cdn.simpleicons.org/junit5"],
        ["Mockito", "svg:test"],
        ["Testcontainers", "svg:container"],
        ["Vitest", "vitest"],
        ["Playwright", "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/playwright/playwright-original.svg"],
      ],
    },
    { group: "DevOps & Cloud", items: [["Docker", "docker"], ["GitHub Actions", "githubactions"], ["Render", "https://cdn.simpleicons.org/render/white"], ["AWS (Basics)", "aws"], ["Linux", "linux"]] },
    { group: "Developer Tools", items: [["Git", "git"], ["GitHub", "github"], ["Maven", "maven"], ["Postman", "postman"], ["IntelliJ IDEA", "idea"], ["VS Code", "vscode"]] },
    {
      group: "Core Concepts",
      items: [["OOP", "svg:oop"], ["Collections", "svg:layers"], ["Multithreading", "svg:threads"], ["DSA", "svg:tree"], ["Design Patterns", "svg:pattern"], ["System Design", "svg:system"]],
    },
  ],

  // category must match one of projectFilters (except "All")
  // image: screenshot shown on the card ("" = generated banner). featured: true = large card (tagline + highlights shown only on featured cards).
  projectFilters: ["All", "Full Stack", "AI", "Backend", "Frontend"],
  projectsVisible: 6, // the rest appear after "Show all projects" (0 = show everything)
  projects: [
    {
      title: "SeatVault: Event Ticket Booking",
      category: "Full Stack",
      image: "assets/projects/seatvault-wide.jpg",
      tagline: "Concurrency-safe event ticketing: no seat is ever sold twice.",
      highlights: [["25+", "REST APIs"], ["121", "Automated tests"], ["49%", "Faster startup"]],
      description:
        "Concurrency-safe ticketing with <b>25+ REST APIs</b> and live WebSocket seat maps; <b>row locking</b> means no seat is ever sold twice. Razorpay checkout with idempotent payments and auto-refunds, signed QR tickets with gate check-in, <b>121 automated tests</b>, and startup cut by <b>49%</b> with a JVM CDS archive.",
      tags: ["Java 17", "Spring Boot 3", "PostgreSQL", "Redis", "WebSockets", "Docker"],
      github: "https://github.com/Abhishek360007/SeatVault",
      live: "https://abhishekraj.is-a.dev/SeatVault/demo/",
    },
    {
      title: "AI Resume Analyzer: AI Recruitment Platform",
      category: "AI",
      image: "assets/projects/resume-wide.jpg",
      tagline: "LLM-powered hiring: parse, match and rank candidates with explainable scores.",
      highlights: [["90+", "GraphQL operations"], ["768-dim", "pgvector RAG"], ["400+", "Automated tests"]],
      description:
        "AI hiring platform that parses bulk PDF/DOCX resumes with an LLM and ranks candidates using <b>explainable weighted scoring</b>. RAG semantic search over <b>768-dim pgvector</b> embeddings, an async Pekko pipeline with live SSE progress, and <b>90+ GraphQL operations</b> secured with 4-role RBAC. Backed by <b>400+ tests</b>.",
      tags: ["Java 21", "Spring AI", "React", "TypeScript", "pgvector", "GraphQL"],
      github: "https://github.com/Abhishek360007/Ai_Resume_Analyzer",
      live: "https://abhishek360007.github.io/Ai_Resume_Analyzer/demo/",
    },
    {
      title: "AI Code Review Assist: Code Review Tool",
      category: "AI",
      image: "assets/projects/codereview.jpg",
      description:
        "Paste code in <b>16 languages</b> and get a scored, severity-ranked review with exact line numbers, a fix for every issue and a corrected-file diff, powered by Google Gemini.",
      tags: ["Java 17", "Spring Boot 3", "React 18", "PostgreSQL", "Gemini"],
      github: "https://github.com/Abhishek360007/AI-Code-Review-Assist",
      live: "https://abhishek360007.github.io/AI-Code-Review-Assist/demo/",
    },
    {
      title: "ShopVerse: E-commerce Platform",
      category: "Full Stack",
      image: "assets/projects/shopverse.jpg",
      description:
        "Full-stack store with JWT auth, a wishlist synced across devices, server-side order pricing, 6-step order tracking and an admin analytics dashboard. Dockerised, with GitHub Actions CI, deployed on Render and Neon.",
      tags: ["Spring Boot 4", "Java 25", "React 18", "Docker", "CI/CD"],
      github: "https://github.com/Abhishek360007/ShopVerse",
      live: "https://abhishek360007.github.io/ShopVerse/demo/",
    },
    {
      title: "Attendance Management System: Biometric Attendance & Payroll",
      category: "Full Stack",
      image: "assets/projects/attendance.jpg",
      description:
        "Attendance, leave and payroll for companies using <b>ZKTeco biometric devices</b>. A sync agent streams punches from the office PC into PostgreSQL; the dashboard works out present, late, half day and overtime, with <b>4-role access</b>, leave and punch-correction approvals, <b>attendance-based payroll</b> with CSV export, email alerts and an audit log. Backed by <b>44 tests</b>.",
      tags: ["Java 25", "Spring Boot 4", "PostgreSQL", "Flyway", "Testcontainers", "Docker"],
      github: "https://github.com/Abhishek360007/Attendence-Management-System",
      live: "https://attendance-management-system-5pid.onrender.com",
    },
    {
      title: "TenantHub: Multi-tenant SaaS",
      category: "Full Stack",
      image: "assets/projects/tenanthub.jpg",
      description:
        "Multi-tenant SaaS for Indian businesses with a <b>database per tenant</b>, RBAC, ₹ subscription plans with GST and Razorpay, and email/SMS OTP sign-in.",
      tags: ["Spring Boot 3", "Vue 3", "Multi-tenancy", "Razorpay"],
      github: "https://github.com/Abhishek360007/Multi-tenant-Saas-Platform",
      live: "https://tenanthub-admin.onrender.com",
    },
    {
      title: "Campus Canteen: Pre-ordering System",
      category: "Full Stack",
      image: "assets/projects/canteen.jpg",
      description:
        "Order ahead and skip the queue: a live kitchen board, pickup codes, wallet and Razorpay payments, demand forecasting, smart recommendations, reviews and complaints.",
      tags: ["Spring Boot 3", "React 19", "PostgreSQL", "Razorpay"],
      github: "https://github.com/Abhishek360007/Canteen-Management-System-",
      live: "https://abhishek360007.github.io/Canteen-Management-System-/demo/",
    },
    {
      title: "Online Quiz Portal: Timed Quiz Platform",
      category: "Full Stack",
      image: "assets/projects/quiz.jpg",
      description:
        "Production-ready quiz platform with role-based auth (Spring Security + BCrypt), server-enforced timers and auto-grading with explained corrections. Dockerised, with 43 automated tests.",
      tags: ["Java", "Spring Security", "PostgreSQL", "Docker", "Render"],
      github: "https://github.com/Abhishek360007/Online-Quiz-Portal",
      live: "https://online-quiz-portal-jxsr.onrender.com",
    },
    {
      title: "BookMySeat: Movie Booking API",
      category: "Backend",
      image: "assets/projects/bookmyseat.jpg",
      description:
        "Movie ticket booking REST API with seat holds and <b>optimistic locking</b>, so no seat is ever double-booked. Secured with JWT, with Redis for caching.",
      tags: ["Spring Boot 4", "PostgreSQL", "Redis", "JWT"],
      github: "https://github.com/Abhishek360007/BookMySeat",
      live: "",
    },
    {
      title: "Scientific Calculator: Pure HTML, CSS & JS",
      category: "Frontend",
      image: "",
      description:
        "A fast, responsive scientific calculator in pure HTML, CSS and JS: trig, logs, powers, DEG/RAD, live preview, history, keyboard support and themes. No eval(), no dependencies.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Abhishek360007/Scientific-Calculator",
      live: "https://abhishek360007.github.io/Scientific-Calculator/",
    },
  ],

  certifications: [
    { title: "LeetCode Contest Rating", issuer: "450+ problems on LeetCode, Codeforces & HackerRank", date: "Competitive Programming", url: "https://leetcode.com/u/Abhishek360007/", badge: "Top 6.9%" },
    { title: "Web Development Internship", issuer: "CodSoft · 4-week virtual internship", date: "Jul 2025 – Aug 2025", url: "assets/certificates/codsoft-web-development.pdf", badge: "" },
    { title: "Adobe University Hackathon 2026", issuer: "Adobe · Round 1 Online Assessment (MCQ + Coding), via Unstop", date: "Aug 2026", url: "assets/certificates/adobe-university-hackathon-2026.pdf", badge: "" },
    { title: "Advanced Python Training", issuer: "Appwars Technologies · 10-day training at Tula's Institute", date: "Nov 2025", url: "assets/certificates/appwars-advanced-python.pdf", badge: "" },
    { title: "Soft Skills Masterclass", issuer: "SkillEcted · Webinar", date: "Mar 2026", url: "assets/certificates/skillected-soft-skills.pdf", badge: "" },
    { title: "Generative AI Fluency", issuer: "nasscom FutureSkills Prime · IT-ITeS Sector Skills Council", date: "Aug 2026", url: "assets/certificates/nasscom-generative-ai-fluency.pdf", badge: "" },
    { title: "Gen AI NASSCOM Course", issuer: "SFJ · Skill Development Program", date: "Feb 2026", url: "assets/certificates/sfj-gen-ai-nasscom.jpg", badge: "" },
    { title: "HTML Training", issuer: "Spoken Tutorial Project, IIT Bombay · Score 82.5%", date: "Jun 2024", url: "assets/certificates/iit-bombay-spoken-tutorial-html.pdf", badge: "" },
    { title: "AWS Cloud Practitioner", issuer: "ICT Academy in association with AWS · Grade B", date: "Apr 2025", url: "assets/certificates/ict-academy-aws-cloud-practitioner.pdf", badge: "" },
    { title: "Inter-college Technical Fest", issuer: "Represented Tula's Institute; project commended by the industry judging panel", date: "Achievement", url: "", badge: "" },
  ],

  education: [
    {
      school: "Tula's Institute, Uttarakhand Technical University · Dehradun",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Aug 2023 – Jul 2027",
      description: "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.",
      tags: ["CGPA 7.2/10"],
    },
  ],
};
