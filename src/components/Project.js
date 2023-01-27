import { useEffect } from "react";
import ProjectGrid from "./ProjectGrid";

function Project() {
  useEffect(() => {
    document.body.className = "scroll-body";
    document.body.parentNode.className = "scroll-body";
  }, []);
  return (
    <section className="project-section">
      <h1>
        <span>self.</span>works
      </h1>
      <p>
        Here are some of the projects that I have developed and have been
        involved in developing.
      </p>

      <div className="project-container">
        <ProjectGrid
          title="Axie Infinity management tracker"
          description="This tracker uses the Axie Infinity v1 API endpoint to enable managers to track the progress of their scholars."
          technology={[
            "php",
            "codeigniter",
            "javascript",
            "mysql",
            "html",
            "css",
          ]}
          code="https://github.com/marvinraydalida/axie-management-tracker"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/E516M7RJG8E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </ProjectGrid>
        <ProjectGrid
          title="Filipino speech to Baybayin script"
          description="This simple application utilizes the Web Speech API and regular expressions (RegEx) to transcribe Filipino speech into the Baybayin writing system."
          technology={["javascript", "html", "css"]}
          code="https://github.com/marvinraydalida/baybayin-transcription"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1Ye4bzg2kqQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </ProjectGrid>
        <ProjectGrid
          title="Spot: Music mood prediction"
          description="Spot music mood prediction is a python based web application that predicts the mood of a track from Spotify."
          technology={[
            "python",
            "django",
            "sklearn",
            "javascript",
            "html",
            "css",
          ]}
          code="https://github.com/marvinraydalida/spot-music-mood-prediction"
        >
          <img src="/images/spot.png" alt="" />
        </ProjectGrid>
        <ProjectGrid
          title="Appointment management system"
          description="This is a dental clinic appointment management system, a system requirement for our Software Engineering 2 subject."
          technology={[
            "php",
            "codeigniter",
            "javascript",
            "mysql",
            "html",
            "css",
          ]}
          code="https://github.com/marvinraydalida/Appointment-system"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-c6--puzjjg?start=330"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </ProjectGrid>
      </div>
    </section>
  );
}

export default Project;
