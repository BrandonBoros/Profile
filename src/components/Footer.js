import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <a
          href="https://github.com/BrandonBoros"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <GitHubIcon />
        </a>
        <a
          href="www.linkedin.com/in/brandon-boros"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2025 Brandon Boros</p>
    </footer>
  );
}

export default Footer;
