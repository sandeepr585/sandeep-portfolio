import "./App.css";

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiAnthropic,
  SiJupyter,
} from "react-icons/si";

import { TbBrain, TbSparkles } from "react-icons/tb";

function App() {
  const projects = [
    {
      title: "ServiConnect",
      description:
        "A full-stack service marketplace connecting customers with trusted professionals for home services, including service discovery, bookings, cart, payments, provider management, ratings, and admin workflows.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/sandeep585/Servi-Connect",
      liveDemo: "https://serviconnect-phi.vercel.app/",
    },
    {
      title: "CANTEEN-XPRESS",
      description:
        "A web-based canteen management and food ordering project designed to simplify ordering, improve canteen operations, and provide a convenient digital experience.",
      tech: ["Java", "Web Development", "MySQL"],
      github: "https://github.com/sandeepr585/CANTEEN-XPRESS",
    },
  ];

  const technologies = [
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "REST APIs",
      icon: <TbSparkles />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
  ];

  const aiTools = [
    {
      name: "Artificial Intelligence",
      icon: <TbBrain />,
    },
    {
      name: "Generative AI",
      icon: <TbSparkles />,
    },
    {
      name: "ChatGPT",
      icon: <TbSparkles />,
    },
    {
      name: "Claude",
      icon: <SiAnthropic />,
    },
  ];

  const developmentTools = [
    {
      name: "AWS",
      icon: <FaAws />,
    },
    {
      name: "VS Code",
      icon: <FaCode />,
    },
    {
      name: "Eclipse",
      icon: <FaLaptopCode />,
    },
    {
      name: "Jupyter",
      icon: <SiJupyter />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Sandeep<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#tools">Tools</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Sandeep Reddy</span>
          </h1>

          <h2>
            Full-Stack Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications using
            Java, React, Spring Boot, MySQL, AI technologies and modern
            development tools.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View My Projects
            </a>

            <a
              href="https://www.linkedin.com/in/sandeep-reddy-mucha-60a07034b"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="hero-card">

          <div className="code-window">

            <div className="code-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Sandeep Reddy",
  role: "Full-Stack Developer",

  stack: [
    "Java",
    "React",
    "Spring Boot",
    "MySQL"
  ],

  interests: [
    "AI",
    "Generative AI",
    "Cloud"
  ],

  available: true
};`}
            </pre>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        className="section about"
        id="about"
      >

        <div className="section-heading">

          <p>ABOUT ME</p>

          <h2>
            Building solutions with code
          </h2>

        </div>

        <div className="about-content">

          <div className="about-text">

            <p>
              I'm Sandeep Reddy, a Full-Stack Developer interested
              in building practical, scalable and user-friendly
              web applications.
            </p>

            <p>
              I work across frontend and backend development with
              technologies such as React, Java, Spring Boot and MySQL.
              I also explore Artificial Intelligence and Generative AI
              to build smarter software solutions.
            </p>

            <p>
              My projects include service marketplaces, booking
              workflows, database-driven applications, dashboards
              and modern responsive interfaces.
            </p>

            <a
              href="mailto:muchasandeepreddy176@gmail.com"
              className="text-link"
            >
              Let's connect →
            </a>

          </div>

          {/* ABOUT STATS */}
          {/* Projects 2+ CARD REMOVED */}

          <div className="about-stats">

            <div className="stat-card">
              <strong>15+</strong>
              <span>Technologies</span>
            </div>

            <div className="stat-card">
              <strong>Full</strong>
              <span>Stack Development</span>
            </div>

            <div className="stat-card">
              <strong>AI</strong>
              <span>Exploration</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section
        className="section skills-section"
        id="skills"
      >

        <div className="section-heading">

          <p>TECHNOLOGIES</p>

          <h2>
            Technologies I work with
          </h2>

        </div>

        <div className="skills-grid">

          {technologies.map((technology) => (

            <div
              className="skill-card"
              key={technology.name}
            >

              <span className="skill-icon">
                {technology.icon}
              </span>

              <span>
                {technology.name}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* ================= AI & GENERATIVE AI ================= */}

      <section
        className="section tools-section"
      >

        <div className="section-heading">

          <p>AI & GENERATIVE AI</p>

          <h2>
            Exploring intelligent technologies
          </h2>

        </div>

        <div className="skills-grid">

          {aiTools.map((tool) => (

            <div
              className="skill-card ai-card"
              key={tool.name}
            >

              <span className="skill-icon">
                {tool.icon}
              </span>

              <span>
                {tool.name}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* ================= DEVELOPMENT TOOLS ================= */}

      <section
        className="section tools-section"
        id="tools"
      >

        <div className="section-heading">

          <p>DEVELOPMENT TOOLS</p>

          <h2>
            Tools & platforms
          </h2>

        </div>

        <div className="skills-grid">

          {developmentTools.map((tool) => (

            <div
              className="skill-card"
              key={tool.name}
            >

              <span className="skill-icon">
                {tool.icon}
              </span>

              <span>
                {tool.name}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        className="section projects-section"
        id="projects"
      >

        <div className="section-heading">

          <p>MY WORK</p>

          <h2>
            Projects
          </h2>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={project.title}
            >

              <div className="project-number">
                PROJECT /{" "}
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="tech-list">

                {project.tech.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

              {/* SERVICONNECT = LIVE DEMO */}

              {project.title === "ServiConnect" ? (

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Live Demo →
                </a>

              ) : (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>

              )}

            </div>

          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-content">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's build something great.
          </h2>

          <p>
            I'm open to opportunities, collaborations and
            interesting projects.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:muchasandeepreddy176@gmail.com"
              className="contact-btn"
            >
              Email Me
            </a>

            <a
              href="tel:8074452585"
              className="contact-btn"
            >
              Call Me
            </a>

            <a
              href="https://www.linkedin.com/in/sandeep-reddy-mucha-60a07034b"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              LinkedIn
            </a>

          </div>

          <div className="contact-details">

            <span>
              muchasandeepreddy176@gmail.com
            </span>

            <span>
              8074452585
            </span>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © {new Date().getFullYear()} Sandeep Reddy.
          Built with React.
        </p>

        <a
          href="https://github.com/sandeep585"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

      </footer>

    </div>
  );
}

export default App;