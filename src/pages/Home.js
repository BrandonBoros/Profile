import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import profile from "../assets/profile.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={profile} alt="Profile" className="profile-picture" />
        <h2>Hi, I'm Brandon</h2>
        <p>Game Developer passionate about building fun applications.</p>
        <div className="social-links">
          <a
            href="www.linkedin.com/in/brandon-boros"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="brandon.boros1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/BrandonBoros"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skills-container">
          <div className="card">
            <h2>Programming</h2>
            <p>
              WPF, Android Studio Jetpack Compose, ASP.net, React.js, Node.js,
              MySQL, REST APIs, Monogame
            </p>
          </div>
          <div className="card">
            <h2>Operating Systems & Tools</h2>
            <p>Linux, Windows, Mac, CLI, Git, GitHub</p>
          </div>
          <div className="card">
            <h2>Languages</h2>
            <p>JavaScript, TypeScript, C#, Python, Rust, Bash, SQL, Kotlin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
