import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Introduction() {
  return (
    <section className="introduction">
      <h1>Marvin Ray</h1>
      <h1>
        <span>Dalida</span>
      </h1>
      <p>
        Aspiring developer seeking to improve skills and knowledge. Eager to
        acquire new ideas and techniques that can drive success in projects and
        teams.
      </p>

      <div className="social">
        <a
          href="https://www.linkedin.com/in/marvinraydalida/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/marvinraydalida"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="http://discordapp.com/users/692694373460082779"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
    </section>
  );
}

export default Introduction;
